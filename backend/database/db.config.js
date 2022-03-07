//Archivo donde se configura la conexión a la base de datos

const { Pool } = require('pg');

//Creacion de una variable que tenga todos los datos de la 
//configuracion de la base de datos
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'libros',
    password: '',
    port: 5432,
};

//Creacion de un nuevo Pool
const pool = new Pool(config);

//Exportacion de este nuevo Pool para que pueda ser utilizado 
module.exports = pool;
