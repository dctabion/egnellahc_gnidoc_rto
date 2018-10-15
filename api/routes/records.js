const { parseLine } = require ('../../modules/parse_utils.js');
const { stableSort, sortFemalesFirst, sortLastNameDescending, sortDOBAscending } = require ('../../modules/sort_utils.js');

var express = require('express');
var router = express.Router();

/* Get records sorted by FEMALE FIRST then LAST NAME ascending */
router.get('/gender', function(req, res, next) {
  sortFemalesFirst(global.records);
  res.json(global.records);
});

/* Get records sorted by DOB ascending */
router.get('/birthdate', function(req, res, next) {
  sortDOBAscending(global.records);
  res.json(global.records);
});

/* GET records sorted by LAST NAME descending */
router.get('/name', function(req, res, next) {
  sortLastNameDescending(global.records);
  res.json(global.records);
});

/* ADD records */
router.post('/', function(req,res, next){
  console.log('type: ', typeof req.body);
  console.log('req.body', req.body);

  if (req.body instanceof Array) {
    console.log('it is an array');
    for (let i=0; i < req.body.length; i++) {
      global.records.push(parseLine(req.body[i].record));
    }

  }
  else if (typeof req.body == 'object') {
    global.records.push(parseLine(req.body.record));
    console.log(global.records);
  }

  res.json(global.records);



});

module.exports = router;
