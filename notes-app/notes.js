
const fs = require('fs');
const os = require('os');

module.exports.add = (str) => {
        // console.log(str);
        fs.appendFileSync('greetings.txt',str);
}

module.exports.read = () => {
        return fs.readFileSync('greetings.txt','utf8');
}