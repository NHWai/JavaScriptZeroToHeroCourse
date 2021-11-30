'use strict';

const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(modal => modal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button Scrolling
btnScroll.addEventListener('click', e => {
  const s1 = section1.getBoundingClientRect();
  console.log(s1);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //Scrolling
  // window.scrollTo({
  //   left: s1.left + window.pageXOffset,
  //   top: s1.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////
//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Event Delegation
//1.Add Event Listener to common parent element
//2.Determine what element orginated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////////
//Tabbed Component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard Clause
  if (!clicked) return;

  //Removing Active Class
  tabs.forEach(t => {
    t.classList.remove('operations__tab--active');
  });
  tabsContent.forEach(t => {
    t.classList.remove('operations__content--active');
  });

  //Activating Tab
  clicked.classList.add('operations__tab--active');

  //Activating TabContent
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////////////////
//Menu Fade Navigation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////////////////////////
//Sticky NavBar
// const initialCors = section1.getBoundingClientRect();

// window.addEventListener('scroll', () =>
//   scrollY > initialCors.top
//     ? nav.classList.add('sticky')
//     : nav.classList.remove('sticky')
// );

///The Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOption = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOption);

// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const obsCallback = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const obsOption = {
  root: null,
  rootMargin: `-${navHeight}px`,
  threshold: 0,
};

const headerObserver = new IntersectionObserver(obsCallback, obsOption);
headerObserver.observe(header);

//Revealing Sections When Scrolled
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  // section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

//Revealing Lazy loading images
const imgSrc = document.querySelectorAll('img[data-src]');
const revealImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};

const imgObserver = new IntersectionObserver(revealImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgSrc.forEach(img => imgObserver.observe(img));

//////////////////////////////////////////////////////
//Slider
const slides = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  const numSlides = slides.length;
  let curSlide = 0;

  //Functions
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (curS) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curS)}%)`)
    );
  };

  const createDots = function () {
    slides.forEach(function (s, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class='dots__dot' data-slide='${i}'></button>`
      );
    });
  };

  const nextSlide = function () {
    curSlide === numSlides - 1 ? (curSlide = 0) : curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const previousSlide = function () {
    curSlide === 0 ? (curSlide = numSlides - 1) : curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const innit = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  innit();

  //Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    e.key === 'ArrowLeft' && previousSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slides();
/*
//Selecting Element
const whHtml = document.documentElement;
const header = document.querySelector('.header');
console.log(whHtml);

//Creating and Inserting Element

//creating element
const message = document.createElement('div');
//adding class to the element
message.classList.add('cookie-message');

//adding html to the element
message.innerHTML = `We use cookie for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button> `;
console.log(message);

//Inserting the div element to the webpage
//inseting before the header element
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
header.after(message);

//Deleting Element
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

//Style
message.style.backgroundColor = '#333';
message.style.width = `120%`;

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';
// console.log(message.style.height);
// message.style.height = `60px`;

document.documentElement.style.setProperty(`--color-primary`, 'steelblue');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = `Beautiful Minimalist Bankist Logo`;
logo.setAttribute('designer', 'Jonas');
//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

console.log(logo.src);
console.log(logo.getAttribute('src'));

//Data Attributes (data attributes starts with data)
console.log(logo.dataset.versionNumber);

const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScroll.addEventListener('click', e => {
  const s1 = section1.getBoundingClientRect();
  console.log(s1);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //Scrolling
  // window.scrollTo({
  //   left: s1.left + window.pageXOffset,
  //   top: s1.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');
const alerth1 = function (e) {
  alert(`addEventListener: You're reading the heading.`);
};

h1.addEventListener('mouseenter', alerth1);

// h1.onmouseenter = function (e) {
//   alert(`addEventListener: You're reading the heading.`);
//   h1.style.backgroundColor = 'steelblue';
// };

//Removing eventListener
const ra = function () {
  h1.removeEventListener('mouseenter', alerth1);
};

setTimeout(ra, 3000);

const limit = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = function () {
  return `rgb(${limit(255, 0)},${limit(255, 0)},${limit(255, 0)})`;
};

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link Class', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

/////////////////////

//DOM Traversing
const h1 = document.querySelector('h1');
console.log(h1);

//GoingDownwards : Child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //all children in there
console.log(h1.children); //only html child
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'steelblue';

//GoingUpwards : Parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.backgroundColor = 'orange';
h1.closest('h1').style.backgroundColor = 'blue';

//Going Sideways : Sibling
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});



const randomLimit = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const newA = new Array();
let diceSet = new Set(newA);
const diceRoll = function () {
  return newA.push(randomLimit(6, 1));
};

while (diceSet.size !== 6) {
  diceRoll();
  diceSet = new Set(newA);
  if (diceSet.size === 6) {
    console.log(newA.length);
    console.log(diceSet);
  }
}
*/

document.addEventListener('DOMContentLoaded', function (e) {
  console.log(`HTML parsed & DOM Loaded`, e);
});

window.addEventListener('load', function (e) {
  console.log(`Content & Images loaded`, e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
