document.addEventListener("DOMContentLoaded", function() {
    const menuCloseButton = document.querySelector('.menu-mobile__close-button');
    const menuOpenButton = document.querySelector('.menu-mobile__open-button');
    const menuMobileContainer = document.querySelector('.menu-mobile');

    menuOpenButton.addEventListener("click", function() {
        menuMobileContainer.classList.add("active");
    });

    menuCloseButton.addEventListener("click", function() {
        menuMobileContainer.classList.remove("active");
    });


});

// const lenis = new Lenis({
//     duration: 1.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
//     direction: 'vertical', // vertical, horizontal
//     gestureDirection: 'vertical', // vertical, horizontal, both
//     smooth: true,
//     mouseMultiplier: 1,
//     smoothTouch: false,
//     touchMultiplier: 2,
//     infinite: false,
//   })
  
//   //get scroll value
//   lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
//     console.log({ scroll, limit, velocity, direction, progress })
//   })
  
//   function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
//   }
  
//   requestAnimationFrame(raf)