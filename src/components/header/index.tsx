import Link from "next/link";
import styles from "../../styles/components/Header.module.css";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src="icons/logo.svg" alt="Logo" />

      <div className={styles.buttons}>
        <Link href="/">
          <button className={styles.button} type="button">
            <img src="icons/home.svg" alt="Home" />
          </button>
        </Link>
      </div>
      <div />
    </div>
  );
}
