const server = require('./../server');

const app = server.app;

app.post('/cuenta-paciente', (req, res) => {
  res.render('cuentaPaciente.hbs');
});

app.post('/cuenta-doctor', (req, res) => {
  res.render('cuentaDoctor.hbs');
});
