console.log('Hello Cedro!')

const menuTemplate = document.querySelector('#menu-template').content;
const menuContainer = document.querySelector('.menu-container');
const navigationMenu = menuTemplate.querySelector('.footer__info').cloneNode(true);
const menuButton = document.querySelector('.menu__button');

const openMenu = () => {
  menuContainer.append(navigationMenu);
};

menuButton.addEventListener('click', () => {
  openMenu();
  console.log('click on Navigation Burger');
});