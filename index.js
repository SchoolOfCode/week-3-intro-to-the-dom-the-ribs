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
const firstP = document.querySelector(".content")
firstP.textContent = "This paragraph has been updated."

//3d
const secondP = document.querySelectorAll(".content")[1]
//console.log(secondP)
secondP.title = "Hover over me!"