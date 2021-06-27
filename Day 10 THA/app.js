const section = document.querySelector("section");
var icons = ["apple", "google", "facebook", "discord", "amazon", "github"];
icons = [...icons, ...icons];
console.log(icons);
var state = "over";
const start = document.querySelector(".start");
var first = null;
var second = null;
var score = 0;
var timer = null;
start.addEventListener("click", play);
const dialog = document.querySelector(".result");
const restart = document.querySelector(".restart");
const close = document.querySelector(".close");

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var i = 0;
function insertCard(state) {
  section.innerHTML = "";
  shuffleArray(icons);
  Array.from(icons).forEach((icon) => {
    i++;
    const card = document.createElement("div");
    card.className = "card " + icon + " turn";
    if (state == "play") {
      card.addEventListener("click", () => {
        if (first == null) {
          first = card;
          first.classList.add("turn");
        } else if (first != card && second == null) {
          second = card;
          second.classList.add("turn");
          console.log(first.className == second.className);
          if (first.className == second.className) {
            score++;
            setTimeout(() => {
              first.style.visibility = "hidden";
              second.style.visibility = "hidden";
              first = null;
              second = null;
              if (score == icons.length / 2) {
                endGame("Won");
              }
            }, 500);
          } else {
            setTimeout(() => {
              first.classList.remove("turn");
              second.classList.remove("turn");
              first = null;
              second = null;
            }, 500);
          }
        }
      });
    }
    section.append(card);
    setTimeout(() => {
      card.classList.toggle("turn");
    }, i * 50);
  });
}
insertCard("over");

function play() {
  dialog.style.display = "none";
  if (state == "over") {
    state = "play";
    i = 0;
    insertCard(state);
    first = null;
    second = null;
    score = 0;
    let time = 30;
    timer = setInterval(() => {
      start.innerHTML = time;
      time--;
      if (time == -1) {
        endGame("Lost");
      }
    }, 1000);
  }
}

restart.addEventListener("click", play);
close.addEventListener("click", () => {
  dialog.style.display = "none";
});
function endGame(result) {
  insertCard("over");
  clearInterval(timer);
  start.innerHTML = "RESTART";
  document.querySelector(".title").innerHTML = 'You ${result}';
  dialog.style.display = "flex";
  state = "over";
}