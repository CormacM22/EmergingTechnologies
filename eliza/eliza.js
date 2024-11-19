// add multiple possible respones to the same keyword - Makes the converstation less repetitive
const responses = {
    "hello|hi|hey": [
        "Hi there! How can I help?",
        "Hello! What’s on your mind?",
        "Hey! How are you feeling today?"
    ],
    "how are you": [
        "I'm here to assist you. How are you?",
        "I'm just a bot, but I'm doing great. How can I help you?",
        "Feeling ready to chat! What's up?"
    ],
    "bye|goodbye": [
        "Goodbye! Take care!",
        "Bye! Hope to chat with you again soon!",
        "See you later! Have a great day!"
    ]
};


// response logic randomly selects one of the options
function processUserInput() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    document.getElementById("user-input").value = "";

    let response = "I'm not sure I understand. Can you tell me more?";
    
    for (let pattern in responses) {
        const regex = new RegExp(pattern, "i");
        if (regex.test(userInput)) {
            const possibleResponses = responses[pattern];
            response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
            break;
        }
    }

    const chatDisplay = document.getElementById("chat-display");
    chatDisplay.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatDisplay.innerHTML += `<p><strong>ELIZA:</strong> ${response}</p>`;
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

