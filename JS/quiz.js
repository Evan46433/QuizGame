class Quiz{
    constructor(){
    }

getState(){
var gameStateRef = database.ref("gameState")
gameStateRef.on("value",function(data){
    gameState = data.val()
})
}

update(state){
database.ref("/").update({
    gameState:state
})
}


async start(){
    if(gameState === 0){
        question = new Question()
        question.display()
        contestant = new Contestant()
        var contestantCountRef = await database.ref("contestantCount").once("value")
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val()
          contestant.getCount()
        }
    }

}

play(){
    background("yellow")
    question.hide()
    fill(0)
    textSize(30)
    text("Result of the Quiz!",350,50)
    text("-------------------",330,65)
    Contestant.getPlayerInfo()
    if(allContestants!== undefined){
        textSize(20)
        fill("blue")
        text("NOTE:Contestant who answered correct is highlighted in green colour",130,230)
        var displayPos = 230
        for(var plr in allContestants){
          var correctAns = "2"
          if(allContestants[plr].answer === correctAns){
             fill("green")
                       }
          else{
            fill("red")
            
          }
          displayPos+=30
          text(allContestants[plr].name+" : "+allContestants[plr].answer,250,displayPos)

        }
    }

}
}