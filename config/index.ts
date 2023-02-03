import dotenv from 'dotenv';
dotenv.config();

export const DB_CONFIG = {
  HOST: process.env.DB_HOST,
  NAME: process.env.DB_NAME,
  USER: process.env.DB_USER,
  PORT: process.env.DB_PORT,
  PASSWORD: process.env.DB_PASSWORD,
};
export const APP_CONFIG = {
  PORT: process.env.PORT,
};
