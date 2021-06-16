const hourEl = document.querySelector(".hour");
const minutel = document.querySelector(".minute");
const secondel = document.querySelector(".second");
const timel = document.querySelector(".time");
const datel = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const months = [
	"JAN",
	"FEB",
	"MAR",
	"APR",
	"MAY",
	"JUN",
	"JUL",
	"AUG",
	"SEP",
	"OCT",
	"NOV",
	"DEC",
];

toggle.addEventListener("click", e => {
	const html = document.querySelector("html");
	if (html.classList.contains("dark")) {
		html.classList.remove("dark");
		e.target.innerHTML = "Dark mode";
	} else {
		html.classList.add("dark");
		e.target.innerHTML = "Light mode";
	}
});

function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const date = time.getDate();
	const day = time.getDay();
	const hour = time.getHours();
	const hoursforclock = hour % 12;
	const minute = time.getMinutes();
	const second = time.getSeconds();
	const ampm = hour >= 12 ? "PM" : "AM";

	hourEl.style.transform = `translate(-50%, -100%) rotate(
    ${scale(hoursforclock, 0, 11, 0, 360)}deg)`;
	minutel.style.transform = `translate(-50%, -100%) rotate(
    ${scale(minute, 0, 59, 0, 360)}deg)`;
	secondel.style.transform = `translate(-50%, -100%) rotate(
    ${scale(second, 0, 59, 0, 360)}deg)`;

	timel.innerHTML = `${hoursforclock}:${
		minute < 10 ? `0${minute}` : minute
	} ${ampm}`;
	datel.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setInterval(setTime, 1000);
