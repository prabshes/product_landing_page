"strict";
//? Hamburger menu
const nav = document.querySelector("#nav-bar");
// console.log(nav.getBoundingClientRect());

const hamM = document.querySelector(".ham");
const mainM = document.querySelector(".main-menu");

hamM.addEventListener("click", function () {
  hamM.classList.toggle("active");
  mainM.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((el) => {
  el.addEventListener("click", function () {
    mainM.classList.remove("active");
    hamM.classList.remove("active");
  });
});

//? Link fade out when hover
const hoverEffect = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest("#nav-bar").querySelectorAll(".nav-link");
    // console.log(siblings);

    const logo = document.querySelector(".logo");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
      logo.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", hoverEffect.bind(0.5));

nav.addEventListener("mouseout", hoverEffect.bind(1));

//  Opnen Contact model
const contact = document.querySelector(".contact");
const overlay = document.querySelector(".overlay");
// console.log(contact);
const conBtn = document.querySelector("#conbtn");
// console.log(conBtn);

const openFunc = function (e) {
  document.querySelector("body").style.overflowY = "hidden";

  contact.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

conBtn.addEventListener("click", openFunc);

// Close Contact Model
const closeFunc = function (e) {
  document.querySelector("body").style.overflowY = "visible";
  contact.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", closeFunc);

// Send Massege
const sendBtn = document.querySelector(".submit");

sendBtn.addEventListener("click", closeFunc);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !contact.classList.contains("hidden")) {
    closeFunc();
  }
});

//* Smooth scroll

const navLink = document.querySelectorAll(".nav-link");

// console.log(navLink);
navLink.forEach((el) => {
  // console.log(el);
  el.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

//* Sticky navigation
const section1 = document.querySelector(".section--1");
// const obsCalBack = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };
//
// const observer = new IntersectionObserver(obsCalBack, obsOptions);
// observer.observe(section1);
const headerText = document.querySelector(".header-text");
const revealImg = document.querySelector(".header-img");
const navStk = document.querySelector(".nav");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries, obsOptions) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) navStk.classList.add("sticky");
  else navStk.classList.remove("sticky");
};
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
// console.log(navHeight);
const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
headerObserver.observe(header);

// reveal loading
const revealText = document.querySelector(".specs-heading");
const allSections = document.querySelectorAll(".section");
const revealCard = document.querySelector(".card--container");

const revealSections = function (entries, observer) {
  const [entry] = entries;

  // console.log(entry);
  if (!entry.isIntersecting) return;
  // entry.target.classList.remove("section--hidden");
  revealText.classList.remove("section--hidden");
  revealCard.classList.remove("card--hidden");
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

revealText.classList.add("section--hidden");
revealCard.classList.add("card--hidden");

// Slider

const slides = document.querySelectorAll(".photo");
const galery = document.querySelector(".photo-gallery");
// galery.style.transform = "scale(0.4) translateX(-800px)";

let current = 0;
const maxSlides = slides.length - 1;

// Slider function
const gotoSlide = function (slide) {
  slides.forEach((pic, i) => {
    pic.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

// next slide

galery.addEventListener("click", function () {
  if (current === maxSlides) {
    current = 0;
  } else {
    current++;
  }
  gotoSlide(current);
});

//? Somet thing new
// Selecting hero Image
const heroImg = document.querySelector(".header__img--div");

// Slider function
const heroSlider = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    // console.log(entry);
    heroImg.classList.remove("header__img--hidden");
    headerText.classList.remove("header__text--hidden");
  } else {
    heroImg.classList.add("header__img--hidden");
    headerText.classList.add("header__text--hidden");
  }
};

// header Observer API
const heroObserver = new IntersectionObserver(heroSlider, {
  root: null,
  threshold: 0,
});

// Observing header Image
heroObserver.observe(heroImg);

// Observing header Text
heroObserver.observe(headerText);

//* CArde Observer
// const cards = document.querySelectorAll(".heading-1");
// console.log(cards);

// cards.forEach((card, i) => {
//   const cardAnim = function (entries, options) {
//     const [entry] = entries;

//     if (entry.isIntersecting) {
//       console.log(entry);
//       entry.target.style.opacity = 0;
//     }
//   };
//   console.log(card);
//   const cardObserver = new IntersectionObserver(cardAnim, {
//     threshold: 0,
//   });
//   cardObserver.observe(card);
// });
