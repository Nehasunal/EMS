var mysql=require('mysql');
const http = require('http');
const con=mysql.createConnection({
host:"localhost",
user:"root",
password:'',
database:"nodejs-login"

})

con.connect(function(err){
  if(err) throw err;
  console.log("mysql connected");
})

module.exports = con;
