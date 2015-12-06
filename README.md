Javascript Ad-checker

This project was created as a part of a course on Web Technologies. It is an implementation of the research paper "An Approach for Identifying JavaScript-loaded Advertisements through Static Program Analysis" by Caitlin R. Orr, Arun Chauhan, Minaxi Gupta, Christopher J. Frisz and Christopher W. Dunn.

It is written in nodeJS and using esprima and express. To run the code you will need to have all three of them installed. The input is a JavaScript file, the name of which is hardcoded in the nodeJS code. It's on 10th line.

var file = fs.readFileSync("yourfilepath.js");

Now run main.js by "node main.js" on command line. Open http://0.0.0.0:8081/process_post on your browser. Browser will be filled with a lot of text ( AST dump). Now check the terminal. On running the nodeJS code it will output on the shell whether it is a script or not. Along with that it print a number which can be used as chance of being an advertisement. A more positive number indicates higher chances of the script being ad-related and a more negative number indicates a higher chances of not being ad-related.
