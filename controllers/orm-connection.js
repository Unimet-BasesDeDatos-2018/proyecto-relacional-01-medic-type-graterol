const Sequelize = require('sequelize');

const connection = new Sequelize('MedicDatabase', 'root', '0000', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

module.exports.ormConnection = connection;
