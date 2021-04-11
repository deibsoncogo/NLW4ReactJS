import { NowRequest, NowResponse } from "@vercel/node";
import { componentToDatabase } from "./component";

export default async (request: NowRequest, response: NowResponse) => {
  const {
    email, level, currentExperience, experienceToNextLevel, challengesCompleted,
  } = request.body;

  const db = await componentToDatabase(process.env.mongoDbUrl);

  const collection = db.collection("experience");

  await collection.findOneAndUpdate({ email: "deibsoncogo@outlook.com" }, {
    $set: {
      email, level, currentExperience, experienceToNextLevel, challengesCompleted,
    },
  }, { upsert: true }); // permite criar os dados caso não encontre

  return response.status(201).send("Dados recebido pelo servidor");
};
