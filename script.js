const weddingDate = new Date("2027-08-07T00:00:00+02:00");
const countdownFields = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};
const calendarButton = document.querySelector("#calendarButton");
const calendarLabel = document.querySelector("[data-calendar-label]");

function formatNumber(value, length = 2) {
  return String(value).padStart(length, "0");
}

function updateCountdown() {
  const now = new Date();
  const distance = Math.max(weddingDate.getTime() - now.getTime(), 0);
  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownFields.days.textContent = formatNumber(days, 3);
  countdownFields.hours.textContent = formatNumber(hours);
  countdownFields.minutes.textContent = formatNumber(minutes);
  countdownFields.seconds.textContent = formatNumber(seconds);
}

function confirmCalendarClick() {
  const originalLabel = calendarLabel.textContent;

  calendarLabel.textContent = "Kalenderdatei erstellt";
  window.setTimeout(() => {
    calendarLabel.textContent = originalLabel;
  }, 2600);
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
calendarButton.addEventListener("click", confirmCalendarClick);
