import {
  createContext, useState, ReactNode, useEffect, Dispatch, SetStateAction,
} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import challenges from "../../challenges.json";
import { LevelUpModal } from "../components/LevelUpModal";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  isBreak: boolean;
  setIsBreak: Dispatch<SetStateAction<boolean>>;
  createNotificationChallenge: (deleteNotification: boolean) => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModelOpen, setIsLevelUpModelOpen] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  // vai executar somente uma vez quando este arquivo for executado
  useEffect(() => {
    // pede permissão para exibir uma notificação
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    (async () => {
      const responseDB = await axios.post("/api/backend", {
        email: "deibsoncogo@outlook.com",
        level, currentExperience, challengesCompleted,
      });

      const DB = responseDB.data;

      setLevel(DB.level);
      setCurrentExperience(DB.currentExperience);
      setChallengesCompleted(DB.challengesCompleted);
    })();

    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function createNotificationChallenge(deleteNotification: boolean) {
    // new Audio("/notification.mp3").play();

    // envia uma notificação se existir uma permissão
    if (Notification.permission === "granted") {
      const notification = new Notification("Novo desafio disponível 🎉", {
        tag: "notificationChallenge",
        body: "Complete para ganhar xp!",
        icon: "./favicon.png",
      });

      // verifica se deve excluir a notificação
      deleteNotification && setTimeout(notification.close.bind(notification), 500);
    }
  }

  function levelUp() {
    setLevel(level + 1);
    // setIsLevelUpModelOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModelOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
    createNotificationChallenge(false);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!completeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    const finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      // finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    // fazemos toda nossa aplicação ter acesso aos componentes
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      experienceToNextLevel,
      challengesCompleted,
      activeChallenge,
      levelUp,
      startNewChallenge,
      resetChallenge,
      completeChallenge,
      closeLevelUpModal,
      isBreak,
      setIsBreak,
      createNotificationChallenge,
    }}
    >
      {children}

      {isLevelUpModelOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
