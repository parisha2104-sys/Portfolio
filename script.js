// =====================================
// TYPING ANIMATION
// =====================================

const words = [
    "AI solutions.",
    "data-driven projects.",
    "software projects.",
    "and my skills."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement =
    document.querySelector(".typing");


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1400
            );

            return;
        }

    }

    else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;
        }
    }


    setTimeout(

        typeEffect,

        deleting
            ? 45
            : 80
    );
}


typeEffect();



// =====================================
// SCROLL REVEAL
// =====================================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(
        element => {

            const position =
                element
                .getBoundingClientRect()
                .top;


            const windowHeight =
                window.innerHeight;


            if (
                position <
                windowHeight - 80
            ) {

                element.classList
                    .add("active");

            }

        }
    );
}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const header =
    document.querySelector("header");


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            header.style.background =
                "rgba(7,7,12,.94)";

        }

        else {

            header.style.background =
                "rgba(7,7,12,.72)";
        }

    }
);



// =====================================
// SMOOTH NAVIGATION
// =====================================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function(e) {

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );


                if (target) {

                    e.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            "smooth"

                    });

                }

            }
        );

    });



// =====================================
// 3D CARD TILT
// =====================================

const cards =
    document.querySelectorAll(
        ".project-card, .skill-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
                card.getBoundingClientRect();


            const x =
                e.clientX -
                rect.left;


            const y =
                e.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                centerY) * -3;


            const rotateY =
                ((x - centerX) /
                centerX) * 3;


            card.style.transform =
                `
                perspective(700px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-6px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                `
                perspective(700px)
                rotateX(0)
                rotateY(0)
                translateY(0)
                `;

        }
    );

});
