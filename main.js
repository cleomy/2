const btn = document.getElementById("Btn");
const result = document.getElementById("Result")
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");

btn.addEventListener('click', function() {
    const player1 = Math.floor(Math.random() * 6) + 1; //Generating random number from 1 to 6 
    const player1Dice = `dice${player1}.png`;
    document.getElementById("img2").setAttribute('src', player1Dice);
    const player2 = Math.floor(Math.random() * 6) + 1;
    const player2Dice = `dice${player2}.png`;
    document.getElementById("img2").setAttribute('src', player2Dice);
    let result1 = parseInt(score1.value); //Converting string to decimal by using parseInt
    score = player1 + result1;
    score1.setAttribute('value', `${score}`);
    let result2 = parseInt(score2.value); //Converting string to decimal by using parseInt
    score4 = player2 + result2;
    score2.setAttribute('value', `${score4}`);
    console.log(score1.value);


});