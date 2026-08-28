const menuIcon = document.getElementById("menu-icon");

const navLinks = document.getElementById("navLinks");

const navItems = document.querySelectorAll(".nav-links a");

const scrollTopButton = document.getElementById("scrollTop");


// ========================================
// MOBILE MENU
// ========================================

menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    menuIcon.classList.toggle("bx-menu");

    menuIcon.classList.toggle("bx-x");

});


// ========================================
// CLOSE MOBILE MENU
// ========================================

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuIcon.classList.add("bx-menu");

        menuIcon.classList.remove("bx-x");

    });

});


// ========================================
// NAVIGATION
// ========================================

const navigationSections = document.querySelectorAll(
    "#home, #about, #portfolio, #contact"
);


function updateActiveNavigation() {

    let currentSection = "home";

    const scrollPosition = window.scrollY + 220;


    navigationSections.forEach(function (section) {

        const sectionPosition =
            section.getBoundingClientRect().top + window.scrollY;


        if (scrollPosition >= sectionPosition) {

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


// ========================================
// SCROLL TO TOP
// ========================================

function updateScrollTopButton() {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    }

    else {

        scrollTopButton.classList.remove("show");

    }

}


window.addEventListener("scroll", updateScrollTopButton);

window.addEventListener("load", updateScrollTopButton);


// ========================================
// MOBILE RESIZE
// ========================================

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        navLinks.classList.remove("show");

        menuIcon.classList.add("bx-menu");

        menuIcon.classList.remove("bx-x");

    }

});


// ========================================
// EMPTY LINKS
// ========================================

const emptyLinks = document.querySelectorAll('a[href="#"]');


emptyLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});


// ========================================
// PORTFOLIO MULTIPLE IMAGE GALLERY
// ========================================

const portfolioCards = document.querySelectorAll(".portfolio-card");


portfolioCards.forEach(function (card) {

    const photos = card.querySelectorAll(".portfolio-photo");

    const prevButton = card.querySelector(".portfolio-prev");

    const nextButton = card.querySelector(".portfolio-next");

    const currentCounter = card.querySelector(".current-image");

    const totalCounter = card.querySelector(".total-images");

    const imageArea = card.querySelector(".portfolio-image");


    let currentIndex = 0;


    totalCounter.textContent = photos.length;


    function showImage(index) {

        if (index < 0) {

            index = photos.length - 1;

        }


        if (index >= photos.length) {

            index = 0;

        }


        currentIndex = index;


        photos.forEach(function (photo) {

            photo.classList.remove("active");

        });


        photos[currentIndex].classList.add("active");


        currentCounter.textContent = currentIndex + 1;

    }


    prevButton.addEventListener("click", function (event) {

        event.stopPropagation();

        showImage(currentIndex - 1);

    });


    nextButton.addEventListener("click", function (event) {

        event.stopPropagation();

        showImage(currentIndex + 1);

    });


    imageArea.addEventListener("click", function () {

        openLightbox(photos, currentIndex);

    });


    showImage(0);

});


// ========================================
// LIGHTBOX
// ========================================

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");

const lightboxPrev = document.getElementById("lightboxPrev");

const lightboxNext = document.getElementById("lightboxNext");

const lightboxCurrent = document.getElementById("lightboxCurrent");

const lightboxTotal = document.getElementById("lightboxTotal");


let lightboxImages = [];

let lightboxIndex = 0;


// ========================================
// OPEN LIGHTBOX
// ========================================

function openLightbox(images, startingIndex) {

    lightboxImages = Array.from(images);

    lightboxIndex = startingIndex;


    updateLightbox();


    lightbox.classList.add("show");

    document.body.classList.add("lightbox-open");

}


// ========================================
// UPDATE LIGHTBOX IMAGE
// ========================================

function updateLightbox() {

    if (lightboxImages.length === 0) {

        return;

    }


    lightboxImage.src = lightboxImages[lightboxIndex].src;

    lightboxImage.alt = lightboxImages[lightboxIndex].alt;


    lightboxCurrent.textContent = lightboxIndex + 1;

    lightboxTotal.textContent = lightboxImages.length;


    if (lightboxImages.length <= 1) {

        lightboxPrev.style.display = "none";

        lightboxNext.style.display = "none";

    }

    else {

        lightboxPrev.style.display = "flex";

        lightboxNext.style.display = "flex";

    }

}


// ========================================
// PREVIOUS FULLSCREEN IMAGE
// ========================================

function previousLightboxImage() {

    lightboxIndex--;


    if (lightboxIndex < 0) {

        lightboxIndex = lightboxImages.length - 1;

    }


    updateLightbox();

}


// ========================================
// NEXT FULLSCREEN IMAGE
// ========================================

function nextLightboxImage() {

    lightboxIndex++;


    if (lightboxIndex >= lightboxImages.length) {

        lightboxIndex = 0;

    }


    updateLightbox();

}


// ========================================
// CLOSE LIGHTBOX
// ========================================

function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.classList.remove("lightbox-open");

}


// ========================================
// LIGHTBOX BUTTONS
// ========================================

lightboxClose.addEventListener("click", closeLightbox);


lightboxPrev.addEventListener("click", function (event) {

    event.stopPropagation();

    previousLightboxImage();

});


lightboxNext.addEventListener("click", function (event) {

    event.stopPropagation();

    nextLightboxImage();

});


// ========================================
// CLICK BACKGROUND TO CLOSE
// ========================================

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


// ========================================
// KEYBOARD CONTROLS
// ========================================

document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("show")) {

        return;

    }


    if (event.key === "Escape") {

        closeLightbox();

    }


    if (event.key === "ArrowLeft") {

        previousLightboxImage();

    }


    if (event.key === "ArrowRight") {

        nextLightboxImage();

    }

});
