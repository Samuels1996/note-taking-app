const currentNotes = require('../db/db.json');
const { route } = require('./htmlRoute');
const router = require('express').Router();

router.get ('/notes', (req, res) => {
    res.json(currentNotes)
});

router.post ('/notes', (req, res) => {
    currentNotes.push(req.body)
    console.log('currentNotes: ', currentNotes);
    res.json(currentNotes);
})

module.exports = router;