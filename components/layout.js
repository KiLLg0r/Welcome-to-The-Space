// Styles
import style from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Layout;
