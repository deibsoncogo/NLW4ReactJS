import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/ChallengeBox.module.css";
import { createNotification } from "./Notification";

export function ChallengeBox() {
  const {
    activeChallenge, resetChallenge, completeChallenge, isBreak, setIsBreak,
  } = useContext(ChallengesContext);

  const { resetCountdown, timeBreak, setTime } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
    setIsBreak(true);
    setTime(timeBreak);
    createNotification(false);
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
    createNotification(false);
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>
            Ganhe
            {" "}
            {activeChallenge.amount}
          </header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              onClick={handleChallengeFailed}
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              onClick={handleChallengeSucceeded}
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <>
          {isBreak ? (
            <div className={styles.challengeNotActive}>
              <strong>Esse tempo é seu</strong>
              <p>
                <img src="icons/done.png" alt="Level up" />
                Por ter finalizado um ciclo e um desafio você ganhou este intervalo
              </p>
            </div>
          ) : (
            <div className={styles.challengeNotActive}>
              <strong>Finalize um ciclo para receber um desafio</strong>
              <p>
                <img src="icons/level-up.svg" alt="Level up" />
                Para avançar de level você precisa completar os desafios
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
