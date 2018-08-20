
var addNote = (title,body) => {
        console.log("Adding New Note-Title :"+title+" Note :"+body);
};

var listAll = () => {
        console.log("Listing all notes");
};

var removeNote = (title) => {
        console.log("Removing the Note :",title);
};

var readNote = (title) => {
        console.log("Reading the Note :",title);
};

module.exports = {
        addNote,
        listAll,
        readNote,
        removeNote
};
