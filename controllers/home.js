const server = require('./../server');
const Persona = require('./../models/modelo-persona');
const Paciente = require('./../models/modelo-paciente');
const Doctor = require('./../models/modelo-doctor');
const app = server.app;

app.post('/cuenta-paciente', (req, res) => {

  let cedulaIngresada = parseInt(req.body.cedula);

  Persona.findOne({where: { Cedula: cedulaIngresada }})
  .then((persona) => {
    let idPersona = persona.dataValues.idPersona;
    let miPersona = persona.dataValues;

    Paciente.findOne({where: { idPersona: idPersona }})
    .then((paciente) => {

      miPersona.LugarNacimiento = paciente.dataValues.LugarNacimiento;
      miPersona.TipoSangre = paciente.dataValues.TipoSangre;
      miPersona.ReferidoPor = paciente.dataValues.ReferidoPor;

      console.log(miPersona);

      res.render('cuentaPaciente.hbs', {miPersona});

    })
    .catch((error) => {
      console.log(error);
    });
  })
  .catch((error) => {
    console.log(error);
  });
});

app.post('/cuenta-doctor', (req, res) => {
  res.render('cuentaDoctor.hbs');
});

app.get('/signup', (req, res) => {
  res.render('signup.hbs');
});
