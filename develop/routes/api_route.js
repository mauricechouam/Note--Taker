const express = require("express");
const router = express.Router();
const dbnotes = require("../db/notes.js");




router.get("/notes", function(req, res){
    dbnotes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
router.post("/notes", function(req, res){
    dbnotes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
router.delete("/notes/:id", function(req, res){
    dbnotes.removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err));
})


module.exports = router;


