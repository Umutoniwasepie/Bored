function generateHumor() {
    const captions = [
        "I told my wife she should embrace her mistakes. She gave me a hug.",
        "Why don't scientists trust atoms? Because they make up everything!",
        "I only know 25 letters of the alphabet. I don't know y.",
        "I'm on a whiskey diet. I've lost three days already.",
        "Why did the computer go to therapy? It had too many bytes of emotional baggage!",
        "I used to play piano by ear, but now I use my hands and fingers.",
    ];

    const randomIndex = Math.floor(Math.random() * captions.length);
    const humor = captions[randomIndex];

    displayHumorResult(humor);
}

function displayHumorResult(humor) {
    const resultText = document.getElementById('resultText');
    const humorResult = document.getElementById('humorResult');

    resultText.textContent = `Humor: ${humor}`;
    humorResult.classList.remove('hidden');
}
