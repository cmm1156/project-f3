
document.addEventListener('DOMContentLoaded', function(event) {
  var rellax = new Rellax('.rellax');
});












//PASSWORD

let passwordDiv = document.getElementById("passwordDiv");

let newDiv = document.createElement("DIV");
newDiv.classList.add("newDiv")

let newInput = document.createElement("INPUT");
newInput.classList.add("newInput");
newInput.type = "password";
let newButton = document.createElement("BUTTON");
newButton.classList.add("newButton");
newButton.innerHTML = "Enter";

newDiv.appendChild(newInput);
newDiv.appendChild(newButton);

newDiv.style.marginBottom = "30vh";

passwordDiv.appendChild(newDiv);

newButton.addEventListener("click", passwordFunction);

let password = "password";

function passwordFunction() {
  if (newInput.value == "password") {
    let newPage = document.createElement("A");
    newPage.classList.add("newPage");
    newPage.href = "https://cmm1156.github.io/project1/";
    newPage.innerHTML = "Backdoor";

    alert("User: King of the Internet // Password: Correct // Welcome")

    newDiv.appendChild(newPage);
  }

}
