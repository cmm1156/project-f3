
let mainDiv = document.getElementById("mainDiv");
mainDiv.classList.add("mainDiv");

let typingDiv = document.getElementById("typingDiv");
typingDiv.classList.add("typingDiv");



let inputAndButtonDiv = document.createElement("DIV");
inputAndButtonDiv.classList.add("inputAndButtonDiv");

let inputElement = document.createElement("INPUT");
inputElement.classList.add("inputElement");
inputAndButtonDiv.appendChild(inputElement);

let buttonElement = document.createElement("BUTTON");
buttonElement.classList.add("buttonElement");
buttonElement.innerHTML = "Send";
inputAndButtonDiv.appendChild(buttonElement);

typingDiv.appendChild(inputAndButtonDiv);


buttonElement.addEventListener("click", userMessage, choosingPath);



// computerJsonK = ["hi", "hello", "how are you?"];
// computerJsonQ = ["bye", "goodbye", "please leave"];

computerJsonK = [
  "Yes? really? Tell me again just to make sure",
];

computerJsonQ = [
  "Didn't you just respond?",
  "Oh no",
];


let piece = [
  ""
]



let i = 1; // line number asthetic
let k = 0; // positive
let q = 0; // negative


function userMessage() {
  let messageContent = inputElement.value;

  let newMessageLine = document.createElement("P");
  newMessageLine.innerHTML = i + " " + messageContent;
  mainDiv.appendChild(newMessageLine);
  i += 1;
  // console.log(inputElement.value); //keep

  choosingPath();
}





function computerMessageForYes() {
  let computerMessageContent = computerJsonK[k];

  let newComputerMessageLine = document.createElement("P");
  newComputerMessageLine.innerHTML = i + " " + computerMessageContent;
  k += 1;

  mainDiv.appendChild(newComputerMessageLine);
}

function computerMessageForNo() {
  let computerMessageContent = computerJsonQ[q];

  let newComputerMessageLine = document.createElement("P");
  newComputerMessageLine.innerHTML = i + " " + computerMessageContent;
  q += 1;

  mainDiv.appendChild(newComputerMessageLine);
}

function computerMessageForNone() {
  let newComputerMessageLine = document.createElement("P");
  newComputerMessageLine.innerHTML = i + " " + "Please respond with y or n";
  mainDiv.appendChild(newComputerMessageLine);
  i += 1;
}






function choosingPath() {
  let currentUserMessage = inputElement.value;

  if (currentUserMessage.includes("y") == true) {
    computerMessageForYes();
    // setTimeout(computerMessageForYes, 2000);
    // console.log("yes please"); //keep
  }

  else if (currentUserMessage.includes("n") == true) {
    computerMessageForNo();
    // setTimeout(computerMessageForNo, 2000);
    //console.log("no thankyou"); //keep
  }

  else {
    computerMessageForNone();
    // setTimeout(computerMessageForNone, 500);
    //console.log("error"); //keep
  }

}









//spacerhelper
