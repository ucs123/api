let NavModel = require('../models/nav.model');
let express = require('express');
let router = express.Router();

router.post('/nav', (req, res) =>{
    if(!req.body){
        return res.status(400).send('Request body is missing');
    }
    let model = new NavModel(req.body);
    model.save()
    .then(doc => {
        if(!doc || doc.length === 0){
            return res.status(500).send(doc)
        }
        res.status(201).send(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.get('/nav', (req, res) =>{
    NavModel.find()
    .then(doc =>{
        res.status(200).send(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;