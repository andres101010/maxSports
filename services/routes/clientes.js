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

//*Function para llamar datos del cliente ****/
  router.get('/loadData', (req,res)=>{
    const sql = 'SELECT * FROM info_cliente'
    conectBD.query(sql, (err,result)=>{
      if(result.length > 0) {
        res.status(200).send(result);
      }else if(err) {
        res.status(500).send("error")
      }else{
        res.status(400).send("NO HAY DATOS!!")
      }
 });
});
  //**Funcion para registrar nuevo clientes *******/
// router.post('/newCliente', (req, res) => {
//     const {cedula_cliente, tipo_identificacion, nombre_cliente, apellido_cliente, correo, user_id} = req.body;
//     const values = [cedula_cliente, tipo_identificacion, nombre_cliente,apellido_cliente,correo];
//     const sql = 'INSERT INTO info_cliente SET ?'
//     conectBD.query(sql, values, (err, result) => {
//       if (err) throw err;
//       res.send("Agregado con exito!!");

//     conectBD.query('SELECT idinfo FROM maxsports.info_cliente ORDER BY idinfo DESC LIMIT 1', [user_id],(err, results) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ mensaje: 'Error al obtener el idinfo del cliente' });
//         return;
//       }
//       if (results.length === 0) {
//         console.log(results)
//         res.status(404).json({ mensaje: 'No se encontró el cliente' });
//         return;
//       }
//       const idinfo = results[0].idinfo;
  
//       // Crear el id_user en objeto
//       const user_id = {
//         user_id: idinfo
//       };
      
//     conectBD.query('INSERT INTO info_cliente SET ?', user_id, (err, result) => {
//         if (err) {
//           console.error(err);
//           res.status(500).json({ mensaje: 'Error al guardar el id en la base de datos' });
//           return;
//         }
  
//         res.json({ mensaje: 'id guardada correctamente' });
//       });

//     })
//     })
// });
router.post('/newCliente', (req, res) => {
  const { cedula_cliente, tipo_identificacion, nombre_cliente, apellido_cliente,telefono, correo } = req.body;
  const values = { cedula_cliente, tipo_identificacion, nombre_cliente, apellido_cliente,telefono, correo };

  const sql = 'INSERT INTO info_cliente SET ?';

  conectBD.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ mensaje: 'Error al agregar el nuevo cliente' });
      return;
    }

    const clienteId = result.insertId; // Obtener el ID autoincremental generado

    // Actualizar la columna user_id con el ID generado
    const updateSql = 'UPDATE info_cliente SET user_id = ? WHERE idinfo = ?';
    conectBD.query(updateSql, [clienteId, clienteId], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ mensaje: 'Error al actualizar el user_id' });
        return;
      }

      res.json({ mensaje: 'Cliente agregado con éxito' });
    });
  });
});

  module.exports = router;



