var fs = require('fs');

var regex1 = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/\/=]*)/g
var regex2= /[-a-zA-Z0-9@:%_\+.~#?&/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&/\/=]*)?/gi;
var regex3= /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;


var file = fs.readFileSync("test9.js");
var text= "";
text = text.concat(file);
var myArray= text.match(regex3);

console.log(myArray);
