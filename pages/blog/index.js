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
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-4 w-3/4">
        {paths.map((path) => {
          return PostHeader({ slug: path });
        })}
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
