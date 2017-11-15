const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');
const Paciente = require('./modelo-paciente');
const Doctor = require('./modelo-doctor');

const connection = orm.ormConnection;

let Inoforme = connection.define('Informes',
{
  idInforme: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  idPaciente: {
   type: Sequelize.INTEGER,
   allowNull: false,
   references: {
     model: Paciente,
     key: 'idPersona',
     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
   }
 }
 idDoctor: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {
    model: Doctor,
    key: 'idDoctor',
    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  }
},
  Fecha: {
    type: Sequelize.DATE,
    allowNull: false
  },
  Indicaciones: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  Temperatura: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  FCardiaca: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  Notas: {
    type: Sequelize.STRING(45),
    defaultValue: null
  }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = Informe;
