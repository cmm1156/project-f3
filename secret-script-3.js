
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



computerJsonK = [
  //Hello? Is anyone there?
  "Yes? really? Tell me again just to make sure", //1
  "Very good. Do you know who I am?", //2
  "If that were true, I'd have to kill you. I am M0535. <br>" + "<span class=\"spacer\">__</span>" + "I embeded the link you found, understand?",
  "Good, do you know what this is?", //4
  "I am glad you already know that this is a backdoor to The Internet", //5
  "What can I call you?", //6
  "copy", //7
];

computerJsonQ = [
  //Hello? Is anyone there?
  "Didn't you just respond?", //1
  "Oh no", //2
  "Ah, my reputation preceeds me. I am M0535, got that? <br>" + "<span class=\"spacer\">__</span>" + "I embeded the link you found, understand?",
  "Oh, well this is this is the backdoor to The Internet, got it?", //5
  "I don't have time for games, we need to get down to business. Ok?", //5
  "First, what can I call you?", //6
  "", //7
];


let myjson = [

  {
    "yes" : "Yes? really? Tell me again just to make sure",
    "no" : "Didn't you just respond?"
  },

  {
    "yes" : "Very good. Do you know who I am?",
    "no" : "Oh no",
  },

]

console.log(myjson['yes']);



let i = 1; // line number asthetic
let k = 0; // positive
let q = 0; // negative


function userMessage() {
  let messageContent = inputElement.value;

  let newMessageLine = document.createElement("P");
  newMessageLine.innerHTML = i + " " + messageContent;
  mainDiv.appendChild(newMessageLine);
  // console.log(inputElement.value); //keep

  i += 1;

  choosingPath();
}



function computerMessageForYes() {
  let computerMessageContent = computerJsonK[k];
  let newComputerMessageLine = document.createElement("P");

  if (i != 14) {
    newComputerMessageLine.innerHTML = i + " " + computerMessageContent;
    k += 1;
    // q += 1;
  }

  if (i == 14) {
    newComputerMessageLine.innerHTML = i + " " + "Ok " + inputElement.value + ". There is a secret that the King does not want you to know.";
    k += 1;
    // q += 1;
  }

  mainDiv.appendChild(newComputerMessageLine);
  i+=1;
}

function computerMessageForNo() {
  let computerMessageContent = computerJsonQ[k];
  // let computerMessageContent = computerJsonQ[q];
  // let computerMessageContent = piece[0];

  let newComputerMessageLine = document.createElement("P");
  newComputerMessageLine.innerHTML = i + " " + computerMessageContent;
  // q += 1;
  k += 1;


  mainDiv.appendChild(newComputerMessageLine);
  i+=1;
}

function computerMessageForNone() {
  let newComputerMessageLine = document.createElement("P");
  newComputerMessageLine.innerHTML = i + " " + "Please respond with y or n";
  mainDiv.appendChild(newComputerMessageLine);
  i += 1;
}






// function choosingPath() {
//   let currentUserMessage = inputElement.value;
//
//   if (currentUserMessage.includes("y") == true) {
//     computerMessageForYes();
//
//
//     // setTimeout(computerMessageForYes, 2000);
//     // console.log("yes please"); //keep
//   }
//
//   else if (currentUserMessage.includes("n") == true) {
//     computerMessageForNo();
//     // setTimeout(computerMessageForNo, 2000);
//     //console.log("no thankyou"); //keep
//   }
//
//   else {
//     computerMessageForNone();
//     // setTimeout(computerMessageForNone, 500);
//     //console.log("error"); //keep
//   }
//
// }



function choosingPath() {
  let currentUserMessage = inputElement.value;

  if (i == 2 && currentUserMessage.includes("y") == true) {
    computerMessageForYes();
  }

  else if (i == 4 && currentUserMessage.includes("y") == true) {
    computerMessageForYes();
  }

  else if (i == 6 && currentUserMessage.includes("y") == true) {
    computerMessageForYes();
  }

  else if (i == 8 && currentUserMessage.includes("y") == true) {
    computerMessageForYes();
  }

  else if (i == 10 && currentUserMessage.includes("y") == true) {
    computerMessageForYes();
  }

  else if (i == 12 && currentUserMessage.includes("y") == true) {
    computerMessageForYes();
  }

  else if (i == 14 && currentUserMessage.includes("y") == true) {
    computerMessageForYes();
  }


  //#### negatives


  if (i == 2 && currentUserMessage == "backdoor") {
    computerMessageForNo();
  }

  else if (i == 4 && currentUserMessage.includes("n") == true) {
    computerMessageForNo();
  }

  else if (i == 6 && currentUserMessage.includes("n") == true) {
    computerMessageForNo();
  }

  else if (i == 8 && currentUserMessage.includes("n") == true) {
    computerMessageForNo();
  }

  else if (i == 10 && currentUserMessage.includes("n") == true) {
    computerMessageForNo();
  }

  else if (i == 12 && currentUserMessage.includes("n") == true) {
    computerMessageForNo();
  }

  else if (i == 14 && currentUserMessage.includes("n") == true) {
    computerMessageForNo();
  }



}



//spacerhelper
