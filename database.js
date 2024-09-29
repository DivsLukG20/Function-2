// ______Code_Attribution______
// The following lines of code  was implemented from Youtube.com
// Author: Codec
// Link: https://www.youtube.com/watch?v=tIV90xQ0k6A

// Import the mysql module for creating MySQL connections.
var mysql = require("mysql2");

// Create a connection to the MySQL database.
var connection = mysql.createConnection({
    host: 'localhost', // The hostname of the MySQL server.
    port: '3307', // The port number on which the MySQL server is listening.
    database: 'log_queries', // The name of the database to connect to.
    user: 'root', // The username for authentication.
    password: '@dvtech123!' // The password for the user authentication. 
});

// Export the connection object for use in other modules. 
module.exports = connection; 

// ______end______