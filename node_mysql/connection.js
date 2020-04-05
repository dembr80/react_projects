var mysql = require('mysql');

var con = mysql.createConnection({
  host: "185.47.185.47",
  user: "dembr80",
  password: "blabla",
  database: "elszamolas"
});


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM havi", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});