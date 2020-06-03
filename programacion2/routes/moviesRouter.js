
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
router.get('/userDetail/:username/:email/:birthdate/:id',controller.UserDetail);

router.get('/signUp',controller.signUp)


router.post('/logIn',controller.logInPorPost)


// crear review
router.post('/reviewsAdd/:Id', controller.reviewsAdd),

router.post('/edit/:Id', controller.edit),

router.post('/confirmedit/:Id',  controller.confirmEdit)

router.get('/myReviews',controller.myReviews)


router.get('/myReviewsList', controller.myReviewsList)

//eliminar review
router.post('/delete/:Id', controller.delete),

router.get('/botones', controller.botones),

router.get('/botonesDetalle',controller.botonesDetalle),

router.get('/lastReviews', controller.lastReviews)

router.get('/toprated', controller.toprated)

router.get('/worstrated', controller.worstrated)


module.exports = router;




