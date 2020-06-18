// class Note  helping to build a note and make some manipulation 
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
    // function helping to add new note
    addNotes(note) {
        console.log("!!! add Notes!!! ");
        const { title, text } = note;
        //each note willbe unique because off the ID number
        //helping to identify each note
        const newNote = { title, text, id: ++this.IdDum }
        return this.getNotes()
            //The then() method returns a Promise. It takes up to two arguments: 
            //callback functions for the success and failure cases of the Promise.
            // this will retune an array of a note and waiting for a new note
            .then(notes => [...notes, newNote])
            // this will updated a the note liste or note file
            .then(updateNotes => this.write(updateNotes))
            // function to have a new note
            .then(() => newNote)
    }
    // function helping to remove a delete a note.
    removeNote(id) {
        console.log("!!! Delete Notes !!!");
        // identify the note need to be deleted
        return this.getNotes()
            //return the element of array using the filter  
            .then(notes => notes.filter(note => note.id !== parseInt(id)))
             // this will updated a the note liste or note file
            .then(updateNotes=>this.write(updateNotes))
    }

}

module.exports = Notes;
