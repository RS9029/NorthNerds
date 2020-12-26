

// Sticky Nav

let nav = document.getElementById("nav");
let section2Top = document.getElementById("section-two").offsetTop;
let mainSection = document.getElementById("main-section");

function stickyNav(){
    if(window.scrollY>=section2Top){
        nav.style.position = "fixed";
        nav.style.backgroundColor = "white";
        nav.style.zIndex = "10";
        mainSection.style.paddingTop = `${nav.offsetHeight}px`;

    }
    else{
        nav.style.position = "relative";
        mainSection.style.paddingTop = "0px";
        nav.style.backgroundColor = "transparent";
    }
}

window.addEventListener('scroll',stickyNav);


//Nav Submenu

const servicesLink = document.getElementById('services');
const navSubMenu = document.getElementById('services-sub-menu')

function handleEnter(){
    navSubMenu.style.display = "flex";
    
}
function handleLeave(){
    
    if(navSubMenu.style.display == "flex"){
        navSubMenu.style.display = "none";
    }
}

servicesLink.addEventListener('mouseenter',handleEnter);
navSubMenu.addEventListener('mouseleave',handleLeave);



// MODAL CONTROL

let modal = document.getElementById("modal");
let quoteBtn = document.getElementById('quote-button');


function modalOn(){
    modal.style.display = "flex";
}

function modalOff(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}

quoteBtn.addEventListener("click",modalOn);
modal.addEventListener("click",modalOff,{capture:true});




// Custom Site Page

    // PACKAGES CONTROL

