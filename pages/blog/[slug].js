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
      <div
        className="blog-post"
        dangerouslySetInnerHTML={{ __html: markdownHtml }}
      />
    </>
  );
};

// On build create the paths to each post
export const getStaticPaths = async () => {
  // Retrieve the posts' name
  const files = fs.readdirSync("public/posts");

  // Map each post to have a slug
  const paths = files.map((postTitle) => ({
    params: {
      slug: postTitle,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// On build, get static data for the posts
export const getStaticProps = async ({ params: { slug } }) => {
  // Get post file
  const markdownString = fs
    .readFileSync(path.join("public", "posts", slug, slug + ".md"))
    .toString();

  // Parse post and separate the content in html string
  const markdownParsed = matter(markdownString);
  let markdownHtml = marked(markdownParsed.content);

  // Use regex to find and replace img sources with the correct directory
  const re = /(?<=<img src=")([^/]*)/g;
  markdownHtml = markdownHtml.replace(re, path.join("..", "posts", slug));

  return {
    props: { markdownHtml, data: markdownParsed.data },
  };
};

export default BlogPost;
