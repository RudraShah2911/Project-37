class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gamestate');
      gameStateRef.on("value",function(data){
         gamestate = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });
    }
  
    async start(){
      if(gamestate === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Questions()
        question.display();
     }
   }

   play(){
       Contestant.getcontestantInfo()
       if (allcontestants !== undefined){
           var y = 230
        for (var plr in allcontestants){
            var correctAns = "2"
            if (correctAns === allcontestants[plr].answer){
               fill("green")
            }
            else{
                fill("red")
            }
            textSize(20)
            text(allcontestants[plr].name + " : " + allcontestants[plr].answer, 200, y)
            y = y + 50
         }  
       }    
     }
 }  

