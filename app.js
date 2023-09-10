const desiredTime = new Date();
desiredTime.setUTCHours(8);
desiredTime.setUTCMinutes(15);
desiredTime.setUTCSeconds(0);
const stamp = desiredTime.getTime();
const time = document.getElementById("time");
time.innerHTML = stamp.toString();
document.addEventListener("DOMContentLoaded", function () {
    const date = new Date();
    const dayOfWeekElement = document.getElementById("dayOfWeek");
    const options = { weekday: "long" };
    const dayOfWeek = date.toLocaleDateString("en-US", options);
    dayOfWeekElement.textContent = dayOfWeek;
    const timeElement = document.getElementById("time");
    const stamp = date.getTime();
    timeElement.textContent = stamp.toString();
  });