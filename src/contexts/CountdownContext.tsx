import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState,
} from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
  isBreak: boolean;
  setIsBreak: Dispatch<SetStateAction<boolean>>;
  timeBreak: number;
  setTime: Dispatch<SetStateAction<number>>;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

// criando uma variável global
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge, isBreak, setIsBreak } = useContext(ChallengesContext);

  // converte os minutos em segundos
  // const timeNormal = 2, timeBreak = 2;
  const timeNormal = (25 * 60), timeBreak = (5 * 60);
  const durationConverted = isBreak ? timeBreak : timeNormal;

  // vamos controlar o tempo em segundos
  const [time, setTime] = useState(durationConverted);

  // para informar se a contagem esta em andamento
  const [isActive, setIsActive] = useState(false);

  // avisar se chegou ao final de um ciclo
  const [hasFinished, setHasFinished] = useState(false);

  // Math.floor arredonda para baixo
  const minutes = Math.floor(time / 60);

  // % pega o resto da divisão
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setIsBreak(false);
    setTime(timeNormal);
  }

  function createNotificationBreak() {
    if (Notification.permission === "granted") {
      new Notification("Seu intervalo terminou 😁", {
        body: "Bora focar mais um pouco?",
        icon: "./favicon.png",
      });
    }
  }

  useEffect(() => {
    if (isActive && time > 0) {
      // executa algo depois de um tempo
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      if (isBreak) {
        setIsBreak(false);
        resetCountdown();
        createNotificationBreak();
      } else {
        setHasFinished(true);
        startNewChallenge();
      }
      setIsActive(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, time]);

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
      isBreak,
      setIsBreak,
      timeBreak,
      setTime,
    }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
