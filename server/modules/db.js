var mongoose = require("mongoose");

var mongoURI = "mongodb://localhost/kappa_movies_api_app";
var MongoDB = mongoose.connect(mongoURI).connection;


MongoDB.on("error", function(err){
    console.log("Mongo connection error: ", err);
});

MongoDB.on("open", function(){
    console.log("Mongo connection open");
});

module.exports = MongoDB;
