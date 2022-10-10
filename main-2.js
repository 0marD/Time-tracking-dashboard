let response = await fetch("./data.json");
let data = await response.json();

let secondSection = document.querySelector(".section--secondary");

let bgColors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

let dailyArray = data.map((item) => item.timeframes.daily);
let weeklyArray = data.map((item) => item.timeframes.weekly);
let monthlyArray = data.map((item) => item.timeframes.monthly);

let dailyBtn = document.querySelector("#daily");
let weeklyBtn = document.querySelector("#weekly");
let monthlyBtn = document.querySelector("#monthly");

drawElements(weeklyArray);

dailyBtn.addEventListener("click", () => {
  drawElements(dailyArray);
});

weeklyBtn.addEventListener("click", () => {
  drawElements(weeklyArray);
});

monthlyBtn.addEventListener("click", () => {
  drawElements(monthlyArray);
});

function drawElements(array) {
  secondSection.innerHTML = " ";
  array.forEach((element, index) => {
    let title = data[index].title;
    let titleLowerCase = title.toLocaleLowerCase();

    if (titleLowerCase == "self care") {
      titleLowerCase = "self-care";
    }

    secondSection.innerHTML += `<section class="card" style="background-color:${bgColors[index]};">
      <div class="card__background">
        <img src="./images/icon-${titleLowerCase}.svg" alt="Background" class="card__background__image">
      </div>
      <div class="card__details">
        <div class="card__details__top">
          <p class="card__details__top__activity">${title}</p>
          <img src="./images/icon-ellipsis.svg" alt="icon" class="card__details__top__option">
        </div>
        <div class="card__details__bottom">
          <p class="card__details__bottom__hours">${element.current}hrs</p>
          <p class="card__details__bottom__date">Previous - ${element.previous}hours</p>
        </div>
      </div>
    </section> `;
  });
}

("use strict");

const tabs = document.querySelectorAll(".card__main__dates__frequency");

tabs.forEach((eachTab, i) => {
  tabs[i].addEventListener("click", () => {
    tabs.forEach((eachTab, i) => {
      tabs[i].classList.remove("card__main__dates__frequency--active");
    });

    tabs[i].classList.add("card__main__dates__frequency--active");
  });
});
