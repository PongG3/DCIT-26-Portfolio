const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const scrollTopButton = document.getElementById("scrollTop");


menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");

});


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuIcon.classList.add("bx-menu");
        menuIcon.classList.remove("bx-x");

    });

});


const navigationSections = document.querySelectorAll(
    "#home, #about, #portfolio, #contact"
);


function updateActiveNavigation() {

    let currentSection = "home";

    const scrollPosition = window.scrollY + 220;


    navigationSections.forEach(function (section) {

        if (scrollPosition >= section.offsetTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active");


        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNavigation);

window.addEventListener("load", updateActiveNavigation);


function updateScrollTopButton() {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

}


window.addEventListener("scroll", updateScrollTopButton);

window.addEventListener("load", updateScrollTopButton);


window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        navLinks.classList.remove("show");

        menuIcon.classList.add("bx-menu");
        menuIcon.classList.remove("bx-x");

    }

});


const emptyLinks = document.querySelectorAll('a[href="#"]');


emptyLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});
