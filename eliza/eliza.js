
const responses = {
    "hello": "Hello! How can I help you today?",
    "hi": "Hi there! How are you feeling?",
    "I am feeling": "Why do you say you are feeling that way?",
    "my name is": "Nice to meet you! What's on your mind?",
    "what": "Can you clarify your question?",
    "how": "I'm here to help! Can you tell me more?",
    "bye": "Goodbye! Take care."
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
