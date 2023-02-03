import { Sequelize } from 'sequelize-typescript';
import { Stand } from '../models/stand.model';
import { DB_CONFIG } from '../config';
import { Pool } from 'pg';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  models: [Stand],
  username: DB_CONFIG.USER,
  password: DB_CONFIG.PASSWORD,
  host: DB_CONFIG.HOST,
  database: DB_CONFIG.NAME,
});
const createDBIfNotExists = async () => {
  try {
    const pg = new Pool({
      user: DB_CONFIG.USER,
      password: DB_CONFIG.PASSWORD,
      host: DB_CONFIG.HOST,
    });
    await pg.query(`CREATE DATABASE ${DB_CONFIG.NAME}`);
  } catch (e) {
  }
};
export const connectToDB = async () => {
  try {
    await createDBIfNotExists();
    await sequelize.authenticate();
    console.log('connected to db');
  } catch (err) {
    console.log(`Cannot connect to DB ${err.message || err}`);
    throw err;
  }
};

export const syncDB = async () => {
  try {
    await createDBIfNotExists();
    await sequelize.sync();
    console.log('db synced');
  } catch (err) {
    console.log(`Cannot connect to DB ${err.message || err}`);
    throw err;
  }
};
