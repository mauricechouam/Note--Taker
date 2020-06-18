const express = require("express")
const router = express.Router();
const fs = require("fs");
const util = require("util");

const readFileAsyn = util.promisify(fs.readFile);
const writeFileAsyn = util.promisify(fs.writeFile);

// class Note 
class Notes {
    //constructor 
    constructor() {
        this.IdDum = 0;
    }
    //read method will help to 
    read() {
        return readFileAsyn("./db/db.json", "utf8");
    }
    //write method converts a JavaScript object or value to a JSON string
    write(note) {
        return writeFileAsyn("./db/db.json", JSON.stringify(note))
    }
    //getnote Using to add notes and remove note
    getNotes() {
        console.log("get notes")
        return this.read().then(notes => {
            console.log(notes)
            // build a array of note  when user enter some note
            let noteArray;
            try {
                //merge Note array and Parse the data with JSON.parse(), and the data becomes a JavaScript object.
                noteArray = [].concat(JSON.parse(notes));
            }
            // when err , array stay emphty.
            catch (err) {
                noteArray = [];
            }
            return noteArray;
        })
    }

    addNotes(note) {
        console.log("add Notes");
        const { title, text } = note;
        //each note willbe unique because off the ID number
        //helping to identify each note
        const newNote = { title, text, id: ++this.IdDum}
    }




}



