var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.json([
    {id: 1, vendor_name: "Some name"},
    {id: 2, vendor_name: "Some other name"},
    {id: 3, vendor_name: "Some name again"},
    {id: 4, vendor_name: "Naaaames"}
  ])
});

module.exports = router;
