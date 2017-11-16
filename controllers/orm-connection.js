const Sequelize = require('sequelize');



const connection = new Sequelize('MedicDatabase', 'root', 'password', {

  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

module.exports.ormConnection = connection;
