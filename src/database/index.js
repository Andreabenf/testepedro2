import { Sequelize } from 'sequelize';

import * as config from '@/config/sequelize';

// import models
import userModel from './models/user';
import csaModel from './models/csa';

// Configuration
const env = process.env.NODE_ENV;
const sequelizeConfig = config[env];
const DATABASE_URL = process.env.DATABASE_URL

// Create sequelize instance
const sequelize = new Sequelize(DATABASE_URL,sequelizeConfig);

// Import all model files
const modelDefiners = [
  userModel,
  csaModel,
];

// eslint-disable-next-line no-restricted-syntax
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// Associations
Object.keys(sequelize.models)
  .forEach((modelName) => {
    if (sequelize.models[modelName].associate) {
      sequelize.models[modelName].associate(sequelize.models);
    }
  });

export default sequelize;
