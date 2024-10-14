// Open chat modal
function openChat() {
  document.getElementById("chatModal").style.display = "flex";
}

// Close chat modal
function closeChat() {
  document.getElementById("chatModal").style.display = "none";
}

// Send message functionality
function sendMessage() {
  const chatBody = document.getElementById("chatBody");
  const message = document.getElementById("chatMessage").value;

  if (message.trim() !== "") {
    // Create a new message bubble (user message)
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerText = message;
    chatBody.appendChild(userMessage);

    // Scroll to the bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // Clear the input field
    document.getElementById("chatMessage").value = "";

    // Simulate a reply from admin/bot after a delay (for demo purposes)
    setTimeout(function () {
      const botReply = document.createElement("div");
      botReply.classList.add("message");
      botReply.innerText = "Hello! How can I help you?";
      chatBody.appendChild(botReply);

      // Scroll to the bottom
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
  }
}
