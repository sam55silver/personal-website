import Link from "next/link";
import fs from "fs";

const Blog = ({ paths }) => {
  return (
    <div className="lg:container lg:mx-auto relative">
      <h1>Blog</h1>
      {paths.map((path) => {
        return (
          <div key={path}>
            <Link href={`/blog/${path}`}>
              <a>{path}</a>
            </Link>
          </div>
        );
      })}
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
