import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Layout from "../../components/layout";

export async function getStaticPaths() {
  const files = fs.readdirSync("MDPosts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`MDPosts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md({ html: true }).render(content) }} />
    </Layout>
  );
}
