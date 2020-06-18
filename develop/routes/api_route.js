const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid/v4");

module.exports =(app)=> {
    app.get("/api/notes", (request, response) => response.send(db));
    

    app.post("/api/notes", (request, response)=> {

        let noteId = uuid();
        let newNote = {
            id: noteId,
            title: request.body.title,
            text: request.body.text
        };
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            const allNotes = JSON.parse(data);
            allNotes.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), err => {
            if (err) throw err;
            response.send(db);
            console.log("!!!Note Created Successfully!!!")
            });
        });
    });

    app.delete("./db/db.json", "utf8", (err, data) => {
        let nodeId = req.params.id;
        fs.readFile("./db")

    })



}


