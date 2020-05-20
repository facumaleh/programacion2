var express = require('express');
var router = express.Router();
let controller = require('../controllers/moviesController')

/* GET home page. */
router.get('/', controller.lista);

module.exports = router;
