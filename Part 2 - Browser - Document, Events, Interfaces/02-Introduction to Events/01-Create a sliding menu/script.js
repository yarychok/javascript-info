let menu = document.getElementById('sweeties');

let title = menu.querySelector('.title');

title.onclick = function() {
    menu.classList.toggle('open');
}