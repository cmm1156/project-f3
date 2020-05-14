
let shopJson = [

  {
    "image" : "images/tshirt.jpg",
    "name" : "T-Shirt",
    "descrip" : "100% Cotton",
    "price" : "Buy now: $100",
  },

  {
    "image" : "images/hat.jpg",
    "name" : "Hat",
    "descrip" : "Show it to all your Internet friends!",
    "price" : "Buy now: $200",
  },

  {
    "image" : "images/tie.jpg",
    "name" : "Necktie",
    "descrip" : "Available in clip-on style<br>100% silk",
    "price" : "Buy now: $50",
  },

  {
    "image" : "images/dummies.jpg",
    "name" : "The Internet For Dummies",
    "descrip" : "A guide written by yours truly",
    "price" : "Buy now: Free",
  },

]


let mainContainer = document.getElementById("mainContainer");


for (i = 0; i < shopJson.length; i++) {

  let newItem = document.createElement("DIV");
  newItem.classList.add("newItem");


  let newImage = document.createElement("IMG");
  newImage.classList.add("newImage");
  newImage.src = shopJson[i].image;
  newItem.appendChild(newImage);


  let textDiv = document.createElement("DIV");
  textDiv.classList.add("textDiv");

  let newName = document.createElement("P");
  newName.classList.add("itemName");
  newName.innerHTML = shopJson[i].name;
  textDiv.appendChild(newName);

  let newDescrip = document.createElement("P");
  newDescrip.classList.add("newDescrip");
  newDescrip.innerHTML = shopJson[i].descrip;
  textDiv.appendChild(newDescrip);

  let newPrice = document.createElement("P");
  newPrice.classList.add("newPrice");
  newPrice.innerHTML = shopJson[i].price;
  textDiv.appendChild(newPrice);

  newItem.setAttribute("id", "newItem" + i);
  newItem.appendChild(textDiv);

  mainContainer.appendChild(newItem);

}
