"use strict";

const overlay = document.querySelector(".overlay");
const tab1 = document.querySelector(".operations__tab--1");
const tab2 = document.querySelector(".operations__tab--2");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelector(".operations__content");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const slides = document.querySelectorAll(".slide");
const brands = document.querySelectorAll(".brands");
const modalCascade = document.querySelector(".modal_cascade");
const elList = document.getElementsByTagName("li");
const navPrincipal = document.querySelector(".nav_principal");
const navConditions = document.querySelector(".nav_conditions");
const header = document.querySelector(".header");
const sectionHeader = document.querySelector(".section_header");
const followUsBtn = document.querySelector(".follow_us");
const followUs = document.querySelector(".follow_us--active");
const toateProduseleBtn = document.querySelector(".btn--toateprodusele");
const plusBtn = document.querySelector(".plus");
const imagine = document.querySelector(".imagine");

// Modal 1
const openModal = function () {
	modalCascade.classList.remove("hidden");
};

const closeModal = function () {
	modalCascade.classList.add("hidden");
};

brands.forEach((brand) => {
	brand.addEventListener("click", openModal);
	if (!modalCascade.classList.contains("hidden")) {
		brand.addEventListener("click", closeModal);
	}
});

navPrincipal.addEventListener("click", closeModal);
navConditions.addEventListener("click", closeModal);
sectionHeader.addEventListener("click", closeModal);

// Modal 2
const openModal2 = function () {
	followUs.classList.remove("hidden");
	followUsBtn.style.backgroundColor = "black";
	followUsBtn.style.color = "white";
	toateProduseleBtn.style.zIndex = "0";
};

const closeModal2 = function () {
	followUs.classList.add("hidden");
	followUsBtn.style.backgroundColor = "white";
	followUsBtn.style.color = "#333";
	toateProduseleBtn.style.zIndex = "10";
};

followUsBtn.addEventListener("click", openModal2);

overlay.addEventListener("click", closeModal2);

// plusBtn.addEventListener("click", function (e) {
// 	const clicked = e.target.closest;
// 	console.log(clicked);
// 	imagine.innerHTML = clicked;
// });

// StickyNav

const navHeight = navPrincipal.getBoundingClientRect().height;
const stickyNav = (entries) => {
	const [entry] = entries;

	if (!entry.isIntersecting) {
		navPrincipal.classList.add("sticky");
	} else navPrincipal.classList.remove("sticky");
};

const stickyObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});

stickyObserver.observe(header);

// Reveal Sections

const allSections = document.querySelectorAll(".section");

const sectionsRevealer = (entries, observer) => {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove("section--hidden");
	observer.unobserve(entry.target);
};

const sectionsObserver = new IntersectionObserver(sectionsRevealer, {
	root: null,
	threshold: 0.1,
});

allSections.forEach((section) => {
	sectionsObserver.observe(section);
	section.classList.add("section--hidden");
});

// Changing images

const imgChange1 = document.querySelector(".imglarger1");
const imgChange2 = document.querySelector(".imglarger2");
let imgs1 = ["guess0.jpg", "guess_change1.jpg"];

let i1 = 0;

const changeImg1 = function () {
	if (++i1 >= imgs1.length) i1 = 0;
	imgChange1.src = imgs1[i1];
};

setInterval(changeImg1, 3000);

let imgs2 = ["guess1.jpg", "guess_change2.jpg"];
let i2 = 0;
const changeImg2 = function () {
	if (++i2 >= imgs2.length) i2 = 0;
	imgChange2.src = imgs2[i2];
};

setInterval(changeImg2, 3000);

// Tabbed component

