
let shopPage = document.getElementById("shopPage");


let childSafe = document.createElement("DIV")
childSafe.classList.add("childSafe");

let newPara = document.createElement("P");
newPara.classList.add("safePara");
newPara.innerHTML = "Whoa there! How old are you?";
childSafe.appendChild(newPara);

let buttonDiv = document.createElement("DIV");
buttonDiv.classList.add("buttonDiv");
let newInput = document.createElement("INPUT");
newInput.setAttribute("id", "inputId");
let newButton = document.createElement("BUTTON");
newButton.setAttribute("id", "buttonId");
newButton.innerHTML = "Validate";


buttonDiv.appendChild(newInput);
buttonDiv.appendChild(newButton);
childSafe.appendChild(buttonDiv);

let extraDiv = document.createElement("DIV");
extraDiv.classList.add("extraDiv");
childSafe.appendChild(extraDiv);

shopPage.appendChild(childSafe);


newButton.addEventListener("click", ageValidator);

function ageValidator() {
  if (newInput.value >= 18) {
    alert("Are you sure you are " + newInput.value + "?");
    alert("You must get your parents approval");

    extraDiv.innerHTML = "<a href=\'shop-2.html\' id=\'newLink\'>Access Granted</a>"
  }

  if (newInput.value >= 50) {
    extraDiv.innerHTML = "Okay boomer <br> <a href=\'shop-2.html\' id=\'newLink\'>Access Granted</a>"
  }

  if (newInput.value < 18) {
    extraDiv.innerHTML = "Good enough <br> Don't break the bank <br> <a href=\'shop-2.html\' id=\'newLink\'>Break the Bank</a>"
  }

}


// //end of page 1
//
//
// //start page 2
//
//
//
// let shopJson = [
//   {
//     "name" : "#",
//     "item" : "#",
//     "image" : "#",
//     "price" : "#"
//   },
//
//   {
//     "name" : "#",
//     "item" : "#",
//     "image" : "#",
//     "price" : "#"
//   },
//
// ]
//
//
// let mainShop = document.getElementById("mainShop");
//
// //Json structured items
//
//
// mainShop.appendChild("#####");
