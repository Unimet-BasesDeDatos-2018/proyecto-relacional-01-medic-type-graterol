const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');
const Persona = require('./modelo-persona');

const connection = orm.ormConnection;

let Doctor = connection.define('Doctores',
{
  idDoctor: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Persona,
      key: 'idPersona',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    },
    validate:{
       isInt: true,
       len: [0,11]
    }
},
  FechaI: {
    type: Sequelize.DATE,
    allowNull: false,
    validate:{
        isDate: true,
        isAfter: "1970-01-02"
    }
  }
},
{
  timestamps: false,
  freezeTableName: true
}
);

module.exports = Doctor;
