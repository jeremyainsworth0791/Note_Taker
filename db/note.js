const fs = require('fs').promises;

class Note {
    read(){
       return fs.readFile("db/db.json", "utf-8");
    }

    write(note) {
        return fs.writeFile("db/db.json", JSON.stringify(note))
    }

    allNotes(){
        console.log("HITTING ALL NOTES IN NOTES MODEL");
        return this.read().then((notes) =>{
            console.log(notes);
            let parsedNotes;
            // if notes is an array or can be turned into one
            // check if notes is an array or can be turned into one
            try {
                parsedNotes = [].concat(JSON.parse(notes))  // this leaves us with an array of notes
                // if not, do this
            } catch (err) {
                parsedNotes = [];
            }
            // const parseNotes = notes.map(note => JSON.parse(note));
            return parsedNotes;
        });
    }

    postNotes(note){
        // for deleting, assign each new note an id
            // uuid/v1
        return this.allNotes().then((notes) => [...notes, note])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => note);
    };
}

module.exports = new Note();