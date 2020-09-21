const header = document.getElementById('header');
const burger = document.getElementById('burger');
const burgerTop = document.getElementById('burger-top');
const burgerMiddle = document.getElementById('burger-middle');
const burgerBottom = document.getElementById('burger-bottom');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

//-- Changement de style du header quand on scroll à plus de 100px depuis le haut de la page
document.addEventListener('scroll', e => {
  if (document.querySelector('html').scrollTop > 100) {
    header.classList.add('header--scrolled');
    burgerTop.classList.add('burger__piece--scrolled');
    burgerMiddle.classList.add('burger__piece--scrolled');
    burgerBottom.classList.add('burger__piece--scrolled');
  }
  else {
    header.classList.remove('header--scrolled');
    burgerTop.classList.remove('burger__piece--scrolled');
    burgerMiddle.classList.remove('burger__piece--scrolled');
    burgerBottom.classList.remove('burger__piece--scrolled');
  }
});

//-- Animation de l'icone burger quand on clique dessus
burger.addEventListener('click', () => {
  if (!sidebar.classList.contains('sidebar--enabled')) {
    sidebar.classList.add('sidebar--enabled');
    overlay.classList.add('sidebar__overlay--enabled');
    burgerTop.classList.add('burger__piece--top-enabled');
    burgerMiddle.classList.add('burger__piece--middle-enabled');
    burgerBottom.classList.add('burger__piece--bottom-enabled');
    burgerTop.classList.remove('burger__piece--top-disabled');
    burgerMiddle.classList.remove('burger__piece--middle-disabled');
    burgerBottom.classList.remove('burger__piece--bottom-disabled');
  }
  else {
    sidebar.classList.remove('sidebar--enabled');
    overlay.classList.remove('sidebar__overlay--enabled');
    burgerTop.classList.add('burger__piece--top-disabled');
    burgerMiddle.classList.add('burger__piece--middle-disabled');
    burgerBottom.classList.add('burger__piece--bottom-disabled');
    burgerTop.classList.remove('burger__piece--top-enabled');
    burgerMiddle.classList.remove('burger__piece--middle-enabled');
    burgerBottom.classList.remove('burger__piece--bottom-enabled');
  }
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--enabled');
    overlay.classList.remove('sidebar__overlay--enabled');
    burgerTop.classList.add('burger__piece--top-disabled');
    burgerMiddle.classList.add('burger__piece--middle-disabled');
    burgerBottom.classList.add('burger__piece--bottom-disabled');
    burgerTop.classList.remove('burger__piece--top-enabled');
    burgerMiddle.classList.remove('burger__piece--middle-enabled');
    burgerBottom.classList.remove('burger__piece--bottom-enabled');
});