var canvas, database, quiz
var question
var gameState = 0 
var contestantCount
var allContestants
var answer
var contestant 

function setup(){
database = firebase.database()
// or db = firebase.database()
canvas = createCanvas(850,400)
quiz = new Quiz()
quiz.getState()
quiz.start()
}

function draw(){
background("lightblue")
if(contestantCount === 2){
    quiz.update(1)
}
if(gameState === 1){
    quiz.play()
}
}