// Typing Animation

const text = [
    "Software Developer",
    "Programming Mentor",
    "Web Developer",
    "Java Developer"
];

let index = 0;
let char = 0;

const heading = document.querySelector(".left h2");

function type() {

    if (char < text[index].length) {

        heading.innerHTML = text[index].substring(0, char + 1);

        char++;

        setTimeout(type, 100);

    }

    else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    if (char > 0) {

        heading.innerHTML = text[index].substring(0, char - 1);

        char--;

        setTimeout(erase, 50);

    }

    else {

        index++;

        if (index >= text.length) {

            index = 0;

        }

        type();

    }

}

type();


// Navbar Background

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#020617";

    }

    else {

        header.style.background = "#1e293b";

    }

});