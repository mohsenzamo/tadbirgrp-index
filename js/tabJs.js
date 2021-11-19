


/**************************This website was developed by: ARMIN BAYAT MOKHTARI & MOHSEN ZAHRAEE*******************************/



/*--------------------->Start Preloader<------------------*/
/*var preloaderDiv=document.getElementById("preloaderDiv");
var allItems=preloaderDiv.children;
var anime= document.getElementById('preloaderAnime');
function hide(){
    setTimeout(stop ,2000);
}
function stop(){
    anime.style.display="none";
    for (let j of allItems){
        j.style.animation="none";
    }
}
hide();*/

/*------------------------->End Preloader<---------------*/



function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var svgTag = document.getElementsByClassName('hoverSvg');
    for (let k = 0;k< svgTag.length;k++){
        svgTag[k].style.filter = '';
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        /*tablinks[i].style.backgroundColor = "";*/
        tablinks[i].className = "tablink";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    document.getElementById(pageName).style.animation = "contentAnimation 0.7s";

    // Add the specific color to the button used to open the tab content
/*
    elmnt.style.backgroundColor = color;
*/  var e = elmnt.children;
    e[0].style.filter = 'invert(25%) sepia(88%) saturate(4403%) hue-rotate(359deg) brightness(99%) contrast(102%)';
    elmnt.className = "tablink active";

}
function servicesTab(TabName,TagText,TagImg,elmnt){
    var pServices = document.getElementsByClassName("circleLogoَServicesP");
    var textServices = document.getElementsByClassName("servicesMainText");
    var imgServices = document.getElementsByClassName("circleLogoَServicesImg");
    for (let q = 0; q < pServices.length; q++) {
        pServices[q].style.display = "none";
    }
    for (let p = 0; p < textServices.length; p++) {
        textServices[p].style.display = "none";
    }
    for (let o = 0; o < imgServices.length; o++) {
        imgServices[o].style.display = "none";
    }
    document.getElementById(TabName).style.display = "block";
    document.getElementById(TagText).style.display = "block";
    document.getElementById(TagImg).style.display = "block";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("defaultservices").click()


 /*nav Js*/

function myFunction(x) {
    var z = document.getElementById('mobilenav');
    var y = document.getElementById("myLinks");
    var asd = document.getElementById("asd");
    var w = y.children;
    if (y.style.display === "flex") {
        y.style.display = "none";
        z.style.boxShadow = "none";
        asd.style.backgroundColor="transparent";

    } else {
        y.style.display = "flex";
        z.style.boxShadow = " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        asd.style.backgroundColor="#ffffff";
        for (let i of w){
            i.style.opacity= "1";
            i.style.animation="opacityAnimation 2s";
        }

    }
    x.classList.toggle("change");
}



function servicesTab(TabName,TagText,TagImg,elmnt){
    var pServices = document.getElementsByClassName("circleLogoَServicesP");
    var textServices = document.getElementsByClassName("servicesMainText");
    var imgServices = document.getElementsByClassName("circleLogoَServicesImg");
    for (let q = 0; q < pServices.length; q++) {
        pServices[q].style.display = "none";
    }
    for (let p = 0; p < textServices.length; p++) {
        textServices[p].style.display = "none";
    }
    for (let o = 0; o < imgServices.length; o++) {
        imgServices[o].style.display = "none";
    }
    document.getElementById(TabName).style.display = "block";
    document.getElementById(TagText).style.display = "block";
    document.getElementById(TagImg).style.display = "block";
    var buttontab=document.getElementsByClassName("tabservices");
    for (let x = 0; x < buttontab.length; x++) {
        buttontab[x].className="tabservices";
    }
    elmnt.className="tabservices activebutton";
}
function ProjectTab(TabName,TagText,elmnt){
    var pProjects = document.getElementsByClassName("circleLogoَProjectsP");
    var textProjects = document.getElementsByClassName("projectsMainText");
    for (let a = 0; a < pProjects.length; a++) {
        pProjects[a].style.display = "none";
    }
    for (let b = 0; b < textProjects.length; b++) {
        textProjects[b].style.display = "none";
    }
    document.getElementById(TabName).style.display = "block";
    document.getElementById(TagText).style.display = "block";
    var buttontab=document.getElementsByClassName("tabservicesProjects");
    for (let x = 0; x < buttontab.length; x++) {
        buttontab[x].className="tabservicesProjects";
    }
    elmnt.className="tabservicesProjects activebutton2";

}
function SystemTab(TabName,TagText,elmnt){
    var pSystem = document.getElementsByClassName("circleLogoَSystemP");
    var textSystem = document.getElementsByClassName("َSystemMainText");
    for (let a = 0; a < pSystem.length; a++) {
        pSystem[a].style.display = "none";
    }
    for (let b = 0; b < textSystem.length; b++) {
        textSystem[b].style.display = "none";
    }
    document.getElementById(TabName).style.display = "block";
    document.getElementById(TagText).style.display = "block";
    var buttontab=document.getElementsByClassName("tabservices");
    for (let x = 0; x < buttontab.length; x++) {
        buttontab[x].className="tabservices";
    }
    elmnt.className="tabservices activebutton";

}
function AboutTab(TabName,TagText,TagImg,elmnt){
    var pAbout = document.getElementsByClassName("circleLogoَAboutP");
    var textAbout = document.getElementsByClassName("AboutMainText");
    var imgAbout = document.getElementsByClassName("circleLogoAboutImg");
    for (let q = 0; q < pAbout.length; q++) {
        pAbout[q].style.display = "none";
    }
    for (let p = 0; p < textAbout.length; p++) {
        textAbout[p].style.display = "none";
    }
    for (let o = 0; o < imgAbout.length; o++) {
        imgAbout[o].style.display = "none";
    }
    document.getElementById(TabName).style.display = "block";
    document.getElementById(TagText).style.display = "block";
    document.getElementById(TagImg).style.display = "block";
    var buttontab=document.getElementsByClassName("tabservicesAbout");
    for (let x = 0; x < buttontab.length; x++) {
        buttontab[x].className="tabservicesAbout";
    }
    elmnt.className="tabservicesAbout activebutton3";
}
document.getElementById("defaultservices").click();
document.getElementById("defaultprojects").click();
document.getElementById("defaultsystem").click();
document.getElementById("defaultabout").click();
 /*end nav */


 /*-----------------------------Start MobileTab--------------------------------*/
let x0 = null;
const breakpoint = 155;
let currentMove = 0;

const handleClick = (event) => {
    const focused = event.target;
    // focused.classList.remove("smooth");
    reset();
    changeFocus(focused);
};

const reset = () => {
    console.log('reset')
    // console.log(e? e.name:'none')
    x0 = null;
    carousel.style.setProperty("--offset", "0px");
    currentMove = 0;
};

const changeFocus = (focused) => {
    if (focused.classList.contains("focused")) {
        console.log("is already focused");
        return;
    }
    const items = document.querySelectorAll(".zr__circle-carousel__item");
    let focusedIndex = -1;
    items.forEach((item, i) => {
        item.classList.remove("before");
        item.classList.remove("after");
        item.classList.remove("focused-before");
        item.classList.remove("focused-after");
        if (item == focused) {
            focusedIndex = i;
            item.classList.add("focused");
        } else {
            item.classList.remove("focused");
            if (focusedIndex >= 0) {
                item.classList.add("after");
            } else {
                item.classList.add("before");
            }
        }
    });

    if (focusedIndex > 0) {
        items[focusedIndex - 1].classList.remove("before");
        items[focusedIndex - 1].classList.add("focused-before");
    }
    if (focusedIndex < items.length - 1) {
        items[focusedIndex + 1].classList.remove("after");
        items[focusedIndex + 1].classList.add("focused-after");
    }
};

const lock = (event) => {
    console.log(
        "lock",
        "start",
        "x0:",
        x0,
        "--offset:",
        carousel.style.getPropertyValue("--offset")
    );
    x0 = unify(event).clientX;
    console.log(
        "lock",
        "end",
        "x0:",
        x0,
        "--offset:",
        carousel.style.getPropertyValue("--offset")
    );
};

const unify = (event) => {
    return event.changedTouches ? event.changedTouches[0] : event;
};

const drag = (event) => {
    event.preventDefault();

    if (x0 || x0 === 0) {
        const offset = Math.round(unify(event).clientX - x0);
        const moves = Math.round(Math.abs(offset / breakpoint));

        if (moves == 0) {
            carousel.style.setProperty("--offset", `${offset}px`);
        } else {
            const queryClass = offset > 0 ? "before" : "after";
            const focused = document.querySelector(`.focused-${queryClass}`);

            if (!focused) {
                reset();
            }

            if (focused && moves > currentMove) {
                currentMove += 1;
                focused.classList.add("smooth");
                changeFocus(focused);
            }
        }
    }
};

const carousel = document.querySelector(".zr__circle-carousel");
carousel.style.setProperty("--offset", "0px");
carousel.addEventListener("mousedown", lock, false);
carousel.addEventListener("touchstart", lock, false);

carousel.addEventListener("mouseup", reset, false);
carousel.addEventListener("mouseleave", reset, false);
carousel.addEventListener("touchend", reset, false);

carousel.addEventListener("mousemove", drag, false);
carousel.addEventListener("touchmove", drag, false);

document.querySelectorAll(".zr__circle-carousel__item").forEach((item) => {
    item.addEventListener("click", handleClick);
});

function openPageMobile(pageMobile , elmnt) {
    var tabMobilePages = document.getElementsByClassName("tabcontent");
    for (let x of tabMobilePages){
        x.style.display= "none";
    }
    var svgTagMobile = document.getElementsByClassName('mobileTabSvg');
    for (let k = 0;k< svgTagMobile.length;k++){
        svgTagMobile[k].style.filter = '';
    }
    document.getElementById(pageMobile).style.display = "block";
    var p = elmnt.children;
    var u = p[0].children;
    u[0].style.filter = 'invert(25%) sepia(88%) saturate(4403%) hue-rotate(359deg) brightness(99%) contrast(102%)';
}

openPageMobile('Home',defaultOpenMobile);

/* ________nav____________ */



/*pop up nav*/
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("active");
        }
    });
});

/* Open when someone clicks on the span element */
function openNav(x) {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



 /*-----------------------------End MobileTab--------------------------------*/



      /*----------------------------Start contentCarousel---------------------------*/



      /*----------------------------End contentCarousel---------------------------*/