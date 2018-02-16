//index.js
var express = require('express');
var router = express.Router();
var crtlHotels = require('../controllers/hotels.controllers');
var crtlLogin = require('../controllers/login.controller');

 
router.
	route('/hotels')
	.get(crtlHotels.hotelsGetAll);


router.
	route('/hotels/:hotelID')
	.get(crtlHotels.hotelsGetOne);

router.
	route('/login')
	.post(crtlLogin.login);	

module.exports=router;