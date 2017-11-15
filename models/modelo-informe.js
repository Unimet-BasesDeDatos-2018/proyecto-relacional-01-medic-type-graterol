const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');
const Paciente = require('./modelo-paciente');
const Doctor = require('./modelo-doctor');

const connection = orm.ormConnection;

let Informe = connection.define('Informes',
{
  idInforme: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,

    validate:{
       isInt: true,
       len: [0,11]
    }
  },
  idPaciente: {
   type: Sequelize.INTEGER,
   allowNull: false,
   references: {
     model: Paciente,
     key: 'idPersona',
     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
   },
   validate:{
      isInt: true,
      len: [0,11]
   }
 },
 idDoctor: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {
    model: Doctor,
    key: 'idDoctor',
    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  },
  validate:{
     isInt: true,
     len: [0,11]
  }
},
  Fecha: {
    type: Sequelize.DATE,
    allowNull: false,
    validate:{
        isDate: true,
        isAfter: "1970-01-02"
    }
  },
  Indicaciones: {
    type: Sequelize.STRING(45),
    allowNull: false,

    validate:{
      notEmpty: true
    }
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
