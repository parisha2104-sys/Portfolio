/* =========================================================
   PARISHA PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PARTICLES
    ===================================================== */

    const particleContainer = document.getElementById("particles");

    if (particleContainer) {

        for (let i = 0; i < 45; i++) {

            const particle = document.createElement("span");

            particle.className = "particle";

            particle.style.left = Math.random() * 100 + "%";

            particle.style.animationDuration =
                (8 + Math.random() * 15) + "s";

            particle.style.animationDelay =
                (Math.random() * 10) + "s";

            particle.style.opacity =
                Math.random() * .6;

            particleContainer.appendChild(particle);
        }
    }


    /* =====================================================
       CURSOR GLOW
    ===================================================== */

    const cursorGlow = document.querySelector(".cursor-glow");

    if (cursorGlow) {

        document.addEventListener("mousemove", (event) => {

            cursorGlow.style.left = event.clientX + "px";

            cursorGlow.style.top = event.clientY + "px";

        });

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const navMenu =
        document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("mobile-open");

        });


        document
            .querySelectorAll(".nav-link")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    navMenu.classList.remove(
                        "mobile-open"
                    );

                });

            });

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =====================================================
       PROJECT CARD TILT EFFECT
    ===================================================== */

    const cards =
        document.querySelectorAll(
            ".project-card, .skill-card"
        );


    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            if (window.innerWidth < 800) return;

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const heroVisual =
        document.querySelector(".hero-visual");


    if (heroVisual) {

        document.addEventListener("mousemove", (event) => {

            if (window.innerWidth < 900) return;

            const x =
                (event.clientX / window.innerWidth - .5);

            const y =
                (event.clientY / window.innerHeight - .5);


            heroVisual.style.transform =
                `translate(${x * 12}px, ${y * 12}px)`;

        });

    }


    /* =====================================================
       SMOOTH BUTTON FEEDBACK
    ===================================================== */

    document
        .querySelectorAll("a[href^='#']")
        .forEach((link) => {

            link.addEventListener("click", () => {

                const target =
                    link.getAttribute("href");

                if (target === "#") return;

            });

        });


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cHey! 👋 Welcome to Parisha's portfolio.",
        "color:#9276ff;font-size:16px;font-weight:bold;"
    );

});
