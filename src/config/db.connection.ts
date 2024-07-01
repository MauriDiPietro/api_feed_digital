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
      mongoUrl: config.MONGO_ATLAS_URL_PROD || "mongodb+srv://admin:admin@cluster0.xibok.mongodb.net/feed_digital_test?retryWrites=true&w=majority&appName=Cluster0",
      crypto: { secret: config.SECRET_KEY || '' },
      ttl: 180,
  }),
  secret: config.SECRET_KEY || '',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 180000 }
};
