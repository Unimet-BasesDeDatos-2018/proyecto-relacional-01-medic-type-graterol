const server = require('./../server');
const Persona = require('./../models/modelo-persona');
const Paciente = require('./../models/modelo-paciente');
const Doctor = require('./../models/modelo-doctor');
const app = server.app;

app.post('/cuenta-paciente', (req, res) => {

  if (req.body.cedula !== undefined && req.body.cedula !== null) {

    let cedulaIngresada = parseInt(req.body.cedula);

    Persona.findOne({
      where: {
        Cedula: cedulaIngresada
      }
    }).then((persona) => {

      let idPersona = persona.dataValues.idPersona;
      let miPersona = persona.dataValues;

      Paciente.findOne({
        where: {
          idPersona: idPersona
        }
      }).then((paciente) => {

        miPersona.LugarNacimiento = paciente.dataValues.LugarNacimiento;
        miPersona.TipoSangre = paciente.dataValues.TipoSangre;
        miPersona.ReferidoPor = paciente.dataValues.ReferidoPor;

        console.log(miPersona);

        res.render('cuentaPaciente.hbs', {miPersona});

      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error);
    });

  } else {
    res.render('home.hbs');
  }

});

app.post('/cuenta-doctor', (req, res) => {

    if (req.body.cedula !== undefined && req.body.cedula !== null) {

      let cedulaIngresada = parseInt(req.body.cedula);

      Persona.findOne({
        where: {
          Cedula: cedulaIngresada
        }
      }).then((persona) => {

        let idPersona = persona.dataValues.idPersona;
        let miPersona = persona.dataValues;

        Doctor.findOne({
          where: {
            idDoctor: idPersona
          }
        }).then((doctor) => {

          miPersona.FechaI = doctor.dataValues.FechaI;

          console.log(miPersona);

          res.render('cuentaDoctor.hbs', {miPersona});

        }).catch((error) => {
          console.log(error);
        });
      }).catch((error) => {
        console.log(error);
      });

    } else {
      res.render('home.hbs');
    }
});

app.get('/signup', (req, res) => {
  res.render('signup.hbs');
});
