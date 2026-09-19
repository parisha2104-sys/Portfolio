document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       1. PARTICLES
    =============================== */

    const particlesContainer = document.querySelector(".particles");

    if (particlesContainer) {
        for (let i = 0; i < 45; i++) {
            const particle = document.createElement("span");

            particle.classList.add("particle");

            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";
            particle.style.animationDelay =
                Math.random() * 6 + "s";
            particle.style.animationDuration =
                4 + Math.random() * 6 + "s";

            particlesContainer.appendChild(particle);
        }
    }


    /* ===============================
       2. SCROLL REVEAL
    =============================== */

    const revealElements = document.querySelectorAll(
        ".about-card, .skill-card, .project-card, .timeline-item, .learn-card, .contact-card"
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    /* ===============================
       3. NAVIGATION
    =============================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });


    /* ===============================
       4. MOBILE MENU
    =============================== */

    const menuButton = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-links");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuButton.classList.toggle("open");
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                menuButton.classList.remove("open");
            });
        });
    }


    /* ===============================
       5. ACTIVE SECTION ON SCROLL
    =============================== */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    });


    /* ===============================
       6. PROJECT CARD TILT
    =============================== */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -4;

            const rotateY =
                ((x - centerX) / centerX) * 4;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });


    /* ===============================
       7. SKILL CARD HOVER
    =============================== */

    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });


    /* ===============================
       8. HERO PARALLAX
    =============================== */

    const heroVisual = document.querySelector(".hero-visual");

    if (heroVisual) {

        window.addEventListener("mousemove", (event) => {

            const x =
                (window.innerWidth / 2 - event.clientX) / 50;

            const y =
                (window.innerHeight / 2 - event.clientY) / 50;

            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;
        });
    }


    /* ===============================
       9. SMOOTH BUTTON EFFECT
    =============================== */

    const buttons = document.querySelectorAll(
        ".btn, .project-link, .social-link"
    );

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.96)";

            setTimeout(() => {
                button.style.transform = "";
            }, 120);
        });
    });


    /* ===============================
       10. NAVBAR SCROLL EFFECT
    =============================== */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });
    }


    /* ===============================
       11. BACK TO TOP
    =============================== */

    const logo = document.querySelector(".logo");

    if (logo) {
        logo.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    /* ===============================
       DONE
    =============================== */

    console.log("✨ Parisha's Portfolio loaded successfully!");

});
