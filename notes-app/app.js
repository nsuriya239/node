console.log("Starting notes: app.js");

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');

const notes = require('./notes.js');

var args = yargs.argv;
var command = args._[0];

// console.log(args);


switch (command) {
    case 'read':
        notes.readNote(args.title);
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