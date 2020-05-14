
let mainDiv = document.getElementById("mainDiv");
mainDiv.classList.add("mainDiv");

let typingDiv = document.getElementById("typingDiv");
typingDiv.classList.add("typingDiv");



let inputAndButtonDiv = document.createElement("DIV");
inputAndButtonDiv.classList.add("inputAndButtonDiv");

let inputElement = document.createElement("INPUT");
inputElement.type = "text";
inputElement.name = "mytextfield";
inputElement.classList.add("inputElement");
inputAndButtonDiv.appendChild(inputElement);

let buttonElement = document.createElement("BUTTON");
buttonElement.classList.add("buttonElement");
buttonElement.innerHTML = "Send";
inputAndButtonDiv.appendChild(buttonElement);

typingDiv.appendChild(inputAndButtonDiv);


buttonElement.addEventListener("click", userMessage, choosingPath);






let storyDatabase = [
  {
    'yes' : 'yesAnswer',
    'no' : 'noAnswer',
  },

  {
    'yes' : "Yes? rly? Tell me again just to make sure",
    'no' : "Didn't you just respond?",
  },
  {
    'yes' : "Very good. Listen we only have 5 minutes before <br><span class=\"spacer\">__</span>they can track us and i need to shut down the page. Do you know who i am?",
    'no' : "i can wait. Do you know who I am?",
  },
  {
    'yes' : "If that were true, i\'d have to kill you. i am called M0535. <br>" + "<span class=\"spacer\">__</span>" + "i embeded the link you found, understand?",
    'no' : "How unfortunate. i am M0535, got that? <br>" + "<span class=\"spacer\">__</span>" + "i embeded the link you found, understand?",
  },

  {
    'yes' : "Good, do u know what this is?",
    'no' : "You must, it's the only way to get here. Do you know what this is?",
  },

  {
    'yes' : "I am glad you already know that this is a backdoor to The Internet",
    'no' : "This is the backdoor to the Internet. Ok?",
  },

  {
    'yes' : 'There is much to be explained. First what can I call you?',
    'no' : 'I don\'t have time to play games. What can I call you?',
  },

  { //k=7
    'yes' : "",//"Ok " + insertname + ". You need to keep this on the dl, k?",
    'no' : "",//"Ok " + insertname + ". You need to keep this on the dl, k?",
  },

  { //k=8
    'yes' : 'Good. You\'ll remember that the web wasn\'t always this way, right?',
    'no' : 'Fine, I will find someone else',
  },

  { //k=9
    'yes' : 'Yeah, Ever since the King bought out every ISP and towers people like me have been <br><span class=\"spacer\">__</span>searching for a way to access what used to be. remember?',
    'no' : 'Did you think the web was always this way? They talked about remote brainwash, but i never thought they could actually do it.',
  },

  {
    'yes' : 'Basically, the web was a place for creation, you\'ll see what i mean by the end of this',
    'no' : 'Basically, the web was a place for creation, you\'ll see what i mean by the end of this',
  },

  {
    'yes' : 'Well no time to tell the whole story. Basically, you are going to break through the <br><span class=\"spacer\">__</span>barrier and get access to the true internet. You with me?',
    'no' : 'Well no time to tell the whole story. Basically, you are going to break through the <br><span class=\"spacer\">__</span>barrier and get access to the true internet. You with me?',
  },

  {//k=12
    'yes' : 'Great. Here is what you need to do. Let me know when you\'re ready for your first instruction.',
    'no' : 'Fine, I will find someone else',
  },

  {
    'yes' : 'Ok, first you will need to navigate to the Ads page. At the very bottom there is a line of text, ok?',
    'no' : 'Fine, I will find someone else',
  },
  {
    'yes' : 'Next, navigate to the Videos page',
    'no' : 'Fine, I will find someone else',
  },
  {
    'yes' : 'Scroll past the colored squares',
    'no' : 'Fine, I will find someone else',
  },
  {
    'yes' : 'Then, keep going until you see the Mona Lisa image',
    'no' : 'Fine, I will find someone else',
  },
  {
    'yes' : 'You\'re on the right track. Scroll to the very bottom, you will see an input box',
    'no' : 'Fine, I will find someone else',
  },
  {
    'yes' : 'Now type the text you found backwards into the box',
    'no' : 'You failed, we\'re all doomed',
  },

  {
    'yes' : 'Now you can see an example of the real internet. They\'ve almost cracked the address. I need to shut shut down. Good luck',
    'no' : 'You failed, you\'ve doomed us all',
  },

  { //k=20
    'yes' : 'M0535 has left the chat',
    'no' : 'M0535 has left the chat',
  },

]

// console.log(storyDatabase[0].yes);





let i = 1; // line number asthetic
let k = 1; // positive
// let q = 0; // negative


function userMessage() {
  let messageContent = inputElement.value;

  let newMessageLine = document.createElement("P");
  newMessageLine.innerHTML = i + " " + messageContent;
  mainDiv.appendChild(newMessageLine);
  // console.log(inputElement.value); //keep
  i += 1;

  choosingPath();

  // inputElement.value = "";
}



function computerMessageForYes() {
  let computerMessageContent = storyDatabase[k].yes;

  let newComputerMessageLine = document.createElement("P");
  newComputerMessageLine.innerHTML = i + " " + computerMessageContent;
  k+=1;

  mainDiv.appendChild(newComputerMessageLine);
  i+=1;
}

function computerMessageForNo() {
  let computerMessageContent = storyDatabase[k].no;
  let newComputerMessageLine = document.createElement("P");

  if (k !== 8) {
    newComputerMessageLine.innerHTML = i + " " + computerMessageContent;
    k+=1;
  }

  else if (k == 8 || k >= 12) {
    newComputerMessageLine.innerHTML = i + " " + computerMessageContent;
    setTimeout(window.close(), 3000);
    // k+=1;
  }

  else if (k >= 20) {
    newComputerMessageLine.innerHTML = i + storyDatabase[20].no;
    k+=1;
    setTimeout(window.close(), 5000);
  }

  mainDiv.appendChild(newComputerMessageLine);
  i+=1;
}

function computerMessageForOther() {
  let newComputerMessageLine = document.createElement("P");

  if (k == 7) {
    newComputerMessageLine.innerHTML = i + " Ok " + inputElement.value + ". You need to keep this on the dl, k?"
    k+=1;
    i+=1;
  }

  else if (k >= 20) {
    newComputerMessageLine.innerHTML = i + storyDatabase[20].no;
    k+=1;
    setTimeout(window.close(), 5000);
  }

  else {
    newComputerMessageLine.innerHTML = i + " " + "Please respond with y or n";
    i += 1;
  }

  mainDiv.appendChild(newComputerMessageLine);
}



function choosingPath() {
  let currentUserMessage = inputElement.value;

  if (currentUserMessage.includes("y") == true) {
    // computerMessageForYes();
    setTimeout(computerMessageForYes, 1500);
  }
  else if (currentUserMessage.includes("n") == true) {
    // computerMessageForNo();
    setTimeout(computerMessageForNo, 1500);
  }
  else {
    // computerMessageForOther();
    setTimeout(computerMessageForOther, 500);
  }
}


// setTimeout(window.close(), 5000);




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






//spacerhelper
