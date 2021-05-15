export function createNotification(isTitle?: string, isBody?: string) {
  if (Notification.permission !== "granted") {
    return; // se não tiver a permissão já vai parar a execução
  }

  const notificationInformation = {
    title: isTitle,
    body: isBody,
    renotify: true,
    tag: "nlw4reactjs",
    icon: "/favicon.png",
  };

  // new Audio("/notification.mp3").play();
  const notification = new Notification(notificationInformation.title, notificationInformation);

  // define o tempo para excluir a notificação
  setTimeout(notification.close.bind(notification), 15 * 60 * 1000); // 15 minutos
}
