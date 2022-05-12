function timing() {
  let time = new Date();
  let currTime = time.toLocaleTimeString();
  setTimeout(timing, 1000);
  let displayedTime = document.getElementById("digit");

  displayedTime.style.color = "red";
  displayedTime.textContent = currTime;
}
timing();
