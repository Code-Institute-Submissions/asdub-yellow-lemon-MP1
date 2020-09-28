window.onscroll = function() {
    //console.log(window.pageYOffset);
    var nav = document.getElementById('navbar'),
        menu = document.getElementById('mobilemenu'),
        spotifyOverlay = document.getElementById('spotify');
    if ( window.pageYOffset > 40 ) {
        nav.style.transition = "all 0.2s ease";
        nav.style.height = "75px";
        nav.style.fontSize = "75%";
        menu.style.width = "50px";
        spotifyOverlay.style.top = "85px";
        menu.style.transition = "all 0.2s ease";    
    } else {
        nav.style.transition = "all 0.2s ease";
        nav.style.height = "100px";
        nav.style.fontSize = "100%";
        menu.style.width = "70px";
        spotifyOverlay.style.top = "100px";
        menu.style.transition = "all 0.2s ease";
    }
    
}

// Credit: http://jsfiddle.net/cgdoh1bo/1 // 
// Edited to directly change the #mobilemenu style rather than apply a class //