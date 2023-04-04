var ran1 = Math.floor(Math.random()*6)+1;

var ranDiceImg = "dice" + ran1+".png";

var imgSource = "img/" +ranDiceImg;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",imgSource);

var ran2 = Math.floor(Math.random()*6)+1;

var ranDiceImg2 = "dice" + ran2+".png";

var imgSource2 = "img/" +ranDiceImg2;

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",imgSource2);


if (ran1 > ran2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (ran2 > ran1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }