const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');
const Doctor = require('./modelo-doctor');
const Especialidad = require('./modelo-especialidad');

const connection = orm.ormConnection;

let Doctor_t_Especialidad = connection.define('Doctor_tiene_Especialidad', {
  idDoctor: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Doctor,
      key: 'idPersona',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  idEspecialidad: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Especialidad,
      key: 'idEspecialidad',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
},
{
  timestamps: false,
  freezeTableName: true
}
);

module.exports = Doctor_t_Especialidad;
