const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '123456',
  database: 'coderhub'
});

// 预处理语句优点:
// 1. 防止SQL注入
// 2. 提高性能
const statement = 'SELECT * FROM `user` WHERE name = ?'
connection.execute(statement, ['chenshiyan'], (err, values, fields) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(values);
  console.log('fields: ', fields);
})