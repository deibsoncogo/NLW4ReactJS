import { NowRequest, NowResponse } from "@vercel/node";
import { componentToDatabase } from "./component";

export default async (request: NowRequest, response: NowResponse) => {
  const db = await componentToDatabase(process.env.mongoDbUrl);

  const collection = db.collection("experience");

  const receiveDB = await collection.findOne(
    { email: "deibsoncogo@outlook.com" },
    {},
  );

  return response.status(201).send(receiveDB);
};
