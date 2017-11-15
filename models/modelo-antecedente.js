const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');
const Paciente = require('./modelo-paciente');

const connection = orm.ormConnection;

let Antecedente = connection.define('Antecedentes',
{
  idAntecedente: {
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
   unique: true,
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
  DonadoSangre: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
 },
  DonadoOrgano: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
 },
HaFumado: {
     type: Sequelize.BOOLEAN,
     allowNull: false,
 }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = Antecedente;
