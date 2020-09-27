function menuOverlay() {
   var overlay = document.getElementById('menuoverlay') ;
   overlay.classList.toggle('nav-menu-overlay-display');
}

function spotifyOverlay() {
   var spotify = document.getElementById('spotify'),
        headphones = document.getElementById('headphones') ;
   spotify.classList.toggle('spotify-display');
   headphones.classList.toggle('spotify-headphones-active');
}