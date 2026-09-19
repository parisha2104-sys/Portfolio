/* ==================================================
   LOADER
================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList
            .add("hide");

    }, 900);

});



/* ==================================================
   TYPING EFFECT
================================================== */

const words = [

    "AI & ML learner.",
    "problem solver.",
    "developer.",
    "data explorer.",
    "curious builder."

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typing =
    document.querySelector(".typing");


function typeWriter() {

    const word =
        words[wordIndex];


    if (!deleting) {

        typing.textContent =
            word.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            word.length
        ) {

            deleting = true;

            setTimeout(
                typeWriter,
                1300
            );

            return;
        }

    } else {

        typing.textContent =
            word.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (
            charIndex === 0
        ) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(

        typeWriter,

        deleting
            ? 40
            : 80

    );

}


typeWriter();



/* ==================================================
   SCROLL REVEAL
================================================== */

const reveals =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("active");

                }

            });

        },

        {
            threshold: .12
        }

    );


reveals.forEach(
    element =>
        revealObserver.observe(element)
);



/* ==================================================
   SCROLL PROGRESS
================================================== */

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;

        const pageHeight =
            document.documentElement
                .scrollHeight
            -
            window.innerHeight;

        const progress =
            (scrollTop / pageHeight)
            * 100;


        document
            .querySelector(".scroll-progress")
            .style.width =
            progress + "%";

    }
);



/* ==================================================
   CURSOR GLOW
================================================== */

const cursorGlow =
    document.querySelector(".cursor-glow");


window.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);



/* ==================================================
   MAGNETIC BUTTONS
================================================== */

const magneticButtons =
    document.querySelectorAll(".magnetic");


magneticButtons.forEach(button => {

    button.addEventListener(
        "mousemove",
        event => {

            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX
                -
                rect.left
                -
                rect.width / 2;


            const y =
                event.clientY
                -
                rect.top
                -
                rect.height / 2;


            button.style.transform =
                `
                translate(
                    ${x * .12}px,
                    ${y * .12}px
                )
                `;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translate(0,0)";

        }
    );

});



/* ==================================================
   PARTICLE SYSTEM
================================================== */

const canvas =
    document.getElementById(
        "particles"
    );

const ctx =
    canvas.getContext("2d");


let particles = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);



class Particle {

    constructor() {

        this.x =
            Math.random()
            *
            canvas.width;

        this.y =
            Math.random()
            *
            canvas.height;

        this.size =
            Math.random()
            * 1.8
            + .4;

        this.speedX =
            (Math.random() - .5)
            * .25;

        this.speedY =
            (Math.random() - .5)
            * .25;

        this.opacity =
            Math.random()
            * .5
            + .1;

    }


    update() {

        this.x +=
            this.speedX;

        this.y +=
            this.speedY;


        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {

            this.speedX *= -1;

        }


        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {

            this.speedY *= -1;

        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(167,139,250,${this.opacity})`;

        ctx.fill();

    }

}


function createParticles() {

    particles = [];

    const amount =
        window.innerWidth < 700
            ? 45
            : 90;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


createParticles();



function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();



/* ==================================================
   HERO CARD 3D TILT
================================================== */

const aiCard =
    document.querySelector(".ai-card");


if (aiCard) {

    aiCard.addEventListener(
        "mousemove",
        event => {

            const rect =
                aiCard.getBoundingClientRect();


            const x =
                event.clientX
                -
                rect.left;


            const y =
                event.clientY
                -
                rect.top;


            const rotateX =
                ((y - rect.height / 2)
                /
                (rect.height / 2))
                * -5;


            const rotateY =
                ((x - rect.width / 2)
                /
                (rect.width / 2))
                * 6;


            aiCard.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;

        }
    );


    aiCard.addEventListener(
        "mouseleave",
        () => {

            aiCard.style.transform =
                `
                perspective(1000px)
                rotateY(-6deg)
                rotateX(2deg)
                `;

        }
    );

}



/* ==================================================
   SKILL CARD TILT
================================================== */

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


skillCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX
                -
                rect.left;


            const y =
                event.clientY
                -
                rect.top;


            const rotateX =
                ((y - rect.height / 2)
                /
                rect.height)
                * -5;


            const rotateY =
                ((x - rect.width / 2)
                /
                rect.width)
                * 5;


            card.style.transform =
                `
                perspective(700px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});



/* ==================================================
   PROJECT CARD TILT
================================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX
                -
                rect.left;


            const y =
                event.clientY
                -
                rect.top;


            const rotateX =
                ((y - rect.height / 2)
                /
                rect.height)
                * -2;


            const rotateY =
                ((x - rect.width / 2)
                /
                rect.width)
                * 2;


            card.style.transform =
                `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});



/* ==================================================
   MOBILE MENU
================================================== */

const mobileMenu =
    document.querySelector(
        ".mobile-menu"
    );

const navLinks =
    document.querySelector(
        ".nav-links"
    );


mobileMenu.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "mobile-open"
        );

    }
);



/* ==================================================
   SMOOTH NAV LINKS
================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const target =
                    document.querySelector(
                        link.getAttribute(
                            "href"
                        )
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior:
                            "smooth"
                    });

                }

            }
        );

    });
