const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bar-wrapper");
const progressBarPercents = [35, 35, 35, 2, 1, 1, 1];

window.addEventListener("scroll", () => {
	mainFn();
});

const mainFn = () => {
	if (window.pageYOffset >= navbarOffsetTop) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}

	sections.forEach((section, i) => {
		if (window.pageYOffset >= section.offsetTop - 10) {
			navbarLinks.forEach((navbarLink) => {
				navbarLink.classList.remove("navbar-link_active");
			});

			navbarLinks[i].classList.add("navbar-link_active");
		}
	});

	if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
		document.querySelectorAll(".progress-percent").forEach((el, i) => {
			el.style.width = `${progressBarPercents[i]}%`;
			el.previousElementSibling.firstElementChild.textContent =
				progressBarPercents[i];
		});
	}
};
mainFn();

window.addEventListener("resize", () => {
	window.location.reload();
});

function scrollToElement(el) {
	// scroll to element css prop
	const section = document.querySelector(el);
	const sectionOffset = section.offsetTop;

	window.scrollTo({
		top: sectionOffset,
		left: 0,
		behavior: "smooth",
	});
}
