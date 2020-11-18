
var overlay = document.getElementById('menuoverlay'),
    underlay = document.getElementById('menuunderlay'),
    menu = document.getElementById('mobilemenu'),
    menuitem = document.querySelector('#menuoverlay > ul.nav-items > li > a.nav-active')
    spotify = document.getElementById('spotify'),
    headphones = document.getElementById('headphones');


function menuOverlay() {
   overlay.classList.toggle('nav-active');
   underlay.classList.toggle('nav-active');
   document.querySelectorAll('#menuoverlay > ul.nav-items > li a')
   .forEach(function(a) {
        a.addEventListener('click', closeOverlay);
    });
}
//Credit: https://stackoverflow.com/a/48217369 //

function closeOverlay(event) {
    //document.querySelector(event.path[3]).classList.add('nav-current');
        underlay.classList.toggle('nav-active');
        overlay.classList.toggle('nav-active');
        menu.classList.remove('opened');
        menuitem.classList.remove('nav-active');
        //menucurrent.classList.add('nav-active');
        console.log(event.path[0])
        console.log(event.target.nodeName)
        console.log(event.target.path)
}

function menuUnderlay() {
   overlay.classList.toggle('nav-active');
   underlay.classList.toggle('nav-active');
   menu.classList.remove('opened');
}

function spotifyOverlay() {
   spotify.classList.toggle('spotify-display');
   headphones.classList.toggle('spotify-headphones-active');
}