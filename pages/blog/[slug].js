import React from "react";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";

const BlogPost = ({ markdownHtml, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: markdownHtml }} />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  console.log("Files: ", files);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  console.log("Paths: ", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownString = fs
    .readFileSync(path.join("posts", slug, slug + ".md"))
    .toString();

  console.log(markdownString);

  const markdownParsed = matter(markdownString);

  const markdownHtml = marked(markdownParsed.content);

  const imagePaths = markdownHtml.matchAll(/img/g);

  console.log("imagePaths: ", imagePaths);

  return {
    props: { markdownHtml, data: markdownParsed.data },
  };
};

export default BlogPost;
