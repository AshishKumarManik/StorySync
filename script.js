const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const parentElement = arrow.parentElement;
    const movieList = parentElement.querySelector(".movie-list");
    const itemNumber = movieList.querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        if (arrow.classList.contains("fa-chevron-right")) {
            clickCounter++;
            if (itemNumber - (4 + clickCounter) >= 0) {
                movieList.style.transform = `translateX(${
                    movieList.computedStyleMap().get("transform")[0].x.value - 300
                }px)`;
            } else {
                movieList.style.transform = "translateX(0)";
                clickCounter = 0;
            }
        } else if (arrow.classList.contains("fa-chevron-left")) {
            clickCounter--;
            if (clickCounter < 0) clickCounter = 0;
            movieList.style.transform = `translateX(${
                movieList.computedStyleMap().get("transform")[0].x.value + 300
            }px)`;
        }
    });
    console.log(movieList.querySelectorAll("img").length);
});

// Movie Slideshow Functionality

// Day and Night Mode Toggle
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const toggleBall = document.querySelector(".toggle-ball");
const moonIcon = document.querySelector(".fa-moon");
const sunIcon = document.querySelector(".fa-sun");

toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    moonIcon.classList.toggle("active");
    sunIcon.classList.toggle("active");
    toggleBall.classList.toggle("slide");
});
