import React from "react";
import fs from "fs";

const BlogPost = ({ slug }) => {
  return <div>{slug}</div>;
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
  return {
    props: { slug },
  };
};

export default BlogPost;
