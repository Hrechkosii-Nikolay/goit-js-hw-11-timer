const refs = {
  timer: document.querySelector("#timer-1"),
  days: document.querySelector("[data-value=days]"),
  hours: document.querySelector("[data-value=hours]"),
  mins: document.querySelector("[data-value=mins]"),
  seconds: document.querySelector("[data-value=secs]"),
};

class CountdownTimer {

  constructor({onTic, targetDate}){
    this.onTic = onTic;
    this.targetDate = targetDate.getTime();
   
  }
  start() {
    const startTime = Date.now();
      setInterval(() => {
      const currentTime = Date.now();
      const deltatime = this.targetDate - currentTime;
      const time = getTimeComponents(deltatime);
      this.onTic(time);
    }, 1000);
  }
}

const timer = new CountdownTimer({

    onTic:updateColockface,
    selector: "#timer-1",
    targetDate: new Date("dec 19, 2021"),
   });

function pad(value) {
  return String(value).padStart(2, "0");
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
function updateColockface({ days, hours, mins, secs }) {
  (refs.days.textContent = `${days}`),
    (refs.hours.textContent = `${hours}`),
    (refs.mins.textContent = `${mins}`),
    (refs.seconds.textContent = `${secs}`);
}
timer.start();