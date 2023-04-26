const daysTemp = document.querySelector('.days');
const hoursTemp = document.querySelector('.hours');
const minTemp = document.querySelector('.minutes');
const secondsTemp = document.querySelector('.seconds');
console.log(hoursTemp, minTemp, secondsTemp, daysTemp)

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);


const futureTime = futureDate.getTime();
function getRemainingTime() {

  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  console.log(days, hours, minutes, seconds)

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  daysTemp.textContent = `${format(values[0])}` 
  hoursTemp.textContent = `${format(values[1])}` 
  minTemp.textContent = `${format(values[2])}` 
  secondsTemp.textContent = `${format(values[3])}` 


  if (t < 0) {
    clearInterval(countdown);
  }
}

// countdown;
// The return value of setInterval() is a numeric ID that identifies the interval,
// which can be used later to stop the interval using the clearInterval() method.
// The countdown variable will contain this ID, 
// which can be later passed to the clearInterval() function to stop the countdown timer.

let countdown = setInterval(getRemainingTime, 1000);

//set initial values
getRemainingTime();
