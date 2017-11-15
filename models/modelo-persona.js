const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');

const connection = orm.ormConnection;

let Persona = connection.define('Personas', {
  idPersona: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  Cedula: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  Nombre: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  Snombre: {
    type: Sequelize.STRING(45),
    defaultValue: null
  },
  Apellido: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  Sexo: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  FechaNacimiento: {
    type: Sequelize.DATE,
    allowNull: false
  },
  Activo: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
  }
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Persona;
