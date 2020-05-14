
//LANDING PAGE
// let item1 = document.getElementById("item1");
// let item2 = document.getElementById("item2");
// let item3 = document.getElementById("item3");
// let item4 = document.getElementById("item4");
// let item5 = document.getElementById("item5");
//
// item1.addEventListener("click", openDropdown);
// item2.addEventListener("click", openDropdown);
// item3.addEventListener("click", openDropdown);
// item4.addEventListener("click", openDropdown);
// item5.addEventListener("click", openDropdown);
//
// function openDropdown() {
//
//   let newDropdown = document.createElement("DIV");
//   newDropdown.classList.add("newDropdown");
//
//   let newParagraph = document.createElement("A");
//   newParagraph.innerHTML = json['newPage'];
//
//
//   item1.appendChild(newDropdown);
//
//
//
//
//   console.log("dropdown complete");
//
// }

















// VIDEOS.HTML
var context;
var x=100;
var y=200;
var dx=3;
var dy=3;

function init() {
  context= myCanvas.getContext('2d');
  setInterval(draw, 10);

  // canvas = document.getElementById("myCanvas");
  // canvas.width = document.body.clientWidth;
  // canvas.height = document.body.clientHeight;
  // canvasW = canvas.width;
  // canvasH = canvas.height;
  //
  // if( canvas.getContext ) {
  //   setup();
  //   setInterval( run, 33 );
  // }
}

function draw() {
  context.clearRect(0,0, 1000, 1000);
  context.beginPath();
  context.fillStyle= "#0000ff";
  //Draws a circle of radius 20 at the coordinates 100, 100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
  //Boundary Logic
  if( x<0 || x>1000) dx=-dx;
  if( y<0 || y>1000) dy=-dy;
  x+=dx;
  y+=dy;
}





//NEWS.HTML




//SHOP.HTML

// let shopPage = document.getElementById("shopPage");
//
//
// let childSafe = document.createElement("DIV")
// childSafe.classList.add("childSafe");
//
// let newPara = document.createElement("P");
// newPara.classList.add("safePara");
// newPara.innerHTML = "Whoa there! How old are you?";
// childSafe.appendChild(newPara);
//
// let buttonDiv = document.createElement("DIV");
// buttonDiv.classList.add("buttonDiv");
// let newInput = document.createElement("INPUT");
// newInput.setAttribute("id", "inputId");
// let newButton = document.createElement("BUTTON");
// newButton.setAttribute("id", "buttonId");
// newButton.innerHTML = "Validate";
// // newLink = document.getElementById("A");
// // newLink.src = "shop.html";
// // newLink.appendChild(newButton);
//
// buttonDiv.appendChild(newInput);
// buttonDiv.appendChild(newButton);
// childSafe.appendChild(buttonDiv);
//
// let extraDiv = document.createElement("DIV");
// extraDiv.classList.add("extraDiv");
// childSafe.appendChild(extraDiv);
//
// shopPage.appendChild(childSafe);
//
//
// newButton.addEventListener("click", ageValidator);
//
// function ageValidator() {
//   if (newInput.value >= 18) {
//     alert("Are you sure you are " + newInput.value + "?");
//     alert("You must get your parents approval");
//
//     extraDiv.innerHTML = "<a href=\'shop-2.html\' id=\'newLink\'>Access Granted</a>"
//   }
//
//   if (newInput.value >= 50) {
//     extraDiv.innerHTML = "Okay boomer <br> <a href=\'shop-2.html\' id=\'newLink\'>Access Granted</a>"
//   }
//
//   if (newInput.value < 18) {
//     extraDiv.innerHTML = "Good enough <br> Don't break the bank <br> <a href=\'shop-2.html\' id=\'newLink\'>Break the Bank</a>"
//   }
//
// }






//COMMUNICATE.HTML

let textArray = [
  "placeHoldZero",
  "Hello. What is you SSN?",
  "Credit card info?",
  "How do you like the internet?",
  "Yes, this is true power",
  "Btw, have you tried out the Shoppe? It's a great place to spend money on the internet.",
  "There is a secret way to access YouTube.com. Would you like to know?"
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

let i = 0;

function receiveMessage() {
  let recMessage = document.createElement("P");
  recMessage.classList.add("compMessage");
  recMessage.innerHTML = textArray[i];

  textBox.appendChild(recMessage);

  console.log("message received");
}

function sendMessage() {
  let newMessage = document.createElement("P");
  newMessage.classList.add("userMessage");
  newMessage.innerHTML = sendInput.value;
  newMessage.innerHTML = document.write(Date());

  textBox.appendChild(newMessage);

  i+=1;

  // receiveMessage();

  console.log("button click");

}





let title = document.getElementById("titleId");

function easterEgg() {
  // let title = document.getElementById("titleId");

  let easterEggLink = document.createElement("P");
  easterEggLink.classList.add("title");
  easterEggLink.classList.add("eggFadeIn");
  easterEggLink.innerHTML = "<a href=\'secret.html\' id=\"secretLinkId\">Secret Egg Chat</a>";

  title.appendChild(easterEggLink);
  console.log("secret");
}
