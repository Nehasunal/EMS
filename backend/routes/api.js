const express = require('express');
const router = express.Router();
const mysql = require('mysql');


var connection = require('../db.js');


//checking
router.get('/', (req, res, next) => res.send('API Hello World!'));

//Get user
router.get('/users', (req,res)=>{
  connection.query('SELECT * FROM users', (err, rows, fields) => {
      if(!err)
          res.send(rows);
      else
          console.log(err);
  })
});


// login api
router.post('/login', (req, res) => {
  let userData = req.body;
  var userName  = userData.userName;
  var Password = userData.password;
  var role=userData.options;
  console.log(userData);

  connection.query('SELECT * FROM users WHERE username = ?',[userName], (err, rows, fields) => {
    if (err) {
      console.log(err);
      return res.status(500).send( {'error' :'Sorry username does not exits'} );
    } else {

      if (rows.length >0) {
        if ( rows[0].password == Password) {
           // console.log(rows[0].role +"hi")
             // var a=rows[0].role
             // console.log(a);
             // if(rows[0].options==role){
          return res.status(200).send();
        }
        // else{
        //     return res.status(401).send({ 'error':  'Invalid role' });
        // }
          // {'success' :'login successful '}
         else {
            return res.status(401).send({ 'error':  'Invalid password' });
        }
      } else{
          return res.status(404).send('Sorry username does not exits');
      }
    }
  });
});  //post

//ShowComponent

router.get('/select', (req, res) => {
  let userData = req.body;
    console.log(userData);
    var userName = userData.username;
    var email=userData.email;
    var title=userData.title;
    var department=userData.department;
    var salary=userData.salary;
  var sql = "SELECT * FROM users";

    connection.query( sql , (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send( {'error' :'Sorry username does not exits'} );
    } else{
      console.log(results )
      return res.send(results);
    }
  })
});
/////////////selectone
router.get('/selectone/:id', (req, res) => {
  let userData = req.body;

    var id=req.params.id;
    console.log(id);
    var userName = userData.username;
    var email=userData.email;
    var title=userData.title;
    var department=userData.department;
    var salary=userData.salary;

var sql="SELECT * FROM users WHERE id = '"+req.params.id+"' ";
// connection.query('SELECT * FROM users WHERE id = ?',[req.params.id], (err, rows, fields) => {
connection.query(sql,(err,rows,fields)=>{

  console.log(rows);
    if (err) {
      console.log(err);
      return res.status(500).send( {'error' :'Sorry username does not exits'} );
    } else{

      return res.send();
    }
  })
});
//////////updateEmployee

router.put('/update/:id', (req, res) => {
  let userData = req.body;
    console.log(userData);
    var id=req.params.id;
    var userName = userData.username;
    var email=userData.email;
    var title=userData.title;
    var department=userData.department;
    var salary=userData.salary;



connection.query("UPDATE users SET username=?,email=?,title=?,department=?,salary=? WHERE id=?",
[userName,email,title,department,salary,req.params.id],
 (err, rows, fields) => {

    if (err) {
      console.log(err);
      return res.status(500).send( {'error' :'Sorry username does not exits'} );
    } else{

            return res.status(200).send(rows);
    }
  })
});




router.post('/add', (req, res) => {

  let userData = req.body;
    console.log(userData);
    var userName = userData.username;
    var email=userData.email;
    var role=userData.role;
    var password = userData.password;
    var title=userData.title;
    var department=userData.department;
    var salary=userData.salary;
  var sql = "INSERT INTO users ( username,email,role, password, title, department,salary) VALUES ( '"+userName+"', '"+email+"','"+role+"', '"+password+"', '"+title+"', '"+department+"', '"+salary+"' )";
  connection.query( sql , (err, rows, fields) => {
    if (err) {
      console.log(err);
      return res.status(500).send( {'error' :'Sorry username does not exits'} );
    } else {

      return res.status(200).send( {'success' :' '} );
    }
  })
});
///////////////

router.delete('/delete/:id',function (req, res) {

    let userData = req.body;
      console.log(userData);
      var id=req.params.id;
      var userName = userData.username;
      var email=userData.email;
      var role=userData.role;
      var password = userData.password;
      var title=userData.title;
      var department=userData.department;
      var salary=userData.salary;
   console.log(req.body);
   connection.query("DELETE FROM `users` WHERE id=?", [req.params.id], function (err, rows, fields) {
	  if (err) throw error;
    else{
    console.log(rows);
	  res.send('Record has been deleted!');
}
  });
})














module.exports = router;
