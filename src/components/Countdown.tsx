import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  // vamos controlar o tempo em segundos
  const [time, setTime] = useState(25 * 60);

  // para informar se a contagem esta em andamento
  const [active, setActine] = useState(false);

  // Math.floor arredonda para baixo
  const minutes = Math.floor(time / 60);

  // % pega o resto da divisão
  const seconds = time % 60;

  // vai converter em string com dois dígitos e criar um array
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setActine(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      // executa algo depois de um tempo
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button type="button" onClick={startCountdown} className={styles.countdownButton}>
        Iniciar um ciclo
      </button>
    </div>
  );
}
