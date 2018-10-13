const fs = require("fs");
const parseUtils = require ('./modules/parse_utils.js');

// Get filenames to parse.  Drop first two arguements which should be 'node' and 'app filename'.
const arguments = process.argv;
arguments.splice(0, 2);
console.log('arguments: ', arguments);

// Loop through command line arguments.
// let i;
// let records = [];
//
// // Loop through all files from command line arguments
// for (i = 0; i < arguments.length; i++) {
//   // Read in file
//   // create an array where each item is a line from the file
//   fs.readFile(arguments[i], 'utf-8', (err, file) => {
//     const lines = file.split('\n')
//     // push each line into an array
//     for (let line of lines) {
//       records.push(line);
//     }
//     // Remove extra blank line from array
//     records.splice(records.length - 1,1);
//     console.log('records: ', records);
//   });
//
// }

console.log('DONE');
