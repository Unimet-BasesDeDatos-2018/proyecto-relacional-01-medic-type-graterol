const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');

const connection = orm.ormConnection;

let Persona = connection.define('Personas', {
  idPersona: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false

    validate:{
       isInt: true,
        len: [0,11]
    }
  },

  Cedula: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,

    validate:{
       isInt: true,
       len: [0,11]
    }
  },

  Nombre: {
    type: Sequelize.STRING(45),
    allowNull: false

    validate:{
      isAlpha: true,
      notEmpty: true
    }
  },

  Snombre: {
    type: Sequelize.STRING(45),
    defaultValue: null

    validate:{
      isAlpha: true
    }
  },

  Apellido: {
    type: Sequelize.STRING(45),
    allowNull: false

    validate:{
      isAlpha: true,
      notEmpty: true
    }
  },

  Sexo: {
    type: Sequelize.STRING(10),
    allowNull: false

    validate:{
      isAlpha: true,
      notEmpty: true,
      isIn: [['H', 'M']]
    }
  },

  FechaNacimiento: {
    type: Sequelize.DATE,
    allowNull: false,
    validate:{
        isDate: true,
        isAfter: "1970-01-02"
    }
  },

  Activo: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
  }
},

{
  timestamps: false,
  freezeTableName: true
});



module.exports = Persona;
