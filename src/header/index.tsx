import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./style.module.css";
import { links } from "./utils";

export const Header = () => {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.leftLinks}>
        {links.map((link) => (
          <Link
            to={link.href}
            className={classNames(styles.navLink, {
              [styles.active]: location.pathname === link.href,
            })}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link to="/profile" className={classNames(styles.navLink, styles.profileLink)}>
        Profile
      </Link>
    </header>
  );
};
