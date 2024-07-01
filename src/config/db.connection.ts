import config from "./config";
import { connect } from "mongoose";
import MongoStore from 'connect-mongo';

let connectionString: string | undefined = '';
export const dbConnection = async (): Promise<void> => {
  switch (config.ENV) {
    case "dev":
      connectionString = config.MONGO_ATLAS_URL_TEST;
      break;
    case "prod":
      connectionString = config.MONGO_ATLAS_URL_PROD;
    default:
      connectionString = config.MONGO_LOCAL_URL;
      break;
  }
  console.log(`ENVIRONMENT DB => ${config.ENV}`)
  await connect(connectionString as string);
};

export const storeConfig = {
  store: MongoStore.create({
      mongoUrl: config.MONGO_ATLAS_URL_PROD || 'mongodb://127.0.0.1:27017/feed_digital',
      crypto: { secret: config.SECRET_KEY || '' },
      ttl: 180,
  }),
  secret: config.SECRET_KEY || '',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 180000 }
};
