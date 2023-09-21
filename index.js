let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let win = document.querySelector(".win");
let winner = document.querySelector(".winner");
console.log(computer);
let play = document.querySelector(".play");
let random = Math.floor(Math.random() * 3);
let spy_score = JSON.parse(localStorage.getItem("scy"));
let spy_scoreElem = document.getElementById("spy_score");
let sp_score = JSON.parse(localStorage.getItem("sc"));
let sp_scoreElem = document.getElementById("sp_score");
if (sp_score) {
  sp_scoreElem.innerText = sp_score;
}
if (spy_score) {
  spy_scoreElem.innerText = spy_score;
}
let count = 0;
con.forEach((element, index) => {
  element.addEventListener("click", () => {
    user.style.opacity = "1";
    con.forEach((item) => {
      item.style.display = "none";
    });
    element.style.display = "block";
    element.classList.add("show");
    setTimeout(() => {
      machine.style.opacity = "1";
      setTimeout(() => {
        computer[random].style.display = "block";
        computer[random].classList.add("right");
      }, 1000);
    }, 500);

    setTimeout(() => {
      if (random == index) {
        win.style.display = "grid";
        winner.innerText = "TIE UP";
      } else if (
        (index == 0 && random == 2) ||
        (index == 1 && random == 0) ||
        (index == 2 && random == 1)
      ) {
        win.style.display = "grid";
        winner.innerText = "YOU WIN";
        count = spy_score;
        count++;
        spy_scoreElem.innerText = count;
        localStorage.setItem("scy", JSON.stringify(count));
      } else {
        win.style.display = "grid";
        winner.innerText = "YOU LOST";
        count = sp_score;
        count++;
        sp_scoreElem.innerText = count;
        localStorage.setItem("sc", JSON.stringify(count));
      }
    }, 1500);
  });
});

play.addEventListener("click", () => {
  window.location.reload();
});
