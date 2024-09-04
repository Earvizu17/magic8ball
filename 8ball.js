// Array of fortune objects with associated colors
const fortunes = [
    { text: "without a doubt", color: "#28a745" },
    { text: "goodluck, bad news", color: "#dc3545" },
    { text: "ask later, im busy", color: "#ffc107" },
    { text: "yes yes yes", color: "#007bff" },
    { text: "better pray man", color: "#6c757d" },
    { text: "yea but soon though", color: "#17a2b8" }
];

function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

document.getElementById('magicButton').addEventListener('click', () => {
    const fortune = getRandomFortune();
    const fortuneDisplay = document.getElementById('fortuneDisplay');
    fortuneDisplay.innerHTML = fortune.text;
    fortuneDisplay.style.color = fortune.color;
});
