window.onscroll = function() {
    //console.log(window.pageYOffset);
    var nav = document.getElementById('navbar'),
        menu = document.getElementById('mobilemenu');
    if ( window.pageYOffset > 40 ) {
        nav.style.gridTemplateRows = "8vh";
        nav.style.transition = "all 0.3s ease";
        nav.style.fontSize = "70%";
        menu.style.transform = "scale(0.75)";
        menu.style.transition = "all 0.3s ease";
    } else {
        nav.style.gridTemplateRows = "12vh";
        nav.style.transition = "all 0.3s ease";
        nav.style.fontSize = "100%";
        menu.style.transform = "scale(1)";
        menu.style.transition = "all 0.3s ease";
    }
    
}

// Credit: http://jsfiddle.net/cgdoh1bo/1 // 
// Edited to direcdtly change the #navar style rather than apply a class. Alto added a transition //