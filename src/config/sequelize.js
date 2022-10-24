import 'dotenv/config';

const {
  DB_HOST, DB_PORT = 5432, DB_DATABASE, DB_USERNAME, DB_PASSWORD, DATABASE_URL
} = process.env;

const defaultConfig = {
  url:DATABASE_URL,
  dialect: 'postgres',
  protocol: 'postgres',
  timezone: '+03:00',
  define: {
    paranoid: true,
  },
  dialectOptions: {
    ssl: {
      require: true,
      native:true,
      rejectUnauthorized: false,
    },
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
