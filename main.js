
// import Lenis from '@studio-freight/lenis';
// import { usePathname, useSearchParams } from 'next/navigation';
// import { useEffect, useRef } from 'react';

// const { default: gsap } = require("gsap");

// const lenis = new Lenis()

let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const translateValue = -index * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000);

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// let smoother = ScrollSmoother.create({
//   container: '.container',
//   solid: '.solid',
// })

// gsap.to(".container", ".solid", {
//   duration: 1,
//   opacity: 1,
//   stagger: 0.2,
// });

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)
