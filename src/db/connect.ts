// @ts-nocheck
import { Sequelize } from 'sequelize';
import { currentDB } from '../constants';
import models from '../models';

const db = {};

export const sequelizeLocalhost = new Sequelize({
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: 5432,
  dialect: 'postgres',
  query: {
    raw: true,
  },
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 20,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
});

export const sequelize = currentDB === 'localhost' && sequelizeLocalhost;

const Models = models;

Models.forEach((model) => {
  const Model = model(sequelize);
  db[Model.name] = Model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
