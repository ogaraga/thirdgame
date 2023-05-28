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
        button.style.top = "-25%";
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
finalResult.style.bottom = "40px";
finalResult.style.color = "magenta";


const myButton = document.createElement("button");
container.appendChild(myButton);
myButton.innerHTML = "Resume";
myButton.style.position = "absolute";
myButton.style.left = "50%";
myButton.style.border = "none";
myButton.style.padding = "10px";
myButton.style.backgroundColor = "magenta";
// myButton.style.display = "none";
myButton.style.cursor = "pointer";
myButton.style.right = "50%";
myButton.style.margin = "-10%";
myButton.style.position = "absolute";
myButton.style.top = "400px";
myButton.style.width = "70px";
myButton.style.height = "auto";
myButton.style.textAlign = "center";

const timer = document.createElement('h6');
container.appendChild(timer);
timer.style.position = "absolute";
timer.style.top = "170px";
timer.style.left = "45%";
timer.style.rigt = "50%";
timer.style.color = "red";
setInterval(() => {
    let dist_1 = new Date("29 May, 2080 7:03:56").getTime();
    let dist_2 = new Date().getTime();
    let distance = dist_1 - dist_2;
    let S = Math.floor((distance % (1000*60))/(1000));
    timer.innerText = `Timer: ${S}`;
    if(S === 0 && cScore > yScore){
    button.style.display = "none";
    timer.style.display = "none";
    myButton.style.display = "block";
    finalResult.innerHTML = "Game is Over!, You lost!"
    resultDisplay.innerHTML = "";
    
    }
     if((S === 0 && cScore < yScore)){
        computerScore.innerHTML = cScore;
        userScore.innerHTML = yScore;
        button.style.display = "none";
        timer.style.display = "none";
        myButton.style.display = "block"
        resultDisplay.innerHTML = "";
        finalResult.innerHTML = "Game is over You won!";
    }
    if(S === 0 && cScore === yScore){
        computerScore.innerHTML = cScore;
        userScore.innerHTML = yScore;
        button.style.display = "none";
        timer.style.display = "none";
        myButton.style.display = "block"
        resultDisplay.innerHTML = "";
        finalResult.innerHTML = "Game is over It's a draw!"
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
computerScore.innerHTML = cScore;
computerScore.style.top = "105px";
computerScore.style.position = "absolute";
computerScore.style.right = "35%";
computerScore.style.marginTop = "130px";

container.appendChild(userScore);
userScore.style.color = "red";
userScore.style.top = "105px";
userScore.innerHTML = yScore;
userScore.style.position = "absolute";
userScore.style.left = "30%";
userScore.style.marginTop = "130px";


computerScoreDisplay.innerHTML = "Computer ScoreBoard : ";
computerScoreDisplay.style.marginLeft = "80px";
computerScoreDisplay.style.fontSize = "18px";
computerScoreDisplay.style.marginTop = "30px";
computerScoreDisplay.style.position = "absolute";
computerScoreDisplay.style.left = "45%";
computerScoreDisplay.style.top = "170px";


yourScoreDisplay.innerHTML = "Your ScoreBoard : ";
yourScoreDisplay.style.marginTop = "30px";
yourScoreDisplay.style.fontSize = "18px";
yourScoreDisplay.style.top = "170px";
yourScoreDisplay.style.position = "absolute";
yourScoreDisplay.style.right = "52%";
computerScoreDisplay.style.marginLeft = "70px";

title.style.textAlign = "center";
title.style.fontSize = "20px";
title.style.marginTop = "-20px";
title.style.position = "absolute";
title.style.top = "10%";
title.style.color = "darkblue";
title.innerHTML = "ROCK, PAPER & SCISSORS GAME";

container.style.backgroundColor = "aqua";
container.style.width = "90%";
container.style.height = "70vh";
container.style.position = "relative";
container.style.margin = "50px auto";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.flexDirection = "row";
// container.style.padding = "20px";

