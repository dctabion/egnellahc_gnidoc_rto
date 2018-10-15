const fs = require("fs");

/**
 * Misc utilities
 */
module.exports = {


  parseLine: function(line) {
    // console.log('------in parseLine()');
    // console.log('input line: ', line);

    let attributes = [];

    // null input
    if (line == null) {
      return null;
    }
    // Line is PIPE delimited
    else if ( ((attributes = line.split('|')).length) == 5 ) {
      // console.log('Line is PIPE delimited');
    }
    // Line is SPACE delimited
    else if ( ((attributes = line.split(' ')).length) == 5 ) {
      // console.log('Line is SPACE delimited');
    }
    // Line is LINE delimited
    else if ( ((attributes = line.split(',')).length) == 5 ) {
      // console.log('Line is COMMA delimited');
    }
    else {
      // console.log('Malformed input line');
      return null;
    }

    // console.log('line: ', line);
    // console.log(attributes);

    return  {
              lastName: attributes[0],
              firstName: attributes[1],
              gender: attributes[2],
              color: attributes[3],
              dob: attributes[4]
            };
  },


  fileToRecordsPromise: function(filename) {
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
  },

  convertFilesToRecords: function(files) {
    let records = [];
    for (file of files) {
      // Create an array where each item is a line from the file
      let lines = file.split('\n')

      // Remove extra blank line from array at end
      lines.splice(lines.length - 1,1);

      // Add to array of record objects
      for (let line of lines) {
        // parse record and put into record object
        const record = module.exports.parseLine(line);
        records.push(record);
      }
    }
    return records;
  }
};
