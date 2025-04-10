// JavaScript for Smooth Animations & Interactivity
document.addEventListener("DOMContentLoaded", function () {
    // 🔥 Smooth scrolling for navigation links
    document.querySelectorAll('.sticky-header a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

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
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            ultraSmoothScroll(target);
        }
    });
});

function ultraSmoothScroll(target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 990; // Increase for a lazier feel (e.g., 2000)
    let startTime = null;

    function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // Super smooth easing
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, startPosition + distance * easeOutExpo(progress));

        if (elapsedTime < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}


// open links in new tab:
