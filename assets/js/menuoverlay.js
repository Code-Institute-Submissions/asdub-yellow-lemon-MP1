function menuOverlay() {
   var overlay = document.getElementById('menuoverlay'),
        underlay = document.getElementById('menuunderlay'),
        menu = document.getElementById('mobilemenu');
   overlay.classList.toggle('nav-active');
   underlay.classList.toggle('nav-active');
}

function menuUnderlay() {
   var overlay = document.getElementById('menuoverlay'),
        underlay = document.getElementById('menuunderlay'),
        menu = document.getElementById('mobilemenu');
   overlay.classList.toggle('nav-active');
   underlay.classList.toggle('nav-active');
   menu.classList.remove('opened');
}



  

function spotifyOverlay() {
   var spotify = document.getElementById('spotify'),
        headphones = document.getElementById('headphones') ;
   spotify.classList.toggle('spotify-display');
   headphones.classList.toggle('spotify-headphones-active');
}