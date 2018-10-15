const parseUtils = require ('./modules/parse_utils.js');
const { fileToRecords } = parseUtils;

// Get filenames to parse.  Drop first two arguements which should be 'node' and 'app filename'.
let filenames = process.argv;
filenames.splice(0, 2);

let i;
let records = [];  // will contain an array of record objects

// Prepare Promises array
let filesToRecordsArray = [];
for (filename of filenames) {
  filesToRecordsArray.push(fileToRecords(filename));
}

Promise.all(filesToRecordsArray)
  .then((files) => {
    for (file of files) {
      // Create an array where each item is a line from the file
      let lines = file.split('\n')

      // Remove extra blank line from array at end
      lines.splice(lines.length - 1,1);

      // Add to array of record objects
      for (let line of lines) {
        // parse record and put into record object
        record = parseUtils.parseLine(line);
        records.push(record);
      }
    }

    // Sort algorithm
    function stableSort(arr, compare) {
      var original = arr.slice(0);

      arr.sort(function(a, b){
          var result = compare(a, b);
          return result === 0 ? original.indexOf(a) - original.indexOf(b) : result;
      });

      return arr;
    }

    // Sort the records FEMALES FIRST then LAST NAME ASCENDING
    stableSort(records, function(a, b) {
      return a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0;
    })

    stableSort(records, function(a, b) {
      return a.gender > b.gender ? 1 : a.gender < b.gender ? -1 : 0;
    })

    // Display records
    console.log('\n\nFEMALES FIRST then LAST NAME ASCENDING');
    console.log('======================================');
    records.forEach(function(record) {
       console.log(
         record.lastName + ', ' +
         record.firstName + ', ' +
         record.gender + ', ' +
         record.color + ', ' +
         record.dob
       );
    });


    // Sort the records LAST NAME ASCENDING
    stableSort(records, function(a, b) {
    	return a.lastName < b.lastName ? 1 : a.lastName > b.lastName ? -1 : 0;
    })

    // Display records
    console.log('\n');
    console.log('LAST NAME DESCENDING');
    console.log('====================');
    records.forEach(function(record) {
	     console.log(
         record.lastName + ', ' +
         record.firstName + ', ' +
         record.gender + ', ' +
         record.color + ', ' +
         record.dob
       );
    });

    // Sort DOBs algorithm
    function stableSort(arr, compare) {
      var original = arr.slice(0);

      arr.sort(function(a, b){
          var result = compare(a, b);
          return result === 0 ? original.indexOf(a) - original.indexOf(b) : result;
      });

      return arr;
    }


    // Sort the records DAY ASCENDING
    stableSort(records, function(a, b) {
      const splitDOBa = a.dob.split('/');
      const dayA = splitDOBa[0];

      const splitDOBb = b.dob.split('/');
      const dayB = splitDOBb[0];

      return dayA > dayB ? 1 : dayA < dayB ? -1 : 0;
    });


    // Sort the records MONTH ASCENDING
    stableSort(records, function(a, b) {
      const splitDOBa = a.dob.split('/');
      const monthA = splitDOBa[1];

      const splitDOBb = b.dob.split('/');
      const monthB = splitDOBb[1];

      return monthA > monthB ? 1 : monthA < monthB ? -1 : 0;
    });

    // Sort the records YEAR ASCENDING
    stableSort(records, function(a, b) {
      const splitDOBa = a.dob.split('/');
      const yearA = splitDOBa[2];

      const splitDOBb = b.dob.split('/');
      const yearB = splitDOBb[2];

      return yearA > yearB ? 1 : yearA < yearB ? -1 : 0;
    });

    // Display records
    console.log('\n\nDOB ASCENDING');
    console.log('=============');
    records.forEach(function(record) {
       console.log(
         record.lastName + ', ' +
         record.firstName + ', ' +
         record.gender + ', ' +
         record.color + ', ' +
         record.dob
       );
    });

    console.log('\n');

  });
