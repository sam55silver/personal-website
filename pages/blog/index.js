import Link from "next/link";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";

const PostHeader = ({ title, data, firstItem }) => {
  return (
    <div
      className={`text-white hover:shadow-lg hover:cursor-pointer  ${
        firstItem ? "col-start-1 col-span-2" : ""
      }`}
    >
      <Link href="/blog/[slug]" as={`/blog/${title}`}>
        <div className="p-6 text-white h-full">
          <img
            src={`/posts/${title}/${data.photo}`}
            alt={data.photoDesc}
            className={`w-full ${firstItem ? "h-96" : "h-48"}`}
          />
          <div
            className={`pt-6 ${
              firstItem ? "flex justify-between items-center" : ""
            }`}
          >
            <h2 className={`font-bold ${firstItem ? "text-4xl" : "text-3xl"}`}>
              {title.charAt(0).toUpperCase() +
                title.slice(1).replaceAll("-", " ")}
            </h2>
            <p className={firstItem ? "text-xl" : ""}>{data.date}</p>
          </div>
          <p className="py-4 text-lg">{data.description}</p>
          <div className="flex gap-2">
            {data.tags.split(",").map((tag) => {
              return (
                <span
                  key={tag}
                  className="text-sm py-1 px-5 bg-green-400 rounded-full"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

const Blog = ({ pathsAndData }) => {
  let posts = [];
  for (var pathIndex in pathsAndData) {
    const pathTitle = pathsAndData[pathIndex].title;
    let firstItem = false;

    if (pathIndex === "0") {
      firstItem = true;
    }

    posts.push(
      <PostHeader
        title={pathTitle}
        data={pathsAndData[pathIndex].data}
        key={pathTitle}
        firstItem={firstItem}
      />
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 w-3/4">{posts}</div>
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
