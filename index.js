//Ticket 1: selecting DOM elements
//1a
console.log(document.getElementById('title'));

//1b
const content = document.getElementsByClassName('content');
console.log(content);

//1c
const liElements = document.getElementsByTagName('li');
console.log(liElements)

//1d
const highlight = document.querySelector('.highlight'); //need the dot notaiton to indicate its a class
console.log(highlight)

//1e
const allHighlight = document.querySelectorAll('.highlight');
console.log(allHighlight)


//Ticket2: traversing the DOM
//2a
const itemList = document.querySelector("#itemList");
const firstChild = itemList.firstElementChild
console.log(firstChild.parentNode)

//2b
const childNode = itemList.childNodes
console.log(childNode)

//2c
const children = itemList.children
console.log(children)

//2d
const lastChild = itemList.lastElementChild
console.log(firstChild, lastChild)

//Ticket 3: Manipulating the DOM
//3a
const title = document.getElementById("title")
//title.style.color = "red"
//title.style.fontSize = "30px"
title.style.cssText = "color: red; fontsize: 30px;"
console.log(title)

//3b
const newP = document.createElement("p")
newP.textContent = "This is a dynamically added paragraph."
document.body.appendChild(newP)

//3C
const firstP = document.querySelectorAll(".content")
firstP.textContent = "This paragraph has been updated."

//3dModifying Attributes: Select the second `<p>` element with the class "content".
const secondP = document.querySelectorAll(".content")[1];
console.log(secondP)
//Add a title attribute with the value "Hover over me!" using JavaScript.
secondP.title = "Hover over me!"

//3e Adding and Removing Classes
const ulElement = document.getElementById("itemList");

//Add a new class "styled-list" to it using JavaScript.
ulElement.classList.add("styled-list");
console.log(ulElement);

//Select the `<li>` element with the content "🍌 Banana".
const bananaLi = document.querySelectorAll(".list-item")[1];

//Remove the class "list-item" from it using JavaScript.
bananaLi.classList.remove("list-item")
console.log(bananaLi)


//3f  Removing Elements
//Select the `<li>` element with the content "🍇 Date".
const dateLi = document.querySelectorAll('li')[3];


//Remove it from the DOM using JavaScript.
dateLiParent = dateLi.parentNode;
dateLiParent.removeChild(dateLi)
console.log(dateLiParent)