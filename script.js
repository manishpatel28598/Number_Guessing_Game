let num = parseInt(Math.random()*100+1);//generating a random number between 1 and 100

const userinput = document.querySelector('#guessField');//select user input and put it in a variable
const submitbtn = document.querySelector('#subt'); //select submit button and put it in a variable
const guessArr = document.querySelector('.Guesses'); //select previous guesses 
const remaining = document.querySelector('.Lastresult'); // select the remaing guesses
const LowOrHi = document.querySelector('.loworhi'); // select low or high value
const startOver = document.querySelector('.resultParas'); //select result parameters div to reset the values when game will restart


let p = document.createElement('p') // create a para tag to show the "start game button"


let prevGuess = []; //create an array to store the all 10 guesssed values to show on the ui

let numGuess = 1; //initialize the numGuess

let playGame = true;

if(playGame){
    submitbtn.addEventListener('click',function(e){
        e.preventDefault();
       const guess =  parseInt(userinput.value)
       console.log(guess);
       validateGuess(guess);
    })
}

function validateGuess(guess){
//validate the number between 1 to 100
if(isNaN(guess)){
    alert('Please enter a valid number');
}
else if(guess<1){
    alert('Please enter a umber greater than 1');
}
else if(guess>100){
    alert('Please enter a number less than 100');
}
else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${" "+num}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}

function checkGuess(guess){
if(guess===num){
displayMessage('you guessed it right')
endGame();
}
else if(guess<num){
    displayMessage('Number is Low')
}
else if(guess>num){
    displayMessage('Number is High')
}
}

function displayGuess(guess){

userinput.value = ''
guessArr.innerHTML+=`${guess+" , "}`
numGuess++;
remaining.innerHTML = `${12-numGuess}`


}
function displayMessage(message){
LowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userinput.value =''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){

        num = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessArr.innerHTML = ''
        remaining.innerHTML = `${12-numGuess}`
        userinput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}



