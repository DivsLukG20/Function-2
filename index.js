// ______Code_Attribution______
// The following lines of code  was implemented from Youtube.com
// Author: Codec
// Link: https://www.youtube.com/watch?v=tIV90xQ0k6A

// Imports for the required modules such as express framework, express application and the database connection. 
var express = require("express")
var app = express();
var connection = require('./database')

// Define a GET endpoint for the root path.
app.get('/', function(req, res){
    // SQL query to select the most recent 100 log entries ordered by dateTime.
    let sql = "SELECT * FROM log_info ORDER BY dateTime DESC LIMIT 100";
    // Handle any errors that occur during the query.
    connection.query(sql, function(err, results){
        if (err) throw err;
        // Send the results back to the client.
        res.send(results);
    })
})

// Start the server and listen on port 3000. 
app.listen(3000, function(){
    console.log('App Listening on port 3000');  
    // Connect to the database.
    connection.connect(function(err){
        // Handle any connection errors. 
        if(err) throw err;
        console.log('Database connected!')
    })
});

// ______end______