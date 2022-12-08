import Layout from "../../components/layout";
import { useRef } from "react";
import style from "../../styles/NewPost.module.scss";

const NewPost = () => {
  const postContent = useRef(null);

  return (
    <Layout>
      <h1>Create new post</h1>
      <div ref={postContent}>
        <h3 contentEditable className={style.title} atr-data="d"></h3>
      </div>
    </Layout>
  );
};

export default NewPost;
