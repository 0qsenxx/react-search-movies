import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ul className={styles.headerList}>
          <li className={styles.headerItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.headerLink} ${styles.headerActive}`
                  : `${styles.headerLink}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className={styles.headerItem}>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? `${styles.headerLink} ${styles.headerActive}`
                  : `${styles.headerLink}`
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