tabsContainer.addEventListener("click", function (e) {
	const clicked = e.target.closest(".operations__tab");

	if (!clicked) return;

	if (clicked === tab2) {
		tab1.classList.remove("operations__tab--active");
		tab2.classList.add("operations__tab--active");
		slide1.innerHTML = "";
		slide2.innerHTML = "";
		slide3.innerHTML = "";
		const html1 = `<div class="card">
								<img class="size" src="slider12.png" />
								<p class="name_product">Trench negru</p>
								<div class="price">
									<p class="pricetext">50 LEI</p>
								</div>
								
							</div>
							<div class="card">
							<img class="size" src="slider13.png" />
								<p class="name_product">Sacou negru</p>
								<div class="price">
									<p class="pricetext">80 LEI</p>
								</div>
							</div>
							<div class="card">
							<img class="size" src="slider14.png" />
								<p class="name_product">Bluza cu flori</p>
								<div class="price">
									<p class="pricetext">50 LEI</p>
								</div>
							</div>
							<div class="card">
							<img class="size" src="slider15.png" />
								<p class="name_product">Fusta neagra</p>
								<div class="price">
									<p class="pricetext">60 LEI</p>
								</div>
							</div>
							`;

		const html2 = `<div class="card">
								<img class="size" src="slider1.png" />
								<p class="name_product">Top negru</p>
								<div class="price">
									<p class="pricetext">200 LEI</p>
								</div>
								
							</div>
							<div class="card"></div>
							<div class="card"></div>
							<div class="card"></div>
							`;

		const html3 = `<div class="card">
								<img class="size" src="img-header1.jpeg" />
								<p class="name_product">Numele produsului2</p>
								<div class="price">
									<p class="pricetext">400 LEI</p>
								</div>
								
							</div>
							<div class="card"></div>
							<div class="card"></div>
							<div class="card"></div>
							`;

		slide1.insertAdjacentHTML("beforeend", html1);
		slide2.insertAdjacentHTML("beforeend", html2);
		slide3.insertAdjacentHTML("beforeend", html3);
	}

	if (clicked === tab1) {
		tab2.classList.remove("operations__tab--active");
		tab1.classList.add("operations__tab--active");
		slide1.innerHTML = "";
		slide2.innerHTML = "";
		slide3.innerHTML = "";
		const html1 = `<div class="card">
								<img class="size" src="img-header1.jpeg" />
								<p class="name_product">Rochie Marciano</p>
								<div class="price">
									<p class="pricetext">400 LEI</p>
								</div>
								
							</div>
							<div class="card">
							<img class="size" src="slider1.png" />
								<p class="name_product">Top negru</p>
								<div class="price">
									<p class="pricetext">200 LEI</p>
								</div>
							</div>	
							<div class="card"><img class="size" src="slider2.png" />
								<p class="name_product">Pantaloni scurti negri</p>
								<div class="price">
									<p class="pricetext">180 LEI</p>
								</div></div>
							<div class="card"><img class="size" src="slider3.png" />
								<p class="name_product">Rochie cu buline</p>
								<div class="price">
									<p class="pricetext">350 LEI</p>
								</div></div>
							`;

		const html2 = `<div class="card">
								<img class="size" src="slider4.png" />
								<p class="name_product">Tricou Guess</p>
								<div class="price">
									<p class="pricetext">130 LEI</p>
								</div>
								
							</div>
							<div class="card">
							<img class="size" src="slider5.png" />
								<p class="name_product">Salopeta tropical</p>
								<div class="price">
									<p class="pricetext">280 LEI</p>
								</div></div>
							<div class="card">
							<img class="size" src="slider6.png" />
								<p class="name_product">Pantaloni lungi</p>
								<div class="price">
									<p class="pricetext">210 LEI</p>
								</div>
							</div>
							<div class="card">
							<img class="size" src="slider7.png" />
								<p class="name_product">Rochie alba</p>
								<div class="price">
									<p class="pricetext">270 LEI</p>
								</div>
							</div>
							`;

		const html3 = `<div class="card">
								<img class="size" src="slider8.png" />
								<p class="name_product">Tricou negru imprimeu</p>
								<div class="price">
									<p class="pricetext">130 LEI</p>
								</div>
								
							</div>
							<div class="card">
							<img class="size" src="slider9.png" />
								<p class="name_product">Pantaloni scurti albi</p>
								<div class="price">
									<p class="pricetext">170 LEI</p>
								</div>
							</div>
							<div class="card">
							<img class="size" src="slider10.png" />
								<p class="name_product">Bluza galbena</p>
								<div class="price">
									<p class="pricetext">180 LEI</p>
								</div>
							</div>
							<div class="card">
							<img class="size" src="slider11.png" />
								<p class="name_product">Salopeta neagra</p>
								<div class="price">
									<p class="pricetext">300 LEI</p>
								</div>
							</div>
							`;

		slide1.insertAdjacentHTML("beforeend", html1);
		slide2.insertAdjacentHTML("beforeend", html2);
		slide3.insertAdjacentHTML("beforeend", html3);
	}
});

// Slider
const slider = function () {
	const btnLeft = document.querySelector(".slider__btn--left");
	const btnRight = document.querySelector(".slider__btn--right");
	const dotContainer = document.querySelector(".dots");

	let curSlide = 0;
	const maxSlide = slides.length;

	const createDots = function () {
		slides.forEach(function (_, i) {
			dotContainer.insertAdjacentHTML(
				"beforeend",
				`<button class="dots__dot" data-slide="${i}"></button>`
			);
		});
	};

	const activateDot = function (slide) {
		document
			.querySelectorAll(".dots__dot")
			.forEach((dot) => dot.classList.remove("dots__dot--active"));

		document
			.querySelector(`.dots__dot[data-slide="${slide}"]`)
			.classList.add("dots__dot--active");
	};

	const goToSlide = function (slide) {
		slides.forEach(
			(s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
		);
	};

	const nextSlide = function () {
		if (curSlide === maxSlide - 1) {
			curSlide = 0;
		} else {
			curSlide++;
		}

		goToSlide(curSlide);
		activateDot(curSlide);
	};

	const prevSlide = function () {
		if (curSlide === 0) {
			curSlide = maxSlide - 1;
		} else {
			curSlide--;
		}
		goToSlide(curSlide);
		activateDot(curSlide);
	};

	const init = function () {
		goToSlide(0);
		createDots();

		activateDot(0);
	};
	init();

	btnRight.addEventListener("click", nextSlide);
	btnLeft.addEventListener("click", prevSlide);

	document.addEventListener("keydown", function (e) {
		if (e.key === "ArrowLeft") prevSlide();
		e.key === "ArrowRight" && nextSlide();
	});

	dotContainer.addEventListener("click", function (e) {
		if (e.target.classList.contains("dots__dot")) {
			const { slide } = e.target.dataset;
			goToSlide(slide);
			activateDot(slide);
		}
	});
};
slider();
