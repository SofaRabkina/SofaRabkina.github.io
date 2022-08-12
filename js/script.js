const burger = document.querySelector(".burger");
const container = document.querySelector(".header");

burger.addEventListener("click", () => {
	container.classList.toggle("header__active");
	burger.classList.toggle("burger__active");
});