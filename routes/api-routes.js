const express = require("express");
const router = express.Router();
const note = require("../db/note");

// when the /api/notes route is called
router.get('/notes', (req, res) => {
    console.log("hitting NOTES API ROUTE");
    note.allNotes().then((notes) => res.json(notes));
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    note.postNotes(req.body).then((note) => res.json(note));
});

// router.delete('/notes/:id, (req,res) => )
    // req.params
module.exports = router;