const mysql = require('mysql');
var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'fordfocus02',
    database : 'premier_league' 
});
con.connect(function(err){
    if(err) throw err;
    console.log(err);
});

exports.getFixtures = function(callback){
    con.query(`SELECT team1.name homeTeam, team2.name awayTeam, date, homeTeamGoals, awayTeamGoals 
    FROM fixtures
    JOIN team team1 ON fixtures.homeTeamId = team1.id
    JOIN team team2 ON fixtures.awayTeamId = team2.id;`, 
    function(error, rows){
        if(error) throw error
        callback(rows);
    })
}

exports.getTeams = function(callback){
    con.query("select * from team", function(error, rows){
        if(error) throw error
        callback(rows);
    })
}
