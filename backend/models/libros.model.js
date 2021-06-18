//Conexion con la base de datos
const base_datos = require('../database/db.config');

//Creacion de la clase para las peticiones al Query
class Peticiones {
    
    //Funcion para pedir todos los libros de las base de datos
    async getAllBooks() {
        let query = `SELECT * FROM Libros;`
        const respuesta = await base_datos.query(query);
        return respuesta;
    }
    //Funcion para insertar un nuevo libro en la base de datos
    async addBook(n_referencia,titulo,descripcion){
        const respuesta = await base_datos.query(`INSERT INTO Libros (n_ref,titulo,descripcion) VALUES ($1, $2, $3);`,[n_referencia, titulo, descripcion]);
        return respuesta;
    }

}

//Creacion de un objeto de peticiones
const peticion = new Peticiones();

//Exportacion del objeto peticion
module.exports = peticion;

