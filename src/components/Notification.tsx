import laborGymBenefits from "../../laborGymBenefits.json";

export function createNotification(isCreate: boolean, isTitle?: string, isBody?: string) {
  if (Notification.permission !== "granted") {
    return; // se não tiver a permissão já vai parar a execução
  }

  const notificationInformation = {
    title: isTitle,
    body: isBody,
    renotify: isCreate,
    delete: !isCreate,
    tag: "nlw4reactjs",
    icon: "/favicon.png",
  };

  if (!isCreate) {
    const randomBenefitIndex = Math.floor(Math.random() * laborGymBenefits.length);
    const benefit = laborGymBenefits[randomBenefitIndex];

    notificationInformation.title = "A ginastica é importante! 😯";
    notificationInformation.body = benefit.body;
  }

  // se for para excluir a notificação ele vai esperar 6 segundos
  const time = notificationInformation.delete ? 6000 : 100;

  setTimeout(() => {
    // isCreate && new Audio("/notification.mp3").play();
    const notification = new Notification(notificationInformation.title, notificationInformation);

    // define o tempo para excluir a notificação
    notificationInformation.delete
      ? setTimeout(notification.close.bind(notification), 1000) // 1 segundo
      : setTimeout(notification.close.bind(notification), 15 * 60 * 1000); // 15 minutos
  }, time);
}
