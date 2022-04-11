console.log('Hello Cedro!')

const menuTemplate = document.querySelector('#menu-template').content;
const menuContainer = document.querySelector('.menu-container');
const navigationMenu = menuTemplate.querySelector('.footer__info').cloneNode(true);

const menuButton = document.querySelector('.menu__button');


const openMenu = () => {
  menuContainer.append(navigationMenu);
}

menuButton.addEventListener('click', () => {
  openMenu();
  console.log('click on Navigation Burger');
});


// Scroll как у Aplle =)
// обрабатываем скролл на всей странице
document.addEventListener('scroll', function(event) {
  // реагируем на событие
  console.log(event);
});

// отловим все случаи, когда пользователь крутит колесо мыши
// при наведенном на элемент курсоре
let div = document.getElementsByTagName('div')[0];
div.addEventListener('wheel', function(event) {
  console.log(event);
});

window.addEventListener('wheel', function() {
  document.getElementById('showScroll').innerHTML = this.scrollY + 'px';
  console.log(document.getElementById('showScroll').innerHTML = this.scrollY + 'px')
});

document.addEventListener('scroll', function() {
  // получаем высоту элемента, на котором произошло событие
  console.log(this.scrollTop);
});

// document.addEventListener('wheel', function(event) {
//   // останавливаем поведение по умолчанию, то есть прокрутку
//   event.preventDefault();
// });
