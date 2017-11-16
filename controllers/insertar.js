const Persona = require('./../models/modelo-persona');
const Paciente = require('./../models/modelo-paciente');
const Doctor = require('./../models/modelo-doctor');
const Especialidad = require('./../models/modelo-especialidad');
const Doctor_t_Especialidad = require('./../models/Doctor_t_Especialidad');
const Informe = require ('./../models/modelo-informe');

// Persona.create({
//   idPersona: 2,
//   Cedula: 16334218,
//   Nombre: 'Alejandro',
//   Snombre: 'Jose',
//   Apellido: 'Mendoza',
//   Sexo: 'Masculino',
//   FechaNacimiento: new Date(1989, 11, 21, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// });

// Paciente.create({
//   idPersona: 1,
//   LugarNacimiento: 'Mexico DF, Mexico',
//   TipoSangre: 'O+',
//   ReferidoPor: 'Carlos Perez'
// });

// Doctor.create({
//   idDoctor: 2,
//   FechaI: new Date(2005, 0, 15, 0, 0, 0, 0)
// });

// CREA TODAS LAS ESPECIALIDADES
// Especialidad.bulkCreate([
//   {
//     idEspecialidad: 1,
//     Especialidad: 'Pediatria'
//   },
//   {
//     idEspecialidad: 2,
//     Especialidad: 'Dermatologia'
//   },
//   {
//     idEspecialidad: 3,
//     Especialidad: 'Cardiologia'
//   },
//   {
//     idEspecialidad: 4,
//     Especialidad: 'Cirugia'
//   },
//   {
//     idEspecialidad: 5,
//     Especialidad: 'Oftalmologia'
//   },
//   {
//     idEspecialidad: 6,
//     Especialidad: 'Traumatologia'
//   }
// ]);


// Doctor_t_Especialidad.create({
//   idDoctor: 2,
//   idEspecialidad: 1
// });


// Informe.bulkCreate([
//   {
//     idInforme: 1,
//     idPaciente: 1,
//     idDoctor: 2,
//     Fecha: new Date(2015, 1, 15, 0, 0, 0, 0),
//     Indicaciones: 'Dejar de fumar',
//     Temperatura: '35 C',
//     FCardiaca:'84 PPM'
//   },
//   {
//     idInforme: 2,
//     idPaciente: 1,
//     idDoctor: 2,
//     Fecha: new Date(2016, 1, 15, 0, 0, 0, 0),
//     Indicaciones: 'Empezar a hacer ejercicios',
//     Temperatura: ' 34.4 C',
//     FCardiaca:'90 PPM'
//   },
//   {
//     idInforme: 3,
//     idPaciente: 1,
//     idDoctor: 2,
//     Fecha: new Date(2017, 1, 15, 0, 0, 0, 0),
//     Indicaciones: 'Hacerse examenes de sangre',
//     Temperatura: '37 C',
//     FCardiaca:'87 PPM'
//   }
// ]);

