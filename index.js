// ______Code_Attribution______
// The following lines of code  was implemented from Youtube.com
// Author: Codec
// Link: https://www.youtube.com/watch?v=tIV90xQ0k6A

var express = require("express")
var app = express();
var connection = require('./database')

app.get('/', function(req, res){
    let sql = "SELECT * FROM log_info ORDER BY dateTime DESC LIMIT 100";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    })
})

app.listen(3000, function(){
    console.log('App Listening on port 3000');  
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connected!')
    })
});
// ______end______