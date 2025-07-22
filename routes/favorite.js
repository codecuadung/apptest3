var express = require('express');
const middlewareController = require('../controller/middlewareController');
const FavoriteController = require('../controller/FavoritesController');
var router = express.Router();



router.post('/toggle',middlewareController.verifyToken, FavoriteController.toggleFavorite);
// routes/favorite.js
router.get('/list', middlewareController.verifyToken, FavoriteController.getFavorites);


module.exports = router;
