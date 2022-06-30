import Link from "next/link";
import fs from "fs";

const PostHeader = ({ slug }) => {
  return (
    <div
      key={slug}
      className="bg-secondary rounded-lg hover:shadow-lg hover:cursor-pointer p-6"
    >
      <Link href="/blog/[slug]" as={"/blog/" + slug}>
        <h2 className="text-xl text-white font-bold">{slug}</h2>
      </Link>
    </div>
  );
};

const Blog = ({ paths }) => {
  return (
    <div className="lg:container lg:mx-auto relative flex">
      <div className="w-1/4">
        <h1>Blog</h1>
      </div>
      <div className="w-3/4">
        <div className="grid grid-cols-2 gap-4">
          {paths.map((path) => {
            return PostHeader({ slug: path });
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => filename.replace(".md", ""));

  return {
    props: { paths },
  };
};

export default Blog;
