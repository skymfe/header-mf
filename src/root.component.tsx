import classNames from "classnames";
import styles from "./style.module.css";
import { links } from "./root.utils";

export default function Root() {
  return (
    <header className={styles.header}>
      {links.map((link) => (
        <a
          href={link.href}
          className={classNames(styles.navLink, {
            [styles.active]: link.href === window.location.pathname,
          })}
          key={link.href}
        >
          {link.label}
        </a>
      ))}
      <a href="/profile" className={classNames(styles.navLink, styles.profileLink)}>
        Profile
      </a>
    </header>
  );
}
