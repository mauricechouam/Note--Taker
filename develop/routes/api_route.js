const express = require("express");
const router = express.Router();
const dbnotes = require("../db/notes.js");



// use express.router.get() to handle GET requests
router.get("/notes", function(req, res){
    dbnotes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
//Respond to POST request on the root route ("/notes"),
router.post("/notes", function(req, res){
    dbnotes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
//Respond to a DELETE request to the "/notes/:id" route:
router.delete("/notes/:id", function(req, res){
    dbnotes.removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err));
})


module.exports = router;


