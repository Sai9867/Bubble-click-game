const tick = new Audio("tap.wav");
const win = new Audio("win.wav");
let hitnumber;

let timer = 60;
let timerint;
let score = 0;


function bubblemaker(){
  let clutter ="";
for( let i = 0; i<168; i++){
  let num = Math.floor((Math.random()*10))
  clutter = clutter + `<div class="bubble">${num}</div>`
}

document.querySelector("#panelbtm").innerHTML = clutter;
}


function runtimer(){
  timerint = setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector("#timeval").textContent = timer
    }
    else{
      clearInterval(timerint);
      document.querySelector("#panelbtm").innerHTML= `<h1 id=panelbtm>Game Over</h1>`;
      win.play();

    }
  },1000)

}

function hitnum(){
  hitnumber = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hitnumber;

}
function mainpart() {
  document.querySelector("#panelbtm").addEventListener("click", function (details) {
    if (details.target.classList.contains("bubble")) {
      let scoreint = Number(details.target.textContent);
      if (scoreint === hitnumber) {
        tick.pause();
        tick.currentTime = 0;
        tick.play();

        increasescore();
        bubblemaker();
        hitnum();
      }
    }
  });
}


function increasescore(){
  score = score + 10;
  document.querySelector("#scoreval").textContent = score;  
}

function start(){
  document.querySelector("#panelbtm").innerHTML= `<h1 id=panelbtm>Start Game</h1>`;
  document.querySelector("#startgame").addEventListener("click", function () {
    // Clear previous timer
    clearInterval(timerint);

    // Reset game state
    score = 0;
    timer = 60;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#timeval").textContent = timer;

    // Restart game
    hitnum();
    runtimer();
    bubblemaker();;

  })
}
mainpart();


start();

