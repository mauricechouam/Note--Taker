const express = require("express")
const router = express.Router();
const fs = require("fs");
const util = require("util");

const readFileAsyn = util.promisify(fs.readFile);
const writeFileAsyn = util.promisify(fs.writeFile);

class Notes {
    constructor() {
        this.IdDum = 0;
    }
    read() {
        return readFileAsyn("./db/db.json", "utf8");
    }
    write(note) {
        return writeFileAsyn("./db/db.json", JSON.stringify(note))
    }
    getNotes() {
        console.log("get notes")
        return this.read().then(notes => {
            console.log(notes)
            let noteArray;
            try {
                noteArray = [].concat(JSON.parse(notes));
            }
            catch (err) {
                noteArray = [];
            }
            return noteArray;
        })
    }





}



