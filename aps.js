var yScore = 0;
var cScore = 0;
const title = document.createElement("h1");
const container = document.getElementById("container");
const yourScoreDisplay = document.createElement("div");
const computerScoreDisplay = document.createElement("div");
const userScore = document.createElement("p");
const computerScore = document.createElement("p");
const button = document.createElement("button");
const resultDisplay = document.createElement("div"); 
const choices = ['rock','paper','scissors'];
let userChoice;
let compuChoice;

container.append(title, yourScoreDisplay,computerScoreDisplay,resultDisplay);

    for(var j=0; j<choices.length; j++){
        const button = document.createElement("button");
        button.id = choices[j];
        button.innerText = choices[j];
        container.appendChild(button);
        button.style.padding = "10px";
        button.style.margin = "auto 10px";
        button.style.position = "relative";
        button.style.left = "0";
        button.style.width = "70px";
        button.style.top = "-20%";
        button.style.backgroundColor = "grey";
        button.style.color = "red";
        button.style.border = "none";
        button.style.cursor = "pointer";
    
        button.addEventListener("click", (e)=>{
        userChoice = e.target.id;
        const randomNumber = Math.floor(Math.random() * choices.length);
        compuChoice = choices[randomNumber];

            switch (userChoice + compuChoice) {
                case "rockrock":
                case "paperpaper":
                case "scissorsscissors":
                yScore++;
                cScore++;
                userScore.innerHTML = yScore;
                computerScore.innerHTML = cScore;
                resultDisplay.innerText = `It's a tie!`;
                    break;

                case "rockpaper":
                case "scissorsrock":
                case "paperscissors":
                cScore+= 3;
                yScore--;
                computerScore.innerHTML = cScore;
                resultDisplay.innerText = `You lose`;
                    break;
                
                case "paperrock":
                case "rockscissors":
                case "scissorspaper":
                yScore+= 3;
                cScore--;
                userScore.innerHTML = yScore;
                resultDisplay.innerText = `You win`;
                    break;
            };

            finalResult.innerHTML = "Final Outcome:";
            
        });
    };


const finalResult = document.createElement("h4");
container.appendChild(finalResult);
finalResult.innerHTML = `Final Outcome: `;
finalResult.style.margin = "auto";
finalResult.style.textAlign = "center"; 
finalResult.style.position = "absolute";
finalResult.style.bottom = "45px";
finalResult.style.color = "magenta";


const myButton = document.createElement("button");
container.appendChild(myButton);
myButton.innerHTML = "Resume";
myButton.style.position = "absolute";
myButton.style.bottom = "80px";
myButton.style.left = "150px";
myButton.style.border = "none";
myButton.style.padding = "10px"
myButton.style.backgroundColor = "magenta";
myButton.style.display = "none";
myButton.style.cursor = "pointer";

const timer = document.createElement('h6');
container.appendChild(timer);
timer.style.position = "absolute";
timer.style.top = "100px";
timer.style.left = "150px";
timer.style.color = "red";
setInterval(() => {
    let distance = new Date().getTime();
    let S = Math.floor((distance % (1000*70))/(1000));
    timer.innerText = `Timer: ${S}`;
    if(S >= 65 && cScore > yScore){
    button.style.display = "none";
    timer.style.display = "none";
    myButton.style.display = "block";
    finalResult.innerHTML = "Game is Over!, You lost!"
    resultDisplay.innerHTML = "";
    
    }
     if((S >= 65 && cScore < yScore)){
        computerScore.innerHTML = cScore;
        userScore.innerHTML = yScore;
        button.style.display = "none";
        timer.style.display = "none";
        myButton.style.display = "block"
        resultDisplay.innerHTML = "";
        finalResult.innerHTML = "Game is over You won!";
    }
    
    
     
}, 1000);

myButton.onclick = ()=>{
    resultDisplay.style.display = "block";
    userScore.innerHTML = `${yScore = 0}`;
    computerScore.innerHTML = `${cScore = 0}`;
    finalResult.innerHTML = "Final Outcome:";
    timer.style.display = "block";
    myButton.style.display = "none";
    button.style.display = "block";
}

resultDisplay.style.position = "absolute";
resultDisplay.style.top = "60%";
resultDisplay.style.marginTop = "20px";



container.appendChild(computerScore);
computerScore.style.color = "red";
computerScore.innerHTML = cScore
computerScore.style.float = "right";
computerScore.style.position = "absolute";
computerScore.style.right = "26%";
computerScore.style.marginTop = "85px";

container.appendChild(userScore);
userScore.style.color = "red";
userScore.style.float = "right";
userScore.innerHTML = "0";
userScore.style.position = "absolute";
userScore.style.left = "15%";
userScore.style.marginTop = "85px";


computerScoreDisplay.innerHTML = "Computer ScoreBoard : ";
computerScoreDisplay.style.marginRight = "80px";
computerScoreDisplay.style.float = "right";
computerScoreDisplay.style.fontSize = "18px";
computerScoreDisplay.style.marginTop = "20px";
computerScoreDisplay.style.position = "absolute";
computerScoreDisplay.style.right = "-12%";


yourScoreDisplay.innerHTML = "Your ScoreBoard : ";
yourScoreDisplay.style.marginLeft = "10px";
yourScoreDisplay.style.float = "left";
yourScoreDisplay.style.fontSize = "18px";
yourScoreDisplay.style.marginTop = "25px";
yourScoreDisplay.style.position = "absolute";
yourScoreDisplay.style.right = "62%";

title.style.textAlign = "center";
title.style.fontSize = "20px";
title.style.marginTop = "-40px";
title.style.position = "absolute";
title.style.top = "20%";
title.style.color = "darkblue";
title.innerHTML = "ROCK, PAPER & SCISSORS GAME";

container.style.backgroundColor = "aqua";
container.style.width = "80%";
container.style.height = "50vh";
container.style.position = "relative";
container.style.margin = "auto";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.flexDirection = "row";

