#!/usr/bin/node

const mysql=require('mysql');

const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'ddd',
  database:'test'
});

con.connect();

//opteration db
const sql='selete *from books where book_id=?';
con.query(sql,[100],function(err,result){
  if(err){
    console.log(err);
    process.exit(100);
  }
  console.log(result);
});
con.query();
con.end();
