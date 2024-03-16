class Contestant{
    constructor(){
       this.name = null
       this.index = null
       this.answer = 0 
    }
    getCount(){
        database.ref("contestantCount").on("value",(data)=>{
            contestantCount=data.val()
        })
    }
    updateCount(count){
      database.ref("/").update({
        contestantCount:count
      })
    }
    update(){
      var contestantIndex = "contestants/contestant"+this.index
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer 
      })
    }
    static getPlayerInfo(){
      database.ref("contestants").on("value",(data)=>{
          allContestants = data.val()
      })      
    }
}