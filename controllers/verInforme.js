const server = require('./../server');
const Persona = require('./../models/modelo-persona');
const Paciente = require('./../models/modelo-paciente');
const Doctor = require('./../models/modelo-doctor');
const Informes = require('./../models/modelo-informe');
const app = server.app;

app.post('/informe/:id', (req, res) => {
  res.render('verInforme.hbs');
});
