/**
 * Sort functions
 */

module.exports = {

   // Main sort algorithm
   stableSort: function(arr, compare) {
     var original = arr.slice(0);

     arr.sort(function(a, b){
         var result = compare(a, b);
         return result === 0 ? original.indexOf(a) - original.indexOf(b) : result;
     });

     return arr;
   },

  // Sort FEMALES FIRST then LAST NAME ASCENDING
  sortFemalesFirst: function(records) {
    module.exports.stableSort(records, function(a, b) {
      return a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0;
    })

    module.exports.stableSort(records, function(a, b) {
      return a.gender > b.gender ? 1 : a.gender < b.gender ? -1 : 0;
    })
  },

  // Sort DOB ASCENDING
  sortDOBAscending: function(records) {

    // Sort DAY ASCENDING first
    module.exports.stableSort(records, function(a, b) {
      const splitDOBa = a.dob.split('/');
      const dayA = splitDOBa[0];

      const splitDOBb = b.dob.split('/');
      const dayB = splitDOBb[0];

      return dayA > dayB ? 1 : dayA < dayB ? -1 : 0;
    });


    // Then sort MONTH ASCENDING first
    module.exports.stableSort(records, function(a, b) {
      const splitDOBa = a.dob.split('/');
      const monthA = splitDOBa[1];

      const splitDOBb = b.dob.split('/');
      const monthB = splitDOBb[1];

      return monthA > monthB ? 1 : monthA < monthB ? -1 : 0;
    });

    // Then sort the records YEAR ASCENDING
    module.exports.stableSort(records, function(a, b) {
      const splitDOBa = a.dob.split('/');
      const yearA = splitDOBa[2];

      const splitDOBb = b.dob.split('/');
      const yearB = splitDOBb[2];

      return yearA > yearB ? 1 : yearA < yearB ? -1 : 0;
    });
  },

  // Sort LAST NAME DESCENDING
  sortLastNameDescending: function(records) {
    module.exports.stableSort(records, function(a, b) {
      return a.lastName < b.lastName ? 1 : a.lastName > b.lastName ? -1 : 0;
    });
  },

  displayRecords: function(records) {
    records.forEach(function(record) {
      console.log(
        record.lastName + ', ' +
        record.firstName + ', ' +
        record.gender + ', ' +
        record.color + ', ' +
        record.dob
      );
    });
  }
};
