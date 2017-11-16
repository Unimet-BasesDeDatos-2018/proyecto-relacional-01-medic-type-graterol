const server = require('./../server');
const Persona = require('./../models/modelo-persona');
const Paciente = require('./../models/modelo-paciente');
const Doctor = require('./../models/modelo-doctor');
const Informes = require('./../models/modelo-informe');
const app = server.app;

app.post('/informe/:id', (req, res) => {
  let idInforme = req.params.id;

  Informes.findOne({
    where: {
      idInforme: idInforme
    }
  }).then((informe) => {
    let miInforme = informe.dataValues;

    // code goes here

    res.render('verInforme.hbs', { miInforme });
  });
});
