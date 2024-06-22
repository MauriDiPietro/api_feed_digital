import config from "./config";
import { connect } from "mongoose";

export const dbConnection = async (): Promise<void> => {
  let connectionString = null;
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
  await connect(connectionString as string);
};
