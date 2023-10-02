// const messagesArray = ["hello", "hey how are you "];
const messageContainer = document.body.querySelector("#message-container");
const sendMessageButton = document.body.querySelector("#send-button");
const joinRoomButton = document.body.querySelector("#room-button");
const roomInputField = document.body.querySelector("#room-input");
const messageInputField = document.body.querySelector("#message-input");

// for (let message of messagesArray) {
//   const newPara = document.createElement("p");
//   newPara.innerHTML = message;
//   messageContainer.appendChild(newPara);
// }

function addMessage(event) {
  event.preventDefault();
  if (messageInputField.value !== "") {
    const newPara = document.createElement("p");
    newPara.innerHTML = messageInputField.value;
    messageContainer.appendChild(newPara);
    messageInputField.value = "";
  }
}

function joinRoom(event) {
  event.preventDefault();
  if (roomInputField.value !== "") {
    const room = roomInputField.value;
    console.log(room);
    roomInputField.value = "";
  }
}

sendMessageButton.addEventListener("click", addMessage);
joinRoomButton.addEventListener("click", joinRoom);
