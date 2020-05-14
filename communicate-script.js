
let textArray = [
  "placeHoldZero", //0
  "Hello. What is you SSN?", //1
  "Credit card info?", //2
  "Thank you. How do you like the internet?", //3
  "Yes, this is true power", //4
  "Btw, have you tried out the Shoppe? It's a great place to spend money on the internet.", //5
  "*Hacking in progress*",
  "Quickly, I have important information for you, click this <a href=\"secret.html\">link</a>", //7
  "*System compromised*", //8
]

let textBox = document.getElementById("textBox");

let typeBox = document.getElementById("typeBox");
let sendInput = document.getElementById("sendInputId");
let sendButton = document.getElementById("sendButtonId");

let userMessage = document.createElement("DIV");
userMessage.classList.add("userMessage");
let compMessage = document.createElement("DIV");
compMessage.classList.add("compMessage");

sendButton.addEventListener("click", sendMessage);
// sendButton.addEventListener("click", document.getElementById("sendInputId") = '');

let i = 0;
let k = 1;


function receiveMessage() {
  let recMessage = document.createElement("DIV");
  recMessage.classList.add("compMessage");

  if (k <= 7) {
    let newDate = document.createElement("P");
    recMessage.innerHTML = textArray[k];
    newDate.innerHTML = Date();
    newDate.classList.add("date");

    recMessage.appendChild(newDate);

    k+=1;
  }

  else {
    recMessage.innerHTML = textArray[8];
    k+=1;
  }

  textBox.appendChild(recMessage);

  // console.log("message received"); //keep
}


function sendMessage() {
  let flexDiv = document.createElement("DIV");
  flexDiv.classList.add("flexDiv");

  let newMessage = document.createElement("DIV");
  newMessage.classList.add("userMessage");
  newMessage.innerHTML = sendInput.value;
  let newDate = document.createElement("P");
  newDate.innerHTML = Date();
  newDate.classList.add("date");
  newMessage.appendChild(newDate);

  flexDiv.appendChild(newMessage)

  textBox.appendChild(flexDiv);

  sendInput.value = "";

  i+=1;

  setTimeout(receiveMessage, 2000);

  // console.log("button click"); // keep
}
