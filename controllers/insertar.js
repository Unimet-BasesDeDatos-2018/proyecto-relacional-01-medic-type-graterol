const Persona = require('./../models/modelo-persona');
const Paciente = require('./../models/modelo-paciente');
const Doctor = require('./../models/modelo-doctor');
const Especialidad = require('./../models/modelo-especialidad');
const Doctor_t_Especialidad = require('./../models/Doctor_t_Especialidad');

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
