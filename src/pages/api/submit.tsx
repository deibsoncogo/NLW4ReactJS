import { NowRequest, NowResponse } from "@vercel/node";
import { componentToDatabase } from "./component";

export default async (request: NowRequest, response: NowResponse) => {
  const {
    email, level, currentExperience, challengesCompleted,
  } = request.body;

  const db = await componentToDatabase(process.env.mongoDbUrl);

  const collection = db.collection("experience");

  await collection.findOneAndUpdate({ email: "deibsoncogo@outlook.com" }, {
    $set: {
      email, level, currentExperience, challengesCompleted,
    },
  }, { upsert: true }); // permite criar os dados caso não encontre

  return response.status(201).send("Dados enviado para o servidor");
};
