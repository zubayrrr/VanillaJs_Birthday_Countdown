const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2021, 1, 7, 12, 01, 0);

const year = futureDate.getFullYear();
const day = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

let weekday = futureDate.getDay();

giveaway.textContent = `Birthday on ${weekdays[weekday]}, ${day}, ${month}, ${year} | ${hours}:${minutes}`;

// countero
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // vaues in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // calculating all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / oneSecond);

  // set values

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, i) {
    item.innerHTML = format(values[i]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h2 class="expired>Yay! Happy 22nd Birthday.</h2>`;
  }
}

// countdown events
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
