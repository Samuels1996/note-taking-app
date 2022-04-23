const fs = require('fs');
const { route } = require('./htmlRoute');
const router = require('express').Router();

router.get ('/notes', (req, res) =>{
    var store = require('../db/db.json');
    res.json(store);
}); 

router.post ('/notes', (req, res) => {
    var store = require('../db/db.json');
    store.push(req.body);
    fs.writeFile ('./db/db.json', JSON.stringify(store), err => {
        if (err) throw err;
    });
    res.json(store);
});

router.delete ('/notes/:title', (req,res) => {
    var store = require('../db/db.json');
    let data = store.filter(obj=>obj.title != req.params.title);
    fs.writeFile ('./db/db.json', JSON.stringify(data), err => {
        if (err) throw err;
    });
    res.json(data);
})

module.exports = router;