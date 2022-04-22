const currentNotes = require('../db/db.json')
const route = require('express').Router();

route.get ('/notes', (req, res) => {

    currentNotes .getNotes().then(notes => res.json(notes))
})

module.exports = route;