//hotels.controllers.js
var hotelData = require('../data/hotel-data.json')

module.exports.hotelsGetAll = function (req,res){

    console.log("Get Request hotelsGetAll");
    console.log(req.query);

    var count=5;
    var offset=0;


    if(req.query && req.query.offset){
    	offset= parseInt(req.query.offset,10);
    }

    if(req.query && req.query.count){
    	count= parseInt(req.query.count,10);
    }


    var responseData = hotelData.slice(offset,offset+count);

    res
      .status(200)
      .json(responseData);


};


module.exports.hotelsGetOne = function (req,res){


	console.log("Get Request hotelID : ", hotelID);

	var hotelID = req.params.hotelID;

	var thisHotel = hotelData[hotelID];

    res
      .status(200)
      .json(thisHotel);


};