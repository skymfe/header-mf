import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./style.module.css";
import menuItems from "./menuItems.json";

export const Header = () => {
  const location = useLocation();
  const { leftLinks, rightLinks } = menuItems.reduce(
    (acc, item) => {
      if (item.position === "LEFT") {
        acc.leftLinks.push(item);
      } else if (item.position === "RIGHT") {
        acc.rightLinks.push(item);
      } else {
        throw new Error(`Invalid position: ${item.label}, ${item.position}`);
      }
      return acc;
    },
    { leftLinks: [], rightLinks: [] }
  );

  return (
    <header className={styles.header}>
      <div className={styles.leftLinks}>
        {leftLinks
          .sort((a, b) => a.order - b.order)
          .map((link) => (
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

      <div className={styles.rightLinks}>
        {rightLinks
          .sort((a, b) => a.order - b.order)
          .map((link) => (
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
    </header>
  );
};
