import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.getElementById("hamburger");
	const navMenu = document.getElementById("nav_menu");
	const closeIcon = document.getElementById("closeicon");
	const backDrop = document.getElementById("backdrop");

	hamburger.addEventListener("click", () => {
		navMenu.classList.remove("hidden");
		backDrop.classList.remove("hidden");
	});

	closeIcon.addEventListener("click", () => {
		navMenu.classList.add("hidden");
		backDrop.classList.add("hidden");
	});
});
