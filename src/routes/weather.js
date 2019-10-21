let WeatherModel = require("../models/weather.model");
let express = require("express");
let router = express.Router();

router.post("/weather", (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  let model = new WeatherModel(req.body);
  model
    .save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }
      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/weather", (req, res) => {
  WeatherModel.find()
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/weather:cname", (req, res) => {
  let wfilter = req.params.cname.split("&");
  let cname = wfilter[0];
  while (cname.charAt(0) === ":") {
    cname = cname.substr(1).toLowerCase();
  }
  console.log(cname, wfilter[1], wfilter[2]);
  convertDate = timestamp => {
    let date = new Date(timestamp * 1000);
    let cdate =
      date.getMonth() +
      1 +
      "-" +
      date.getDate() +
      "-" +
      date.getFullYear()
    return cdate;
  };

  WeatherModel.find()
    .then(doc => {
      // console.log("doc " + doc);
      let filteredDoc;
      filteredDoc = doc.filter(function(item){
          return convertDate(item.date) >= wfilter[1] && convertDate(item.date) <= wfilter[2] && item.city.toLowerCase() === cname;
      })
      res.status(200).send(filteredDoc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
