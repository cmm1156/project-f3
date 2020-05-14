

let messageArray = [
  "placeholder0", // 0
  "placeholder1", // 1
  "placeholder2", // 2
  "Yes? Do you read me?", // 3
  "placeholder4", // 4
  "Great! I can help you. Do you want my help?", // 5
  "placeholder6", // 6
  "Ok. I am M0535. This is the backdoor to The Internet. I planted the link you found <br>" + "<span class=\"spacer\">__</span>" + "on the WorldWide Message Boards.", //7
  "placeholder8", // 8
  "Do you follow me?", // 9
  "placeholder9", // 10
  "Well, stop following me or I'll have you arrested!... I kid. I know how to <br>" + "<span class=\"spacer\">___</span>" + "you can access the full internet. Got it?",
  "placeholder10", // 11
  "Ok. You will need to navigate to the \"Videos\" page. Got that?",
  "placeholder12", // 12
  "Scroll until you see three buttons. Ok?", // 13
  "placeholder14", // 14
  "There you will see three buttons. Red, blue, and green. Right?", // 15
  "placeholder16", // 16
  "Ok, scroll past the buttons until you see the Mona Lisa. K?",
  "placeholder18", // 18
  "Scroll to the very bottom. There is a password lock. Ok?",

]

let messageArrayTwo = [
  "placeholder0", // 0
  "placeholder1", // 1
  "placeholder2", // 2
  "What? You just replied \"no\". Do you copy?", //3
  "placeholder4", // 4
  "Really? Once more time.", // 5
  "placeholder6", // 6
  "Goodbye", // 7
  "placeholder8", // 8

]



// let messageJson = [
//
//   {
//     'yes' : ['y1', 'y2', 'y3', 'y4', 'y5' ],
//     'no' : ['n1', 'n2', 'n3', 'n4', 'n5' ],
//   }
//
// ]



let mainDiv = document.getElementById("mainDiv");
mainDiv.classList.add("mainDiv");

let typingDiv = document.getElementById("typingDiv");
typingDiv.classList.add("typingDiv");

let inputDiv = document.createElement("DIV");
inputDiv.classList.add("inputDiv");

let inputLine = document.createElement("INPUT");
inputLine.classList.add("inputLine");
inputLine.setAttribute("id", "inputLine");
let inputButton = document.createElement("BUTTON");
inputButton.classList.add("inputButton");
inputButton.setAttribute("id", "inputButton");
inputButton.innerHTML = "Send";

inputDiv.appendChild(inputLine);
inputDiv.appendChild(inputButton);

typingDiv.appendChild(inputDiv);

// let userMessage = document.createElement("P");
// let compMessage = document.createElement("P");

inputButton.addEventListener("click", sendMessage, storyMode);


let i = 2;



function storyMode() {
  let storyVar = inputLine.value;
  // alert(storyVar); //keep test

  if (storyVar.includes("y") == true) {
    // alert(true);
    setTimeout(receiveMessageOne, 2000);
  }
  else if (storyVar.includes("n") == true) {
    // alert(false);
    setTimeout(receiveMessageTwo, 2000);
  }

  else {
    setTimeout(receiveMessageNone, 500);
    // receiveMessageNone();
  }

  // console.log("story mode reached"); //keep
  // console.log(inputLine.value); //keep
  // alert(inputLine.value); //keep
}


function receiveMessageOne() {
  let recMessage = document.createElement("P");
  recMessage.classList.add("recMessage");
  recMessage.innerHTML = i + " " + messageArray[i];
  // recMessage.innerHTML = i + " " + messageJson['yes'][i];

  mainDiv.appendChild(recMessage);
  i+=1;
}

function receiveMessageTwo() {
  let recMessageTwo = document.createElement("P");
  recMessageTwo.classList.add("recMessageTwo");
  recMessageTwo.innerHTML = i + " " + messageArrayTwo[i];

  mainDiv.appendChild(recMessageTwo);
  i+=1;

  if (i == 8) {
    window.close();
  }
}

function receiveMessageNone() {
  i+=1;
  let recMessageNone = document.createElement("P");
  recMessageNone.classList.add("recMessageNone");
  recMessageNone.innerHTML = i + " " + "Sorry, I only understand \'yes\', \'no\', \'Yes\', \'No\', \'y\', or \'n\'";

  mainDiv.appendChild(recMessageNone);
}

function sendMessage() {
  // let newMessage = document.getElementById("newMessageId");
  let newMessage = document.createElement("P"); //test
  newMessage.classList.add("newMessage");
  newMessage.setAttribute("id", "newMessageId" + i); //test
  newMessage.innerHTML = i + " " + inputLine.value;

  mainDiv.appendChild(newMessage);

  storyMode()

  inputLine.value = "";

  function addi() {
    i+=1
  }

  setTimeout(addi, 750);

  // setTimeout(receiveMessage, 2000); // KEEP DEFINITE

}





//spacer
