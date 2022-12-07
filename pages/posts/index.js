import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <>
      Hello not a user
      <br />
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug}>
          <Link href={`/posts/${slug}`}>
            <a>
              <Image width={650} height={340} alt={frontmatter.title} src={`/${frontmatter.socialImage}`} />

              <h1>{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("MDPosts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`MDPosts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
