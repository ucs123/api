let IndexDataModel = require("../models/indexdata.model");
let express = require("express");
let router = express.Router();

router.post("/indexdata", (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  let model = new IndexDataModel(req.body);
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

router.get("/indexdata", (req, res) => {
  IndexDataModel.find()
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/indexdata:id", (req, res) => {
  IndexDataModel.findOne()
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/indexdata:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  console.log(req.params);
  IndexDataModel.findOneAndUpdate(
    { _id: req.params.id },
    { $push: {"cdata" : req.body} }
  ).exec(function(err, doc) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(doc);
    }
  });
});

module.exports = router;
