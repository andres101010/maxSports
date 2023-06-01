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
//******Funcion para llamar pqr relacionado con el idinfo de la tabla info_cliente*****//
router.get('/', (req,res)=>{
  const idlogin = req.session.idlogin;
    const sql = 'SELECT * FROM pqr WHERE idlogin = ?'
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
// ***Funcion para guardar pqr relacionada con idinfo de la tabla info_cliente */



  router.post('/nuevoPQR', (req, res) => {
    const { tipo, descripcion_pqr, fecha } = req.body;
    const idlogin = req.session.idlogin; // Obtener el idinfo del usuario autenticado desde la sesión
    const sql = 'INSERT INTO pqr (tipo,descripcion_pqr,fecha) VALUES (?, ?, ?)';
    const values = [tipo, descripcion_pqr, fecha]
    // Verificar si el usuario está autenticado
    if (idlogin === false) {
      res.status(401).json({ mensaje: 'Usuario no autenticado' });
      return;
    }
    conectBD.query(sql, values, (err, res) => {
      if (err) {
        console.error(err);
        res.status(500).json({ mensaje: 'Error al crear el PQR' });
        
      }
        
    
         
    })

  });
  
  router.delete('/deletePqr/:idpqr', (req, res) => {
      const idpqr = req.params.idpqr;
      const sql = `DELETE FROM pqr WHERE idpqr = ${idpqr}`;
      conectBD.query(sql, (err, result) => {
        if (err) throw err;
        res.send("Eliminado con exito!!")
      })
  });
  



module.exports = router;

