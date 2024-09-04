document.getElementById('ask-button').addEventListener('click', function() {
    const fortunes = [
        { text: "Yes, definitely!", color: "green" },
        { text: "No way!", color: "red" },
        { text: "Maybe, try again later.", color: "blue" },
        { text: "Absolutely not.", color: "purple" },
        { text: "I wouldn't count on it.", color: "orange" },
        { text: "Yes, but only if you believe.", color: "teal" }
    ];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    
    // Get a random fortune
    const randomFortune = fortunes[randomIndex];
    
    // Display the fortune and set its color
    const fortuneDisplay = document.getElementById('fortune-display');
    fortuneDisplay.innerHTML = randomFortune.text;
    fortuneDisplay.style.color = randomFortune.color;
});
