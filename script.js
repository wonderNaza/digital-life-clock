function timing() {
  let time = new Date();
  let currTime = time.toLocaleTimeString();
  setTimeout(timing, 1000);
  let displayedTime = document.getElementById("digit");

  displayedTime.style.color = "red";
  displayedTime.textContent = currTime;
}
timing();

let today = new Date();
// let hourNow = today.getHours();
let greeting;
if (today > 12) {
  greeting = "Goodafternoon" + "!!";
} else if (today > 18) {
  greeting = "Goodevening" + "!!";
} else if (today > 0) {
  greeting = "Goodmorning to you,how do you do " + "?";
} else {
  greeting = "Welcome";
}

let finalGreeting = document.getElementById("greety");
finalGreeting.style.color = "brown";
finalGreeting.textContent = greeting;
