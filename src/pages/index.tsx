import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import styles from "../styles/pages/Login.module.css";
import ApiGithub from "./api/apiGithub";

interface UserProps {
  name: string;
  avatar_url: string;
}

export default function Login() {
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");

  async function handleLogar(): Promise<void> {
    if (!login) {
      setError("Utilize seu nome ou o login do Github!");
      return;
    }

    try {
      const response = await ApiGithub.get<UserProps>(`users/${login}`);
      const user = response.data;

      (async () => {
        const responseDB = await axios.post("/api/backend", { email: user.name });

        const DB = responseDB.data;

        Cookies.set("level", String(DB.level));
        Cookies.set("currentExperience", String(DB.currentExperience));
        Cookies.set("challengesCompleted", String(DB.challengesCompleted));
        Cookies.set("name", String(user.name));
        Cookies.set("avatar_url", String(user.avatar_url));
      })();

      setLogin("");
      setError("");
    } catch (err) {
      (async () => {
        const responseDB = await axios.post("/api/backend", { email: login });

        const DB = responseDB.data;

        Cookies.set("level", String(DB.level));
        Cookies.set("currentExperience", String(DB.currentExperience));
        Cookies.set("challengesCompleted", String(DB.challengesCompleted));
        Cookies.set("name", String(login));
        Cookies.set("avatar_url", String("https://avatars.githubusercontent.com/u/80178?v=4"));
      })();

      setLogin("");
      setError("");
    }
  }

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="simbolo.svg" alt="Símbolo" />

      <div className={styles.login}>
        <img src="logo-full-invert.svg" alt="Logo completo" />

        <strong>Bem-vindo</strong>

        <div className={styles.instructions}>
          <img src="icons/github.svg" alt="Logo Github" />
          <div>
            <p>Utilize seu login do Github para começar</p>
            <p>Caso contrário use seu nome para criar uma conta</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <input
            type="text"
            placeholder="Digite aqui"
            value={login}
            onChange={(o) => setLogin(o.target.value)}
            id={error && styles.error}
          />
          <button type="button" onClick={handleLogar} id={error && styles.error}>
            <img src="icons/vector.svg" alt="Seta" />
          </button>
        </div>

        <p className={styles.error}>{error}</p>
      </div>
    </div>
  );
}
