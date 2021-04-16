// import laborGymBenefits from "../../laborGymBenefits.json";

export function createNotification(isCreate: boolean, isTitle?: string, isBody?: string) {
  const notificationInformation = {
    title: isTitle,
    body: isBody,
    renotify: isCreate,
    delete: !isCreate,
    tag: "nlw4reactjs",
    icon: "/favicon.png",
  };

  // if (!isCreate) {
  //   const randomBenefitIndex = Math.floor(Math.random() * laborGymBenefits.length);
  //   const benefit = laborGymBenefits[randomBenefitIndex];

  //   notificationInformation.title = "A ginastica é importante! 😯";
  //   notificationInformation.body = benefit.body;
  // }

  if (Notification.permission === "granted") {
    // isCreate && new Audio("/notification.mp3").play();
    /* const notification = */
    new Notification(notificationInformation.title, notificationInformation);

    // verifica se deve excluir a notificação depois de 1 segundos
    // notificationInformation.delete && setTimeout(notification.close.bind(notification), 1000);
  }
}
