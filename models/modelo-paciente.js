const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');

const connection = orm.ormConnection;

let Paciente = connection.define('Paciente', {}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Paciente;
