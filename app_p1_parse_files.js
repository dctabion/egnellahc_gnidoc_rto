const fs = require("fs");
const parseUtils = require ('./modules/parse_utils.js');

// Get filenames to parse.  Drop first two arguements which should be 'node' and 'app filename'.
let filenames = process.argv;
filenames.splice(0, 2);
console.log('filenames: ', filenames);

// Loop through command line arguments.
let i;
let records = [];

// Loop through all files from command line arguments
for (i = 0; i < filenames.length; i++) {
  // Read in file
  fs.readFile(filenames[i], 'utf-8', (err, file) => {
    // create an array where each item is a line from the file
    let lines = file.split('\n')

    // Remove extra blank line from array at end
    lines.splice(lines.length - 1,1);
    console.log('lines of input file: ', lines);

    // push each record object into an array
    for (let line of lines) {
      // parse record and put into record object
      record = parseUtils.parseLine(line);
      records.push(record);
    }

    console.log('number of records: ', records.length);
    console.log('records: ', records);
  });

}

console.log('DONE -- hits this first because above are async calls');
console.log('records (may be blank here because asyc file reads not done yet): ', records);
