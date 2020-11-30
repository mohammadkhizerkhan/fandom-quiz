var readlineSync=require("readline-sync")
const chalk = require('chalk');

var username=readlineSync.question("wts your name?")

var score=0

console.log("welcome "+ username )

var ready=readlineSync.question("Are you ready for quiz?(press 'y' for YES 'n' for NO):\n")

if( ready==="y"){

function play(question,answer){
  var useranswer=readlineSync.question(question)


  if(useranswer===answer){
    console.log(chalk.green("right"))
    score+=1
  }
  else{
    console.log(chalk.red("wrong"))

  }
    console.log("current score",score);
}
}
else{
  console.log("loser boy")
}

var q1={
  question:"which is the capital city of india?:\n",
  answer:"delhi"
}

var q2={
  question:"who is god of thunder?:\n",
  answer:"thor"
}

var q3={
  question:"where do batman live?:\n",
  answer:"gotham"
}
var q4={
  question:"who is strongest avenger?:\n",
  answer:"catain marvel"
}
var q5={
  question:"who is called as modernday ironman?:\n",
  answer:"elon musk"
}
var q6={
  question:"who is called as captain cool?:\n",
  answer:"ms dhoni"
}
var q7={
  question:"who is beast in avengers?:\n",
  answer:"hulk"
}
var q8={
  question:"who played the role of jack in titanic film?:\n",
  answer:"leonardo dicarpio"
}
var q9={
  question:"who is the creator of marvel universe?:\n",
  answer:"stan lee"
}

var questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9]

for(var i=0;i<questions.length;i++){
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}
console.log("your final score is:",score)
