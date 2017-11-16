const server = require('./../server');
const Persona = require('./../models/modelo-persona');
const Paciente = require('./../models/modelo-paciente');
const app = server.app;

app.post('/agregarPaciente', (req, res) => {

  let nombre = req.body.nombre;
  let snombre = req.body.snombre;
  let apellido = req.body.apellido;
  let fecha = req.body.fecha;
  let cedula = req.body.cedula;
  let sexo = req.body.sexo;
  let sangre = req.body.sangre;
  let lugarnacimiento = req.body.lugarnacimiento;
  let referenciado = req.body.referenciado;

  // validaciones

  Persona.create({
    // objeto persona

      Cedula: cedula,
      Nombre: nombre,
      Snombre: snombre,
      Apellido: apellido,
      Sexo: sexo,
      FechaNacimiento: fecha

  }).then(() => {
    Paciente.create({
      // objeto paciente
        LugarNacimiento: lugarnacimiento,
        TipoSangre: sangre,
        ReferidoPor: referenciado

    }).then((persona) => {
      console.log (persona);
      res.render('home.hbs');
    }).catch((error) => {
      console.log(error);
    });
  }).catch((error) => {
    console.log(error);
  });
});
