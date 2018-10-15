const fs = require("fs");
const parseUtils = require ('./modules/parse_utils.js');

// Get filenames to parse.  Drop first two arguements which should be 'node' and 'app filename'.
let filenames = process.argv;
filenames.splice(0, 2);
console.log('filenames: ', filenames);

// Loop through command line arguments.
let i;
let records = [];  // will contain an array of record objects

// const timeoutIn = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(time), time)
//     })
// }
// timeoutIn(2000)
//     .then(res => console.log(`Resolved in ${res/1000} seconds`))




const fileToRecords = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile( filename, 'utf-8', (err, file) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(file);
      }
    });
  })
};

console.log('filenames', filenames);
let filesToRecordsArray = [];
for (filename of filenames) {
  console.log('filename: ', filename);
  filesToRecordsArray.push(fileToRecords(filename));
}

Promise.all(filesToRecordsArray)
  .then((files) => {
    for (file of files) {
      // Create an array where each item is a line from the file
      let lines = file.split('\n')

      // Remove extra blank line from array at end
      lines.splice(lines.length - 1,1);
      console.log('lines of input file: ', lines);

      // Create array of record objects
      for (let line of lines) {
        // parse record and put into record object
        record = parseUtils.parseLine(line);
        records.push(record);
      }
    }
    console.log('number of records: ', records.length);
    console.log('records: ', records);


  });

console.log('DONE -- hits this first because above are async calls');
console.log('records (may be blank here because asyc file reads not done yet): ', records);
