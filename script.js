// JavaScript for Smooth Animations & Interactivity

document.addEventListener("DOMContentLoaded", function () {
    // 🟣 Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // 🟠 Welcome message animation
    // setTimeout(() => {
    //     alert("🔥 Welcome to the Download Hub! Enjoy the smooth experience.");
    // }, 500);

    // 🔥 Fade-in animation for sections on scroll
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(element => observer.observe(element));

    // 🎭 Smooth parallax scrolling
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        document.querySelector(".hero").style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // 🖱️ Hover effect: Buttons glow & scale up
    const buttons = document.querySelectorAll(".download-btn");
    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.1)";
            btn.style.boxShadow = "0 0 15px rgba(255, 165, 0, 0.8)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
            btn.style.boxShadow = "0 0 5px rgba(255, 165, 0, 0.5)";
        });

        // Subtle shake effect when clicked
        btn.addEventListener("click", () => {
            btn.classList.add("shake");
            setTimeout(() => {
                btn.classList.remove("shake");
            }, 500);
        });
    });

    // 🎨 Dynamic text color change on scroll
    const header = document.querySelector(".header-title");
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        header.style.color = scrollY > 100 ? "#FF8C00" : "#FFFFFF";
    });

    // ✨ Random floating effect for small elements (simulating air movement)
    const floatElements = document.querySelectorAll(".floating");
    floatElements.forEach(el => {
        setInterval(() => {
            const xMove = (Math.random() * 10) - 5; // Random movement between -5px to +5px
            const yMove = (Math.random() * 10) - 5;
            el.style.transform = `translate(${xMove}px, ${yMove}px)`;
        }, 3000);
    });
});
