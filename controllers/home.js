const server = require('./../server');
const Persona = require('./../models/modelo-persona');

const app = server.app;

app.post('/cuenta-paciente', (req, res) => {
  res.render('cuentaPaciente.hbs');
});

app.post('/cuenta-doctor', (req, res) => {
  res.render('cuentaDoctor.hbs');
});

app.get('/signup', (req, res) => {
  res.render('signup.hbs');
});

// Persona.create({
//   idPersona: 1,
//   Cedula: 24556891,
//   Nombre: 'Pedro',
//   Snombre: 'Ignacio',
//   Apellido: 'Paramo',
//   Sexo: 'Masculino',
//   FechaNacimiento: new Date(1990, 0, 12, 0, 0, 0, 0), // new Date(year, month, date, hours, minutes, seconds, milliseconds);
//   Activo: true
// });
