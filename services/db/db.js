 const DB_HOST = process.env.BD_HOST || "localhost";
 const DB_USER = process.env.BD_USER || "root";
 const DB_PASSWORD = process.env.BD_PASSWORD || "root";
 const DB_NAME = process.env.BD_NAME || "maxSports";
 const DB_PORT = process.env.BD_PORT || "3306";

 module.exports ={
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT
 };
