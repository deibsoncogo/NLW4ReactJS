import Link from "next/link";
import { BiExit, BiHomeAlt, BiTrophy } from "react-icons/bi";
import Cookies from "js-cookie";
import styles from "../styles/components/Header.module.css";

export function Header() {
  function handleLogoff() {
    Cookies.remove("login");
    Cookies.remove("name");
    Cookies.remove("avatar_url");
    Cookies.remove("level");
    Cookies.remove("currentExperience");
    Cookies.remove("challengesCompleted");
  }

  return (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src="icons/logo.svg" alt="Logo" />

      <div className={styles.buttons}>
        <Link href="/home">
          <button className={styles.button} type="button">
            <BiHomeAlt className={styles.iconReact} />
          </button>
        </Link>

        <Link href="/top">
          <button className={styles.button} type="button">
            <BiTrophy className={styles.iconReact} />
          </button>
        </Link>

        <Link href="/">
          <button className={styles.button} type="button">
            <BiExit id={styles.red} className={styles.iconReact} onClick={handleLogoff} />
          </button>
        </Link>
      </div>
      <div />
    </div>
  );
}
