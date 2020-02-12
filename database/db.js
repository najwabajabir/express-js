//db
const mysql = require('mysql');

//connection
const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'latihan_13'
})

// export

module.exports = connection;