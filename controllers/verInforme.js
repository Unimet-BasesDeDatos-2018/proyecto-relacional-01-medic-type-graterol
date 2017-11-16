const server = require('./../server');
const Persona = require('./../models/modelo-persona');
const Paciente = require('./../models/modelo-paciente');
const Doctor = require('./../models/modelo-doctor');
const Informes = require('./../models/modelo-informe');
const app = server.app;

app.post('/informe/:id', (req, res) =>
{
  let idInforme = req.params.id;

  Informes.findOne({
    where: {
      idInforme: idInforme
    }
  }).then(informe =>
    {
      let miInforme = informe.dataValues;

      Persona.findOne({
        where: {
          idPersona: informe.dataValues.idDoctor
        }
      }).then(persona =>
        {
          miInforme.nombreDoctor = `${persona.dataValues.Nombre} ${persona.dataValues.Apellido}`;

          Persona.findOne({
            where: {
              idPersona : informe.dataValues.idPaciente
            }
          }).then(persona =>
            {
              miInforme.nombrePaciente = `${persona.dataValues.Nombre} ${persona.dataValues.Apellido}`;
              miInforme.sexoPaciente = persona.dataValues.Sexo;
              miInforme.fechaPaciente = persona.dataValues.FechaNacimiento;
              miInforme.cedulaPaciente = persona.dataValues.Cedula;

              Paciente.findOne({
                where: {
                  idPersona : informe.dataValues.idPaciente
                }
              }).then(paciente => {

                miInforme.sangrePaciente = paciente.dataValues.TipoSangre;


                console.log(miInforme);

                res.render('verInforme.hbs', {miInforme});

              });
            });
        });
    });
});
