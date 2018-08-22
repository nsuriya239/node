console.log("Starting notes: app.js");

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOpt =  {
    describe : "Title of the Note",
    demand : true,
    alias : 't'
};
const bodyOpt = {
    describe : "Body of the note",
    demand : true,
    alias : 'b'
};

var args = yargs.command("add","add a new note",{
    title: titleOpt,
    body: bodyOpt
}).command("remove","remove a note",{
    title: titleOpt
}).command("read","read a note",{
    title: titleOpt
}).command("list","list all notes")
.help()
.argv;
var command = args._[0];

// console.log(args);


switch (command) {
    case 'read':
        var note = notes.readNote(args.title);
        if(note.length != 0){
            console.log(`Title: ${note[0].title}\nBody: ${note[0].body}`);
        }
        else{
            console.log(`There is no such Note`);
        }
        break;

    case 'list':
       notes.listAll();
        break;
    
    case 'add':
        notes.addNote(args.title,args.body);
        break;

    case 'remove':
        notes.removeNote(args.title);
        break;

    default: 
            console.log("Command not recognised");
        break;
}