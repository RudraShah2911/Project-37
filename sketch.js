var canvas, gamestate, contestantCount, database, quiz, question, contestant
    gamestate = 0
var allcontestants


function setup(){
  canvas = createCanvas(850,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if (contestantCount === 4){
    quiz.update(1)
  }

  if (gamestate === 1){
    clear()
    quiz.play()
  }

  
}
