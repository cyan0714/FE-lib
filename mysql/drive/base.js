const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '123456',
  database: 'coderhub'
});

const statement = 'SELECT * FROM `user`'
connection.query(statement, (err, values, fields) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(values);
  console.log('fields: ', fields);
})