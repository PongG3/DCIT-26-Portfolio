// mobile //

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("navLinks");


// open and close moible menu
menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    // change hamburger icon to x
    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");

});



// close menu after navigation click

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuIcon.classList.add("bx-menu");

        menuIcon.classList.remove("bx-x");

    });

});



// active navigation click

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active");


        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

// scroll top to bottom
const scrollTopButton = document.getElementById("scrollTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});

// prevent empty links sa refresh

const emptyLinks = document.querySelectorAll('a[href="#"]');


emptyLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});
