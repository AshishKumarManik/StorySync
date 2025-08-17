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
            if (itemNumber - (3 + clickCounter) >= 0) {
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

// Search Functionality//

function handleSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query === '') {
    alert('Please enter a movie or book name.');
    return;
    }

    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('book') || lowerQuery.includes('novel')) {
    const bookQuery = encodeURIComponent(query.replace(/book|novel/gi, '').trim());
    window.open(`https://openlibrary.org/search?q=${bookQuery}`, '_blank');
    } else {
    const movieQuery = encodeURIComponent(query);
    window.open(`https://www.imdb.com/find?q=${movieQuery}`, '_blank');
    }
}

// Movie search from local drive
const movies = [
    { name: "The Gorge", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Lucky Baskhar", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Mufasa: The Lion King", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Chhaava", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Marco", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Baby John", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Deadpole", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Weekend in Taipei", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Kill", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "John Wick 2", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Uncharted", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Kraven The Hunter", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" },
    { name: "Red One", path: "https://drive.google.com/drive/folders/19d0iS5xvIqS2TZpx5olGVyF5TqKKgueD?usp=sharing" }
    // Add more movies as needed
];

// Attach search functionality to search button and input
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-bar');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            if (!query) return;

            // Find movie by name (case-insensitive, partial match)
            const found = movies.find(m => m.name.toLowerCase().includes(query) && m.path);

            if (found) {
                window.open(found.path, '_blank');
            } else {
                alert('Movie not found or not available!');
            }
        });

        // Optional: allow Enter key to trigger search
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
});

document.querySelector('.profile-arrow').addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('profileDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Hide dropdown when clicking outside
document.addEventListener('click', function() {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.style.display = 'none';
});

document.querySelectorAll('.profile-dropdown-item').forEach(function(item) {
    if (item.textContent.trim() === 'Logout') {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = "login.html";
        });
    }
});

document.querySelectorAll('.arrow').forEach(function(arrow) {
    arrow.addEventListener('click', function() {
        // Find the nearest movie-list to this arrow
        const movieList = arrow.closest('.movie-list-wrapper').querySelector('.movie-list');
        // Scroll right by 300px (adjust as needed)
        movieList.scrollBy({ left: 300, behavior: 'smooth' });
    });
});
