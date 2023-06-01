const express = require('express');
const app = express();
const session = require('express-session');

const PORT = process.env.PORT || 3003;
app.use(session({
  secret: 'secreto', // Cambia esto a una clave secreta fuerte en producción
  resave: false,
  saveUninitialized: true
}));

const clientes = require('../services/routes/clientes.js');
const ticket = require('../services/routes/ticket.js');
const pqr = require('../services/routes/pqr.js');
const login = require('../services/routes/login.js');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  
app.use(express.json());
app.use('/clientes', clientes);
app.use('/ticket', ticket);
app.use('/pqr', pqr);
app.use('/login', login);

app.listen(PORT);
console.log('listening on port',PORT);

module.exports = app;