//Conexion con las peticiones
const peticiones = require('../models/libros.model');

//Creacion de las clases que se interpondran entre la vista
//y la base de datos
class ControladorLibros{

    //Peticion de lectura de una tabla de la base de datos
    //req = la peticion del fronend, res = respuesta del backend
    getAllBooks = async(req, res) => {
        const db_respuesta = await peticiones.getAllBooks();
        res.json(db_respuesta.rows);
    }
    //Peticion de escritura en la base de datos
    addBook = async(req, res) => {
        const {n_referencia, titulo, descripcion} = req.body;
        const db_respuesta = await peticiones.addBook(n_referencia, titulo, descripcion);
        res.json(db_respuesta.rows);
    }

}

//Creacion de un controlador
const cont_Libros = new ControladorLibros();

//Exporatacion del controlador
module.exports = cont_Libros;