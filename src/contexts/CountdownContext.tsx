import {
  createContext, ReactNode, useContext, useEffect, useState,
} from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

// criando uma variável global
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  // converte os minutos em segundos
  // const durationConverted = (durationConverted);
  const durationConverted = (1);

  // vamos controlar o tempo em segundos
  const [time, setTime] = useState(durationConverted);

  // para informar se a contagem esta em andamento
  const [isActive, setIsActine] = useState(false);

  // avisar se chegou ao final de um ciclo
  const [hasFinished, setHasFinished] = useState(false);

  // Math.floor arredonda para baixo
  const minutes = Math.floor(time / 60);

  // % pega o resto da divisão
  const seconds = time % 60;

  function startCountdown() {
    setIsActine(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActine(false);
    setHasFinished(false);
    setTime(durationConverted);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      // executa algo depois de um tempo
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActine(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
    }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
