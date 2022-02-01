
var gameChar = "1";
var bomb = "B";

var fields = [];

var score = 0;
var lostGame = false;

function loadMap() {

    loadRandomField();

    for(var i=0; i<300; i++){
    if((i%20) == 0)
    document.getElementById("GameContener").innerHTML += "<div style='clear:both;'>";

    document.getElementById("GameContener").innerHTML += "<div class='field' id='fi"+i+"' onclick='checkField("+i+")'>+</div>";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadMap();
});

function loadRandomField()
{
    for(var i=0; i<300; i++)
      fields.push(getRandomField());
}

function getRandomField()
{
    let rand = Math.floor(Math.random() * 5)+1;

    if(rand <= 4)
      return gameChar;
    else 
      return bomb;
}

function checkField(number)
{
    if(lostGame) return;

    if(fields[number] == "1") {
    document.getElementById("fi"+number).innerHTML = "<span style='color: green'>"+fields[number]+"</span>";

    score++;
    document.getElementById("Counter").innerHTML = "Score: " + score;
    }
    else if(fields[number] == "B") {
    document.getElementById("fi"+number).innerHTML = "<span style='color: red'>"+fields[number]+"</span>";
    lostGame = !lostGame;

    document.getElementById("Menu").innerHTML += "<span style='color: #720800'><p> PRZEGRANA! Musisz zacząć od nowa.</p></span>";
    }
}
