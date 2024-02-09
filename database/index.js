// const { Sequelize } = require('sequelize')
// const mysql = require('mysql2')

// const connection = new Sequelize('socialnetwork', 'root', 'efta7 yasemsem', {
//     host:'localhost',
//     dialect:'mysql'
// })

// connection.authenticate()
// .then(()=>{
//     console.log("connection has been successfully established");
// })
// .catch((err)=>{
//     console.log(err);
// })

// module.exports = connection



const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'efta7 yasemsem',
  database: 'login'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});
// const addaccount=function(body,callback){
//   const sql = 'INSERT INTO login SET ?';
//   connection.query(sql,body,(err,results) => {
//     callback(err,results)
//   })
// }
const addaccount = function (body, callback) {
  const { name, email } = body;
  connection.query('SELECT * FROM login WHERE email = ? OR name = ?', [email, name], (err, results) => {
    if (err) {
      callback(err);
    } else {
      if (results.length > 0) {
        callback("User with the same email or name already exists");
      } else {
        const sql = 'INSERT INTO login SET ?';
        connection.query(sql, body, (err, results) => {
          callback(err, results);
        });
      }
    }
  });
}

// const enter=function(body,callback){
//   const sql = 'SELECT * FROM login WHERE name = ?'
//   connection.query(sql, [name], async function(err, results) {
//     callback(err,results)
//   })
// }
const getall=function(callback){
  const sql ='SELECT * FROM login'
  connection.query(sql,(err, results) => {
    callback(err, results)
})
}

const remove =function(idlogin,callback){
  const sql ='DELETE FROM `login` where `idlogin`='+idlogin
  connection.query(sql,(err, results) => {
    callback(err, results)
})
}



module.exports = {addaccount,getall,remove,connection};
