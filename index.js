var readlineSync=require("readline-sync")
const chalk = require('chalk');

var username=readlineSync.question("wts your name?")

var score=0

console.log(chalk.yellowBright("welcome "+ username ))


console.log(chalk.yellow("\nRULES:\n1>This quiz contains 10 questions about MARVEL\n2>If you answer the four questions of LEVEL 1 correctly then you will enter to the LEVEL 2,Where you will face 6 questions\n3>Answer the questions just by entering the options only\n"))


var highscores={
  name:"khizer",
  score:"6"
}


  function play(question,answer){
    var useranswer=readlineSync.question(question)

      if(useranswer===answer)
      {
        console.log(chalk.green("\nright"))
        score+=1
      }
      else
      {
        console.log(chalk.red("\nwrong"))
      }
    console.log("current score "+chalk.green(score)+"\n");
  }



var q1={
  question:"who is the strongest avenger?\noptions:\na)Hulk\nb)Captain marvel\nc)Thor\nd)Salman khan\n",
  answer:"b"
}

var q2={
  question:"who is called as god of mischief?\noptions:\na)Flying jatt\nb)Loki\nc)Doctor Strange\nd)Antman\n",
  answer:"b"
}

var q3={
 question:"where does black panther live?\noptions:\na)New York\nb)Sokovia\nc)Andheri\nd)Wakanda\n",
  answer:"d"
}
var q4={
  question:"Who dubbed the groot voice?\noptions:\na)john cena\nb)rock\nc)zac efron\nd)vin diesel\n",
  answer:"d"
}
var q5={
  question:"who is called as white wolf in MCU?\noptions:\na)winter soldier\nb)Captain marvel\nc)captain america\nd)spider man\n",
  answer:"a"
}
var q6={
  question:"who is the new captain america now?\noptions:\na)winter soldier\nb)black widow\nc)falcon\nd)starlord\n",
  answer:"c"
}
var q7={
  question:"who is the magician in MCU?\noptions:\na)Bruce\nb)Ant-man\nc)Doctor strange\nd)tony stark\n",
  answer:"c"
}
var q8={
  question:"How many episode does 'falcon and winter soldier' has?\noptions:\na)5\nb)6\nc)7\nd)8\n",
  answer:"b"
}
var q9={
  question:"which role batishta is playing in MCU?\noptions:\na)Rocket\nb)Groot\nc)Drax\nd)Loki\n",
  answer:"c"
}
var q10={
  question:"Who gives the voiceover for Rocket character?\noptions:\na)Christian bale\nb)Brad pitt\nc)Bradly Cooper\nd)Leonardo\n",
  answer:"c"
}

var questions_1=[q1,q2,q3,q4]
var questions_2=[q5,q6,q7,q8,q9,q10]


// for level 1
console.log(chalk.cyan("welcome to the LEVEL 1 of the marvel fandom quiz\n"))
for(var i=0;i<questions_1.length;i++){
  var currentquestion=questions_1[i];
  play(currentquestion.question,currentquestion.answer)
}


// for level 2
if(score>=4){
  console.log(chalk.greenBright(`\ngood job your score is now ${score}\nNow you have entered LEVEL 2`))
  for(var i=0;i<questions_2.length;i++){
  var currentquestion=questions_2[i];
  play(currentquestion.question,currentquestion.answer)
}
}


// if level 1 lose
else{
  console.log(chalk.bold.red("\nSorry you couldn't made upto next LEVEL\n\nBetter luck next time\n"))
}

// if score is greater than highscore
console.log("your final score is:",score)
if(highscores.score<score){
  console.log("\nprevious highscore was:",highscores.score)
  console.log("congrats,"+chalk.yellowBright(username)+" beated the highscore")
  console.log("Now highscore is:",score)
}

// if score is less than highscore
else{
  console.log("you did not beated highscore\nThe highscore was:",highscores.score)
}