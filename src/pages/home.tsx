import Head from "next/head";
import { GetServerSideProps } from "next";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { Header } from "../components/Header";

import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import IsLogado from "../utils/IsLogado";

interface HomeProps {
  login: string;
  name: string;
  avatar_url: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  IsLogado(props.name);

  return (
    <div className={styles.containerGeral}>
      {/* faz toda aplicação ter acesso aos dados */}
      <ChallengesProvider
        login={props.login}
        name={props.name}
        avatar_url={props.avatar_url}
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <Header />

        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>
    </div>
  );
}

// executa algo antes da aplicação
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    login, name, avatar_url, level, currentExperience, challengesCompleted,
  } = ctx.req.cookies;

  return {
    props: {
      login: String(login),
      name: String(name),
      avatar_url: String(avatar_url),
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
