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
const addaccount=function(body,callback){
  const sql = 'INSERT INTO login SET ?';
  connection.query(sql,body,(err,results) => {
    callback(err,results)
  })
}

// const enter=function(body,callback){
//   const sql = 'SELECT * FROM login WHERE name = ?'
//   connection.query(sql, [name], async function(err, results) {
//     callback(err,results)
//   })
// }



module.exports = {addaccount,connection};
