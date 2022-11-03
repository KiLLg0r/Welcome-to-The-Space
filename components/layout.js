// Icons
import { IoPlanet } from "react-icons/io5";

// React
import { useState, useEffect } from "react";

// Next themes
import { useTheme } from "next-themes";

// Styles
import toggle from "../styles/Switch.module.scss";
import footer from "../styles/Footer.module.scss";
import hamburger from "../styles/Hamburger.module.scss";
import navigation from "../styles/Navigation.module.scss";
import style from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [hiddenNav, setHiddenNav] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      if (window && lastScrollY < window.scrollY) setHiddenNav(true);
      else setHiddenNav(false);

      lastScrollY = window.scrollY;
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={style.container}>
      {/* Navigation */}
      <nav className={`${navigation.nav} ${hiddenNav && navigation.hidden}`}>
        {/* Logo */}
        <div className={navigation.logo}>
          <IoPlanet />
          <span>PlanetX</span>
        </div>

        <div className={navigation.btns}>
          {/* Theme toggler */}
          <label className={toggle.switch}>
            <input
              type="checkbox"
              onClick={() => {
                if (theme === "dark") setTheme("light");
                else setTheme("dark");
              }}
              defaultChecked={theme === "dark"}
            />
            <span className={toggle.slider}></span>
          </label>

          {/* Hamburger menu */}
          <button
            className={`${hamburger.hamburger} ${hamburgerActive && hamburger["is-active"]}`}
            type="button"
            onClick={() => {
              setHamburgerActive(!hamburgerActive);
              document?.body.classList.toggle("noscroll");
            }}
          >
            <span className={hamburger.line}></span>
          </button>
        </div>

        {/* Navigation links */}
        <nav className={`${navigation.links} ${hamburgerActive && navigation.openNav}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Posts</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
          </ul>
        </nav>
      </nav>
      {children}
      {/* Footer */}
      <div className={footer.footer}>© Robert Oblesniuc | Atestat informatică 2022</div>
    </div>
  );
};

export default Layout;
