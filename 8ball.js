document.getElementById('ask-button').addEventListener('click', function() {
    const fortunes = [
        { text: "you are the father", color: "red" },
        { text: "dont do it", color: "green" },
        { text: "in 7 days", color: "black" },
        { text: "play some video games", color: "purple" },
        { text: "17...just 17", color: "blue" },
        { text: "no, hell no", color: "pink" }
    ];

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    
    const randomFortune = fortunes[randomIndex];
    
    const fortuneDisplay = document.getElementById('fortune-display');
    fortuneDisplay.innerHTML = randomFortune.text;
    fortuneDisplay.style.color = randomFortune.color;
});
