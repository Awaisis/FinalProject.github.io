function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

const tips = [
    "Use semantic tags like <section> and <article> for structure.",
    "Avoid inline styles in HTML!",
    "Use Flexbox to center things easily.",
    "Use const and let instead of var in JavaScript.",
    "Add alt text to all <img> tags for accessibility."
];

/*I used AI to assist me in the tip function*/
function showTip() {
    const random = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tipDisplay").textContent = random;
}

/*I used AI to assist me in the function for toggleFavorite*/
function toggleFavorite(button) {
    const card = button.closest(".flashCard");
    card.classList.toggle("favorited");
}
