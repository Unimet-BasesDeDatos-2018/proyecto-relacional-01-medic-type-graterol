const server = require('./../server');
const Persona = require('./../models/modelo-persona');
const Paciente = require('./../models/modelo-paciente');
const Doctor = require('./../models/modelo-doctor');
const app = server.app;

app.get('/detallePaciente', (req, res) => {
  res.render('detallePaciente.hbs');
});
