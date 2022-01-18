randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
let temp1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", temp1);

randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
let temp2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", temp2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player-1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player-2 Win 🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
}
