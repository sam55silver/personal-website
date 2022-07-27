import Link from "next/link";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";

const PostHeader = ({ title, data }) => {
  return (
    <Link href="/blog/[slug]" as={`/blog/${title}`}>
      <div className="p-6 text-white h-full bg-very-dark-base rounded-md hover:shadow-lg hover:cursor-pointer flex items-center gap-6">
        <span className="text-4xl">{data.emoji}</span>
        <div className="grid grid-cols-3 w-full">
          <h2 className="font-bold text-3xl col-span-2">
            {title.charAt(0).toUpperCase() +
              title.slice(1).replaceAll("-", " ")}
          </h2>
          <p className="text-end">{data.date}</p>
          <p className="text-lg mt-3 col-span-2">{data.description}</p>
          <div className="flex justify-end items-end gap-2">
            {data.tags.split(",").map((tag) => {
              return (
                <span
                  key={tag}
                  className="text-sm py-1 px-5 bg-darker-secondary rounded-full h-fit"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

const Blog = ({ pathsAndData }) => {
  let posts = [];
  for (var pathIndex in pathsAndData) {
    const pathTitle = pathsAndData[pathIndex].title;

    posts.push(
      <PostHeader
        title={pathTitle}
        data={pathsAndData[pathIndex].data}
        key={pathTitle}
      />
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid w-3/4 gap-4">{posts}</div>
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
