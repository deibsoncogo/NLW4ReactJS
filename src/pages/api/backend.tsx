import { NowRequest, NowResponse } from "@vercel/node";
import { componentToDatabase } from "./component";

export default async (request: NowRequest, response: NowResponse) => {
  let { level, currentExperience, challengesCompleted } = request.body;
  const { login, name, avatar_url } = request.body;

  // chama outra função para criar a conexão com o DB
  const db = await componentToDatabase(process.env.mongoDbUrl);

  // define em qual tabela do DB salvar
  const collection = db.collection("experience");

  // busca os dados da tabela e DB selecionado anteriormente
  const received = await collection.findOne({ login }, {});

  if (received && received.login === login) { // vai verificar qual informação é maior e salvar
    level = level >= received.level
      ? level
      : received.level;

    currentExperience = currentExperience >= received.currentExperience
      ? currentExperience
      : received.currentExperience;

    challengesCompleted = challengesCompleted >= received.challengesCompleted
      ? challengesCompleted
      : received.challengesCompleted;
  }

  if (!received) { // vai limpar os dados para cadastrar o novo usuário
    level = 1, currentExperience = 0, challengesCompleted = 0;
  }

  // envia os dados para a tabela e DB selecionado anteriormente
  await collection.findOneAndUpdate({ login }, {
    $set: {
      login, name, avatar_url, level, currentExperience, challengesCompleted,
    },
  }, { upsert: true }); // permite criar os dados caso não encontre

  return response.status(201).send({
    login, name, avatar_url, level, currentExperience, challengesCompleted,
  });
};
