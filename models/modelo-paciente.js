const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');
const Persona = require('./modelo-persona');

const connection = orm.ormConnection;

let Paciente = connection.define('Pacientes', {
  idPersona: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Persona,
      key: 'idPersona',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  LugarNacimiento: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  TipoSangre: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  ReferidoPor: {
    type: Sequelize.STRING(45),
    defaultValue: null
  }
},
{
  timestamps: false,
  freezeTableName: true
}
);

module.exports = Paciente;
