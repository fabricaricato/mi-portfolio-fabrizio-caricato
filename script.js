// Script for hide anchors while scrolling

const elementos = document.querySelectorAll('.anchor');
let isScrolling;

window.addEventListener('scroll', () => {
  elementos.forEach(i => i.classList.add('hide'));
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
    elementos.forEach(el => el.classList.remove('hide'));
  }, 200);
});