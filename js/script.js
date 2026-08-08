// ========================================
// KunaCoder v2
// ========================================

console.log("🚀 KunaCoder Loaded");

// ----------------------------
// Smooth scroll
// ----------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ----------------------------
// Navbar background
// ----------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        nav.style.background = "rgba(7,11,22,.92)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        nav.style.background = "rgba(7,11,22,.75)";
        nav.style.boxShadow = "none";

    }

});

// ----------------------------
// Product card animation
// ----------------------------

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = "600ms ease";

        card.style.opacity = "1";
        card.style.transform = "translateY(0px)";

    }, index * 180);

});

// ----------------------------
// Button effect
// ----------------------------

const button = document.querySelector(".button");

if (button) {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

}

// ----------------------------
// Card click
// ----------------------------

cards.forEach(card => {

    card.addEventListener("click", () => {

        alert("Product page coming in Version 3 🚀");

    });

});

// ----------------------------
// Hero fade
// ----------------------------

const hero = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    const y = window.scrollY;

    hero.style.opacity = Math.max(1 - y / 500, 0);

    hero.style.transform = `translateY(${y * 0.25}px)`;

});

console.log("✅ KunaCoder Ready");