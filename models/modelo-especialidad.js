const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');

const connection = orm.ormConnection;

let Especialidad = connection.define('Especialidad', {
  idEspecialidad: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoincrement: true
  },
  Especialidad: {
    type: Sequelize.STRING(45),
    unique: true,
    allowNull: false
  }
},
{
  timestamps: false,
  freezeTableName: true
}
);

module.exports = Especialidad;
