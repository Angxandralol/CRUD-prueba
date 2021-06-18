const express = require('Express');
const ruta = express.Router();
const controladorLibros = require('../controllers/libros.controller');

//Ruta para acceder a todos los libros de la base de datos
ruta.get('/allBooks', controladorLibros.getAllBooks);
//Ruta para agregar un libro a la base de datos
ruta.post('/allBooks', controladorLibros.addBook);

//Exportacion de las rutas
module.exports = ruta;