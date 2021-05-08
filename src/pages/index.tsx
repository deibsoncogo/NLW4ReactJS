import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/pages/Login.module.css";
import ApiGithub from "./api/apiGithub";

interface UserProps {
  name: string;
  avatar_url: string;
}

export default function Login({ ...rest }) {
  const router = useRouter();

  useEffect(() => {
    if (rest.name !== "undefined") {
      router.push("/home");
    }
  }, [router, rest.name]);

  const [login, setLogin] = useState("");
  const [error, setError] = useState("");

  async function handleLogar(): Promise<void> {
    if (!login) {
      setError("Utilize seu login do Github ou o nome da aplicação!");
      return;
    }

    try {
      const responseGithub = login !== "move.it"
        ? await ApiGithub.get<UserProps>(`/users/${login}`)
        : { data: { name: "Olá Convidado", avatar_url: "favicon.png" } };

      const { name, avatar_url } = responseGithub.data;

      const responseDB = await axios.post("/api/backend", { login, name, avatar_url });

      const DB = responseDB.data;

      Cookies.set("login", String(DB.login));
      Cookies.set("name", String(DB.name));
      Cookies.set("avatar_url", String(DB.avatar_url));
      Cookies.set("level", String(DB.level));
      Cookies.set("currentExperience", String(DB.currentExperience));
      Cookies.set("challengesCompleted", String(DB.challengesCompleted));

      router.push("/home");

      setLogin("");
      setError("");
    } catch (err) {
      setError("Este login não existe no Github!");
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <img className={styles.logo} src="simbolo.svg" alt="Símbolo" />

      <div className={styles.login}>
        <img src="logo-full-invert.svg" alt="Logo completo" />

        <strong>Bem-vindo</strong>

        <div className={styles.instructions}>
          <img src="icons/github.svg" alt="Logo Github" />
          <div>
            <p>Utilize seu login do Github para começar</p>
            <p>Com o nome da aplicação você loga como convidado!</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <input
            type="text"
            placeholder="Digite seu login ou move.it"
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { name } = ctx.req.cookies;

  return { props: { name: String(name) } };
};
