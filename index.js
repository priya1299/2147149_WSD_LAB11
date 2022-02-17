const mysql= require('mysql2');
const express = require('express');
var app = express();
const parser = require('body-parser');
app.use(parser.json());
var connection=mysql.createConnection(
{
    host:'localhost',
    user:'root',
    password:'root1234',
    database:'finance_management_module'
});
connection.connect((err)=>
{
    if(!err)
    console.log('db connected');
    else
    console.log("error"); 
})
app.listen(5700,()=>
console.log('server started'));

app.get('/customers1',(req,res)=>
{
    connection.query('select * from customers1',(err,rows,fields)=>
{
    if(!err)
    res.send(rows);
    else 
    console.log('error');
});
})
app.get('/add',(request,response)=>
{
var post={cid:11,name:'Shan',addres:'meerut',phn_no:9897659877,pincode:781234};
let sql ='INSERT INTO customers1 SET ?';
var query = connection.query(sql,post,(err,rows,fields) =>
{
 if (err) throw error
//  response.send(rows)
});
});
 app .get('/update',(request,response)=>
 {
     let sql="update customers1 set addres='vikashpur' where cid = 1";
    var query = connection.query(sql,(err,rows,fields)=>
    {
    if(!err)
    // console.log('row is updated');
    response.send(rows);
    else 
    console.log('error');

    });
 
 });
//  app.get('/delete:/id'),(req,res)=>
//  {
//      var name1 ='shikha';
//      let sql ='delete from customers1 where cid = ${req.params.id}';
//      var query = connection.query(sql,(err,result)=>
//      {
//          if(err) throw error;
//          res.send('deleted rows...')
//      });
//  };



