document.addEventListener('DOMContentLoaded', function() {
    const fortunes = [
        { text: "Yes, definitely.", color: "green" },
        { text: "No way.", color: "red" },
        { text: "Maybe, try again later.", color: "orange" },
        { text: "Definitely not.", color: "darkred" },
        { text: "It is certain.", color: "blue" },
        { text: "Ask again later.", color: "purple" }
    ];

    const magicButton = document.getElementById('magicButton');

function getFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selectedFortune = fortunes[randomIndex];

    const fortuneDisplay = document.getElementById('fortuneDisplay');
    fortuneDisplay.innerHTML = selectedFortune.text;
    fortuneDisplay.style.color = selectedFortune.color;
}
});
