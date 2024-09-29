// ______Code_Attribution______
// The following lines of code  was implemented from Youtube.com
// Author: Codec
// Link: https://www.youtube.com/watch?v=tIV90xQ0k6A

var mysql = require("mysql2");

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    database: 'log_queries',
    user: 'root',
    password: '@dvtech123!'
});

module.exports = connection; 

// ______end______