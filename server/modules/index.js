var express = require("express");
var router = express.Router();
var path = require("path");
var Movie = require("../models/movies.js");

router.get("/movie", function(req,res){
    Movie.find({}, function(err, data){
        if(err){
          console.log(err);
        }

        res.send(data);
    });
});

router.post("/movie", function(req,res){
    console.log(req.body);

    var addedMovie = new Movie({"Title" : req.body.Title, "Runtime" : req.body.Runtime, "Rated" : req.body.Rated, "Actors" : req.body.Actors, "Plot": req.body.Plot});
    addedMovie.save(function(err, data){
        if(err){
          console.log(err);
        }

        res.send(data);
    });


});

router.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
