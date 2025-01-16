//Generate Dice Roll Sound upon button click
document.getElementById("rollDice").addEventListener("click", function() {
    var audio = new Audio("audio/DiceSound.mp3");
    audio.play();

        // Delay reload for 0.6 seconds after the sound finishes
        setTimeout(function() {
            location.reload();
        }, 600);
});



//Generating random numbers
let randomNo1 = Math.floor(Math.random() * 6) + 1;
let randomNo2 = Math.floor(Math.random() * 6) + 1;

//Changing the dice image as per generated random number
document.getElementById("img1").setAttribute("src", "images/dice"+randomNo1+".png");
document.getElementById("img2").setAttribute("src", "images/dice"+randomNo2+".png");

//Deciding which play won / draw.
if(randomNo1 > randomNo2) {
    document.getElementById("TopHeader").innerHTML= "Player 1 Won!";
} else if(randomNo1 === randomNo2) {
    document.getElementById("TopHeader").innerHTML= "Draw...";
} else {
    document.getElementById("TopHeader").innerHTML = "Player 2 Won!";
}