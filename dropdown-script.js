
nameArray = ["Homepage", "Videos", "News", "Ads", "Store", "WWMB"];
linkArray = ["index.html", "videos.html", "news.html", "ads.html", "shop.html", "communicate.html"];


let menuTitle = document.getElementById("menuTitle");
menuTitle.classList.add("menuTitle");

let menuContent = document.getElementById("menuContent");
menuContent.classList.add("menuContent");
menuContent.style.display = "none";
menuContent.style.position = "absolute";

for (i = 0; i < nameArray.length; i++) {
  let newPara = document.createElement("P");
  newPara.setAttribute("id", "newLink" + i)

  let newLink = document.createElement("A");
  newLink.classList.add("newLink");
  newLink.href = linkArray[i];
  newLink.innerHTML = nameArray[i];

  newPara.appendChild(newLink);

  menuContent.appendChild(newPara);
}


let header = document.getElementById("header");
let dropdownBox = document.getElementById("dropdownBox");
dropdownBox.style.transition = ".5s";

dropdownBox.addEventListener("mouseover", dropdownAppear);
dropdownBox.addEventListener("mouseout", dropdownDisappear);

function dropdownAppear() {
  menuContent.style.transition = ".5s";
  menuContent.style.display = "block";
  menuContent.style.marginTop = "-10px";
  menuContent.style.position = "absolute";
}
function dropdownDisappear() {
  menuContent.style.transition = ".5s";
  menuContent.style.marginTop = "-268px";
  menuContent.style.position = "absolute";
  // menuContent.style.zIndex = "-1";
}
