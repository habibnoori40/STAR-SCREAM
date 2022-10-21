let otherLinks = document.getElementById("otherLinks");
let megaMenu = document.querySelector(".mega-menu");
let closeBtn = document.getElementById("closeBtn");
/* --------------------------------------------------------- */
let ourSkills_section = document.querySelector(".our-skills");
let squareSpan = document.querySelectorAll(".skills .skill [data-goal]");
let progressSpan = document.querySelectorAll(".skills .skill .progress span");
let startProgress = false;
/* ------------------------------------------------------------ */
let statistics = document.querySelector(".our-stats");
let statisticsSpan = document.querySelectorAll(".our-stats .box [data-goal]");
let startStatistics = false;

// For Closing And Opening The Mega-Menu
document.body.children[1].addEventListener("click", disable);
otherLinks.addEventListener("click", enable);
closeBtn.addEventListener("click", disable);

function enable() {
  megaMenu.style.cssText = "opacity: 1; visibility: visible;";
}

function disable() {
  megaMenu.style.cssText = "opacity: 0; visibility: hidden;";
}

// For Increasing Numbers on Window Scroll For Statistics And Skills
window.addEventListener("scroll", statisticsOffsetTop);
window.addEventListener("scroll", skillsOffsetTop);

function skillsOffsetTop() {
  if (this.scrollY >= ourSkills_section.offsetTop) {
    if (!startProgress) {
      progressSpan.forEach((span, index) => {
        span.style.width = span.dataset.width;

        startCount(squareSpan[index]);
      });
    }

    startProgress = true;
  }
}

function statisticsOffsetTop() {
  if (this.scrollY >= statistics.offsetTop - 500) {
    if (!startStatistics) {
      statisticsSpan.forEach((span) => {
        startCount(span);
      });
    }

    startStatistics = true;
  }
}

function startCount(element) {
  let countGoal = element.dataset.goal;

  let count = setInterval(() => {
    element.textContent++;

    if (element.textContent == countGoal) {
      clearInterval(count);
    }
  }, 2000 / countGoal);
}

// For CountDown Timer
let countDownDate = new Date(2023, 9, 21, 6, 58, 58);

let countDownTimer = setInterval(() => {
  let nowDate = new Date();
  let timeDiff = countDownDate - nowDate;

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.querySelector(".evants [data-days]").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".evants [data-hours]").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".evants [data-minutes]").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".evants [data-seconds]").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (timeDiff <= 0) {
    clearInterval(countDownTimer);
  }
}, 1000);

// For To-Top Button
let scrolltoTop = document.querySelector("body .scroll");

window.onscroll = function () {
  if (this.scrollY >= 1500) {
    scrolltoTop.style.cssText =
      "opacity: 1; visibility: visible; width: 40px; height: 40px;";
  } else {
    scrolltoTop.style.cssText = "opacity: 0; visibility: hidden;";
  }
};
