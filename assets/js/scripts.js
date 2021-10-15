var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}


var tables = document.getElementsByTagName("table");
    for (i = 0; i < tables.length; i++) {
      tables[i].classList.add("table");
      tables[i].classList.add("table-sm");
      tables[i].classList.add("table-striped");
    }
