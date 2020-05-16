
var express = require('express');
var router = express.Router();
var controller = require('../controllers/moviesController') 

// populares
router.get('/home', controller.lista);
// detalles
router.get('/detalle', controller.detalles);
// mejores puntuadas
router.get('/buscador', controller.search);
// porGenero
router.get('/seriesByGenre', controller.porGenero);
// SeriesGenre
router.get('/seriesGenres', controller.seriesGenre);

// resultados busqueda
router.get('/resultadoBusqueda', controller.resultadosBusqueda);
// post de usuarios
router.post('/addUser', controller.addUser);

//ruta de usuarios
router.get('/userlist',controller.userList);

//ruta detalle de usuario
router.get('/userDetail/:username/:email/:birthdate',controller.UserDetail);

router.get('/signUp',controller.signUp)
router.get('/logIn',controller.logIn)



module.exports = router;




