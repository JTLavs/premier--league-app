const express = require('express');
const db = require('./db')

var app = express();

app.use(express.json());

app.listen(3000, function(){
    console.log('server started');
});

var teams = [];
var fixtures = [];

function updateFixtures(ready){
    db.getFixtures(function(rows){
        fixtures = rows;
        ready();
    })
}

app.get('/teams', (req, res)=>{
    db.getTeams(function(rows){
        teams = rows;
        res.send(teams);
    })
    
})

app.get('/fixtures', (req, res)=>{
    updateFixtures(function(){
        res.send(fixtures);
    })
})