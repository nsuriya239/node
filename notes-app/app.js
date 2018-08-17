console.log("Starting notes: app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const input = require('readline-sync');

var newnote=input.question("What is your note?");

notes.add(newnote+"\n");

console.log(notes.read());

var user = os.userInfo();

