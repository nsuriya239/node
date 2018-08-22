
const fs = require('fs');
var notes = [];
var readNoteString;

var fetchNotes = () => {
        try{
                readNoteString = fs.readFileSync("./playground/notes.json","utf8");
                return  JSON.parse(readNoteString);
               }catch(e){
                       return notes;
               }
};

var saveNotes = (notes) => {
        fs.writeFileSync("./playground/notes.json",JSON.stringify(notes));
};

var dupicates = (title,json) => {
        notes = fetchNotes();
        var duplicateNote = notes.filter((json) => json.title === title);
        if(duplicateNote.length === 0){
        notes.push(json);
        saveNotes(notes);
        }
        else{
                console.log("please enter a Unique title");
        } 
};

var addNote = (title,body) => {
        console.log(`Adding New Note\nTitle :${title}\nBody :${body}`);
        notes = fetchNotes();
        var json = {
               title,
               body
        }; 
        dupicates(title,json);
};

var listAll = () => {
        console.log("Listing all notes");
         console.log(fetchNotes());
};

var removeNote = (title) => {
        console.log("Removing the Note :",title);
        notes = fetchNotes();
        var newNote = notes.filter((note) => note.title != title);
        if(notes.length != newNote.length){
                saveNotes(newNote);
                console.log('Note is removed');
        }
        else{
                console.log('There is no such Note');
        }
};

var readNote = (title) => {
        console.log("Reading the Note :",title);
        notes = fetchNotes();
        debugger;
       var note = notes.filter((note) => note.title === title);
//        console.log(note);
       return note;
};

module.exports = {
        addNote,
        listAll,
        readNote,
        removeNote
};
