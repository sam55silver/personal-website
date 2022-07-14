import Link from "next/link";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";

const PostHeader = ({ title, data }) => {
  return (
    <div
      key={title}
      className="bg-secondary rounded-lg hover:shadow-lg hover:cursor-pointer p-6"
    >
      {/* <Link href="/blog/[slug]" as={`/blog/${title}`}> */}
      <img src={`/posts/${title}/${data.photo}`} alt={data.photoDesc} />
      <h2 className="text-xl text-white font-bold">{title}</h2>
      {/* </Link> */}
    </div>
  );
};

const Blog = ({ pathsAndData }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-4 w-3/4">
        {pathsAndData.map((path) => {
          return PostHeader({ title: path.title, data: path.data });
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const paths = fs.readdirSync("public/posts");

  let pathsAndData = [];

  paths.map((postTitle) => {
    const markdownString = fs
      .readFileSync(path.join("public", "posts", postTitle, postTitle + ".md"))
      .toString();
    const markdownParsed = matter(markdownString);

    pathsAndData.push({ title: postTitle, data: markdownParsed.data });
  });

  return {
    props: { pathsAndData },
  };
};

export default Blog;
