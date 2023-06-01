const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const BD = require('../db/db.js');

express().use(express.json());
const conectBD = mysql.createConnection({
    host: BD.host,
    user: BD.DB_USER,
    password: BD.DB_PASSWORD,
    database: BD.DB_NAME
});

router.get('/', (req, res) => {
  const idlogin = req.session.idlogin;
  const sql = 'SELECT * FROM info_tiket WHERE idlogin = ?'
  conectBD.query(sql,[idlogin] ,(err,result)=>{
    if(result.length > 0) {
        res.status(200).send(result);
    }else if(err) {
        res.status(500).send(err);
    }else{
        res.status(404).send("Not Found");
    }
   })
  });

  router.post('/tickets', (req, res) => {
    const { titulo,tipo, descripcion, estado } = req.body;
  
    // Validar que los campos obligatorios estén presentes
    if (!titulo ||!tipo || !descripcion || !estado) {
      return res.status(400).json({ mensaje: 'Todos los campos obligatorios deben ser proporcionados' });
    }
  
    const sql = 'INSERT INTO info_tiket (titulo,tipo, descripcion, estado) VALUES (?, ?, ?,?)';
    const values = [titulo,tipo, descripcion, estado];
  
    // Realizar la consulta en la base de datos
    conectBD.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ mensaje: 'Error al crear el ticket' });
      }
  
      res.status(200).json({ mensaje: 'Ticket creado exitosamente' });
    });
  });
  
  module.exports = router;