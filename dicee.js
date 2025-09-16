

function gamblingAddict() {
let diceFlow= Math.random() * 6 ;
 diceFlow = Math.floor(diceFlow);
 let diceFlow2=Math.random() * 6 ;
 diceFlow2=Math.floor(diceFlow2);
let haramWork=[
    "./images/dice1.png"
    ,"./images/dice2.png"
    ,"./images/dice3.png"
    ,"./images/dice4.png"
    ,"./images/dice5.png"
    ,"./images/dice6.png"
];
let money1 =document.querySelector(".img1").setAttribute("src", haramWork[diceFlow]);
let money2 =document.querySelector(".img2").setAttribute("src", haramWork[diceFlow2]);
 if (diceFlow > diceFlow2) {
document.querySelector("h1").innerHTML="Player 1 Wins!!";  
  } else if (diceFlow < diceFlow2) {
document.querySelector("h1").innerHTML="Player 2 Wins!!";  
    } else {
document.querySelector("h1").innerHTML="Draw!!";  
    }
}
function start(){
document.querySelector("h1").innerHTML=" Start!!";  
}

start();
document.querySelector("button").addEventListener("click", gamblingAddict);
