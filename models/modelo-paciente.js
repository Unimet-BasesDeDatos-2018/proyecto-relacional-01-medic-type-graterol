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

    validate:{
       isInt: true,
       len: [0,11]
    }
  },

  LugarNacimiento: {
    type: Sequelize.STRING(45),
    allowNull: false

    validate:{
      isAlpha: true,
      notEmpty: true
    }
  },

  TipoSangre: {
    type: Sequelize.STRING(45),
    allowNull: false

    validate:{
      isIn: [['A+','A-','B+','B-','AB+','AB-','O+','O-']]
    }
  },
  ReferidoPor: {
    type: Sequelize.STRING(45),
    defaultValue: null

    validate:{
      isAlpha: true,
      notEmpty: true
    }
  }
},
{
  timestamps: false,
  freezeTableName: true
}
);

module.exports = Paciente;
