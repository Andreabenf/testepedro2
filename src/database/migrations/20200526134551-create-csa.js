export const up = (queryInterface, Sequelize) => queryInterface.createTable('csas', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  urlBase: {
    allowNull: false,
    type: Sequelize.STRING(140),
  },
  nameCSA: {
    allowNull: false,
    type: Sequelize.STRING(140),
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  deletedAt: {
    allowNull: true,
    type: Sequelize.DATE,
  },
});

export const down = (queryInterface) => queryInterface.dropTable('csas');
