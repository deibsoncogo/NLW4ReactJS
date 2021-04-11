import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel, level } = useContext(ChallengesContext);

  const experienceToPreviousLevel = level === 1 ? 0 : Math.pow(level * 4, 2);
  const differenceExpToNextToPreviousLevel = experienceToNextLevel - experienceToPreviousLevel;
  const resto = currentExperience - experienceToPreviousLevel;

  // const percentToNextLevel = Math.round(experienceToPreviousLevel * 100) / experienceToNextLevel;
  const percentToNextLevel = Math.round((resto * 100) / differenceExpToNextToPreviousLevel);

  return (
    <header className={styles.experienceBar}>
      <span>{currentExperience} xp</span>
      <div>
        {/* O width FAZ A DIV OCUPAR UMA PORCENTAGEM DA OUTRA DIV */}
        <div style={{ width: `${percentToNextLevel}%` }} />

        {/* <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span> */}
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
