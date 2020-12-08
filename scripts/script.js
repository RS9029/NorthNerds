

// Sticky Nav

let nav = document.getElementById("nav");
let section2Top = document.getElementById("section-two").offsetTop;
let logoX = document.getElementById("logoX")
let mainSection = document.getElementById("main-section");

function stickyNav(){
    if(window.scrollY>=section2Top){
        nav.style.position = "fixed";
        nav.style.backgroundColor = "white";
        nav.style.zIndex = "10";
        logoX.style.opacity = "1";
        mainSection.style.paddingTop = `${nav.offsetHeight}px`;

    }
    else{
        nav.style.position = "relative";
        mainSection.style.paddingTop = "0px";
        logoX.style.opacity = "0";
        nav.style.backgroundColor = "transparent";
    }
}

window.addEventListener('scroll',stickyNav);


// MODAL CONTROL

let modal = document.getElementById("modal");
let quoteBtn = document.getElementById('quote-button');

function modalOn(){
    modal.style.display = "flex";
}

function modalOff(){
    modal.style.display = "none";
}

quoteBtn.addEventListener("click",modalOn);
modal.addEventListener("click",modalOff);