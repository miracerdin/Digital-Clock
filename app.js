const clock = document.querySelector(".clock");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");

// console.log(mounth, year, seconds);
setInterval(() => {
  const hour1 = new Date().getHours();
  const minute2 = new Date().getMinutes();
  const seconds3 = new Date().getSeconds();
  // console.log(seconds);
  if (seconds3.toString().length < 2) {
    if (minute2.toString().length < 2) {
      let sıfırlı = "0" + seconds3.toString();
      let sıfırlı1 = "0" + minute2.toString();
      minute.innerText = `${sıfırlı1}:`;
    } else {
      let sıfırlı = "0" + seconds3.toString();
      hour.innerText = `${hour1}:`;
      minute.innerText = `${minute2}:`;
      seconds.innerText = `${sıfırlı}`;
    }
  } else if (minute2.toString().length < 2) {
    let sıfırlı1 = "0" + minute2.toString();
    hour.innerText = `${hour1}:`;
    minute.innerText = `${sıfırlı1}:`;
    seconds.innerText = `${seconds3}`;
  } else {
    hour.innerText = `${hour1}:`;
    minute.innerText = `${minute2}:`;
    seconds.innerText = `${seconds3}`;
  }
}, 1000);
