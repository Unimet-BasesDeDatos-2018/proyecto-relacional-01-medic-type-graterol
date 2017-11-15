const Sequelize = require('sequelize');

const connection = new Sequelize('MedicDatabase', 'root', '21291164', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

module.exports.ormConnection = connection;
