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



//***Funcion para autenticar usuario */

router.post('/', (req,res)=>{
  const {user,password} = req.body
  const values = [user,password]

  const sql = 'SELECT idlogin FROM login WHERE user = ? and password = ?';

  conectBD.query(sql,values,(err, result) =>{
      if(err){
          res.status(500).send(err)
      }else if(result.length > 0){
          res.status(200).send('El usuario existe!')
          //const idinfo = obtenerIdInfoUsuario(); // Obtener el idinfo del usuario autenticado
          // Almacenar el idinfo en la sesión del usuario
        }else{
          res.status(400).send('El usuario no existe!')
        }
        const idlogin = result[0].idlogin;
        req.session.idlogin = idlogin;
        console.log(idlogin);
  })


})

router.post('/registro', (req, res) => {
    const { user, password, cedula_cliente, tipo_identificacion,nombre_cliente,apellido_cliente,telefono, correo } = req.body;
  
    // Insertar datos del usuario en la tabla info_cliente
    const insertInfoClienteSql = 'INSERT INTO info_cliente (cedula_cliente,tipo_identificacion,nombre_cliente,apellido_cliente,telefono, correo, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const insertInfoClienteValues = [cedula_cliente,tipo_identificacion,nombre_cliente,apellido_cliente,telefono, correo,null];
  
    conectBD.query(insertInfoClienteSql, insertInfoClienteValues, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ mensaje: 'Error al registrar el usuario' });
        return;
      }
  
      const idinfo = result.insertId; // Obtener el valor generado para idinfo

      const updateInfoClienteSql = 'UPDATE info_cliente SET user_id = ? WHERE idinfo = ?';
      const updateInfoClienteValues = [idinfo, idinfo]; // Establecer user_id igual al valor de idinfo
  
      conectBD.query(updateInfoClienteSql, updateInfoClienteValues, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ mensaje: 'Error al registrar el user_id' });
          return;
      }
    });      
    // Insertar datos del usuario en la tabla de inicio de sesión
      const insertLoginSql = 'INSERT INTO login (user, password, idlogin) VALUES (?, ?, ?)';
      const insertLoginValues = [user, password, idinfo];
  
      conectBD.query(insertLoginSql, insertLoginValues, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ mensaje: 'Error al registrar el usuario' });
          return;
        }
  
        res.json({ mensaje: 'Usuario registrado con éxito' });
      });
    });
  });
  
module.exports = router;