const { fileToRecordsPromise, convertFilesToRecords } = require ('./modules/parse_utils.js');
const { stableSort, sortFemalesFirst, sortLastNameDescending, sortDOBAscending, displayRecords} = require ('./modules/sort_utils.js');

// Get filenames to parse.  Drop first two arguements which should be 'node' and 'app filename'.
let filenames = process.argv;
filenames.splice(0, 2);

let i;
let records = [];  // will contain an array of record objects

// Prepare promises array
let filesToRecordsPromiseArray = [];
for (filename of filenames) {
  filesToRecordsPromiseArray.push(fileToRecordsPromise(filename));
}

Promise.all(filesToRecordsPromiseArray)
  .then((files) => {
    // At this point, all files are read in.  Generate array of record objects
    records = convertFilesToRecords(files);

    // Sort FEMALES FIRST then LAST NAME ASCENDING
    sortFemalesFirst(records)
    console.log('\nFEMALES FIRST then LAST NAME ASCENDING');
    console.log('======================================');
    displayRecords(records);

    // Sort DOB ASCENDING
    sortDOBAscending(records);
    console.log('\nDOB ASCENDING');
    console.log('=============');
    displayRecords(records);

    // Sort the records LAST NAME DESCENDING
    sortLastNameDescending(records);
    console.log('\nLAST NAME DESCENDING');
    console.log('====================');
    displayRecords(records);

    console.log('\n');

  });
