import { MongoClient, Db } from "mongodb";
import url from "url";

let cacheDb: Db = null;

export async function componentToDatabase(uri: string) {
  if (cacheDb) { return cacheDb; }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cacheDb = db;

  return db;
}