// Persona.bulkCreate([
// {
//   idPersona: 3,
//   Cedula: 3333333,
//   Nombre: 'Maria',
//   Snombre: 'Alejandra',
//   Apellido: 'Rofdriguez',
//   Sexo: 'Masculino',
//   FechaNacimiento: new Date(1988, 5, 2, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 4,
//   Cedula: 4444444,
//   Nombre: 'Benjamin',
//   Snombre: 'Jose',
//   Apellido: 'Rausseu',
//   Sexo: 'Masculino',
//   FechaNacimiento: new Date(1979, 4, 1, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 5,
//   Cedula: 5555555,
//   Nombre: 'Serena',
//
//   Apellido: 'Williams',
//   Sexo: 'Femenino',
//   FechaNacimiento: new Date(1975, 4, 16, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 6,
//   Cedula: 6666666,
//   Nombre: 'Roger',
//   Snombre: 'Manuel',
//   Apellido: 'Federer',
//   Sexo: 'Masculino',
//   FechaNacimiento: new Date(1981, 7, 8, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 7,
//   Cedula: 7777777,
//   Nombre: 'Maria',
//   Snombre: 'Corina',
//   Apellido: 'Machado',
//   Sexo: 'Femenino',
//   FechaNacimiento: new Date(1971, 9, 7, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 8,
//   Cedula: 8888888,
//   Nombre: 'Cristiano',
//   Snombre: 'Felipe',
//   Apellido: 'Ronaldo',
//   Sexo: 'Masculino',
//   FechaNacimiento: new Date(1985, 1, 5, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 9,
//   Cedula: 9999999,
//   Nombre: 'Jennifer',
//   Snombre: 'Lynn',
//   Apellido: 'Lopez',
//   Sexo: 'Femenino',
//   FechaNacimiento: new Date(1972, 6, 24, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 10,
//   Cedula: 10101010,
//   Nombre: 'Donald',
//   Snombre: 'John',
//   Apellido: 'Trump',
//   Sexo: 'Masculino',
//   FechaNacimiento: new Date(1970, 5, 14, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 11,
//   Cedula: 11111111,
//   Nombre: 'Britney',
//   Snombre: 'Jean',
//   Apellido: 'Spears',
//   Sexo: 'Femenino',
//   FechaNacimiento: new Date(1981, 11, 2, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 12,
//   Cedula: 12121212,
//   Nombre: 'Lorenzo',
//   Snombre: 'Alejandro',
//   Apellido: 'Mendoza',
//   Sexo: 'Masculino',
//   FechaNacimiento: new Date(1970, 9, 5, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 13,
//   Cedula: 13131313,
//   Nombre: 'Shakira',
//   Snombre: 'Isabel',
//   Apellido: 'Menbarak',
//   Sexo: 'Femenino',
//   FechaNacimiento: new Date(1977, 1, 2, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 14,
//   Cedula: 14141414,
//   Nombre: 'Simon',
//   Snombre: 'Jose',
//   Apellido: 'Bolivar',
//   Sexo: 'Masculino',
//   FechaNacimiento: new Date(1970, 6, 24, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// },
// {
//   idPersona: 15,
//   Cedula: 15151515,
//   Nombre: 'Carolina',
//
//   Apellido: 'Herrera',
//   Sexo: 'Femenino',
//   FechaNacimiento: new Date(1970, 0, 8, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// }
// ]);


// Doctor.bulkCreate([
//   {
//     idDoctor: 3,
//     FechaI: new Date(2006, 0, 15, 0, 0, 0, 0)
//   },
//   {
//     idDoctor: 4,
//     FechaI: new Date(2007, 0, 15, 0, 0, 0, 0)
//   },
//   {
//     idDoctor: 5,
//     FechaI: new Date(2008, 0, 15, 0, 0, 0, 0)
//   },
//   {
//     idDoctor: 6,
//     FechaI: new Date(2009, 0, 15, 0, 0, 0, 0)
//   },
//   {
//     idDoctor: 7,
//     FechaI: new Date(2010, 0, 15, 0, 0, 0, 0)
//   }
// ]);

// Paciente.bulkCreate([
//   {
//     idPersona: 8,
//     LugarNacimiento: 'Madeira, Portugal',
//     TipoSangre: 'A+',
//     ReferidoPor: 'Lionel Messi'
//   },
//   {
//     idPersona: 9,
//     LugarNacimiento: 'Puerto Rico',
//     TipoSangre: 'B+',
//     ReferidoPor: 'Mark Anthony'
//   },
//   {
//     idPersona: 10,
//     LugarNacimiento: 'Estados Unidos',
//     TipoSangre: 'AB+',
//     ReferidoPor: 'Barak Obama'
//   },
//   {
//     idPersona: 11,
//     LugarNacimiento: 'California, Estados Unidos',
//     TipoSangre: 'AB-',
//
//   },
//   {
//     idPersona: 12,
//     LugarNacimiento: 'Caracas, Venezula',
//     TipoSangre: 'O-',
//     ReferidoPor: 'Leopoldo Lopez'
//   },
//   {
//     idPersona: 13,
//     LugarNacimiento: 'Colombia',
//     TipoSangre: 'A-',
//     ReferidoPor: 'Ignacio Nacho Mendoza'
//   },
//   {
//     idPersona: 14,
//     LugarNacimiento: 'Caracas, Venezula',
//     TipoSangre: 'B-',
//     ReferidoPor: 'Francisco de Miranda'
//   },
//   {
//     idPersona: 15,
//     LugarNacimiento: 'Valencia, Venezuela',
//     TipoSangre: 'A+',
//
//   }
// ]);


// Doctor_t_Especialidad.bulkCreate([
//   {
//     idDoctor: 3,
//     idEspecialidad: 6
//   },
//   {
//     idDoctor: 4,
//     idEspecialidad: 5
//   },
//   {
//     idDoctor: 5,
//     idEspecialidad: 4
//   },
//   {
//     idDoctor: 6,
//     idEspecialidad: 3
//   },
//   {
//     idDoctor: 7,
//     idEspecialidad: 2
//   }
// ]);
