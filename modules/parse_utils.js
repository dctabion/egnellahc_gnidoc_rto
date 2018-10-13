module.exports = {

  /**
   * Misc utilities
   */

  parseLine: function(line) {
    console.log('------in parseLine()');
    // console.log('input line: ', line);

    let attributes = [];

    // null input
    if (line == null) {
      return null;
    }
    // Line is PIPE delimited
    else if ( ((attributes = line.split('|')).length) == 5 ) {
      console.log('Line is PIPE delimited');
    }
    // Line is SPACE delimited
    else if ( ((attributes = line.split(' ')).length) == 5 ) {
      console.log('Line is SPACE delimited');
    }
    // Line is LINE delimited
    else if ( ((attributes = line.split(',')).length) == 5 ) {
      console.log('Line is COMMA delimited');
    }
    else {
      console.log('Malformed input line');
      return null;
    }

    console.log('line: ', line);
    console.log(attributes);

    return  {
              lastName: attributes[0],
              firstName: attributes[1],
              gender: attributes[2],
              color: attributes[3],
              dob: attributes[4]
            };
  },

  storeLine: function() {
    return 42;
  },

  /**
   * Sort functions
   */

  sortGender: function() {
    return 42;
  },

  sortBirthday: function() {
    return 42;
  },

  sortLastName: function() {
    return 42;
  }

};
