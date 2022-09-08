
const container = document.querySelector('.navbar_conteiner')
// console.log(container)
const menu = document.querySelector('.menu_list')

container.addEventListener('click', function (e) {
  if(e.target.matches('.menu--open')) {
    // window.alert("si funicona")
    menu.classList.add('show--menu')
  }

  if(e.target.matches('.menu--close')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.matches('.nav_link')) {
    menu.classList.remove('show--menu')
  } 
})