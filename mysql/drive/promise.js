const mysql = require('mysql2');

const connectionPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '123456',
  database: 'coderhub',
  connectionLimit: 5,
});

// 预处理语句优点:
// 1. 防止SQL注入
// 2. 提高性能
const statement = 'SELECT * FROM `user` WHERE name = ?'
connectionPool.promise().execute(statement, ['chenshiyan']).then(([values, fields]) => {
  console.log(values);
  console.log('fields: ', fields);
})