window.onscroll = function() {
    //console.log(window.pageYOffset);
    var nav = document.getElementById('navbar'),
        menu = document.getElementById('mobilemenu');
    if ( window.pageYOffset > 40 ) {
        nav.style.transition = "all 0.2s ease";
        nav.style.height = "75px";
        nav.style.fontSize = "75%";
        menu.style.width = "12vw";
        menu.style.transition = "all 0.2s ease";    
    } else {
        nav.style.transition = "all 0.2s ease";
        nav.style.height = "100px";
        nav.style.fontSize = "100%";
        menu.style.width = "15vw";
        menu.style.transition = "all 0.2s ease";
    }
    
}

// Credit: http://jsfiddle.net/cgdoh1bo/1 // 
// Edited to direcdtly change the #navar style rather than apply a class. Alto added a transition //