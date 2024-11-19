// add multiple possible respones to the same keyword - Makes the converstation less repetitive.
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



function processUserInput() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    document.getElementById("user-input").value = ""; // Clear the input field

    // Default response if no keywords match
    let response = "I'm not sure I understand. Can you tell me more?";
    for (let keyword in responses) {
        if (userInput.includes(keyword)) {
            response = responses[keyword];
            break;
        }
    }


    const chatDisplay = document.getElementById("chat-display");
    chatDisplay.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatDisplay.innerHTML += `<p><strong>ELIZA:</strong> ${response}</p>`;
    chatDisplay.scrollTop = chatDisplay.scrollHeight;  // Auto-scroll to the latest message
}
