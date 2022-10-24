import 'dotenv/config';

const {
  DB_HOST, DB_PORT = 5432, DB_DATABASE, DB_USERNAME, DB_PASSWORD,
} = process.env;

const defaultConfig = {
  dialect: 'postgres',
  timezone: '+03:00',
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  port: Number(DB_PORT),
  define: {
    paranoid: true,
  },
};

export const development = {
  ...defaultConfig,
};

export const test = {
  ...defaultConfig,
  logging: false,
};

export const production = {
  ...defaultConfig,
  logging: false,
};
