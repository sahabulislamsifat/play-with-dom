// Traversing DOM Elements ***

// Single Element Selector *

// console.log("Testing.....");
// const header = document.getElementById("header");

// console.log(header);
// header.style.color = "red";

// const paragraphClass = document.querySelector(".paragraph-class");

// console.log(paragraphClass);
// paragraphClass.style.color = "blue";
//
// const paragraphId = document.getElementById("paragraph-id");

// console.log(paragraphId);
// paragraphId.style.color = "violet";

// Multiple Element Selector *

// const myTags = document.getElementsByTagName("p");
// const myTags = document.getElementsByTagName("p")[0];

// console.log(myTags);
// console.log(myTags.innerHTML);

// for (let i = 0; i < myTags.length; i++) {
//   console.log(myTags[i]);
// }
// for (let i = 0; i < myTags.length; i++) {
//   //   console.log(myTags[i]);
//   const elementsStyle = myTags[i];
//   elementsStyle.style.background = "green";
//   elementsStyle.style.color = "white";
// }

// const allClassParagraph = document.getElementsByClassName("paragraph-class");

// console.log(allClassParagraph);
// for (let i = 0; i < allClassParagraph.length; i++) {
//   // console.log(allClassParagraph[i]);
//   const customStyle = allClassParagraph[i];
//   customStyle.style.background = "blue";
//   customStyle.style.color = "white";
// }

// const myParas = document.querySelectorAll(".paragraph-class");

// // console.log(myParas);

// for (let item of myParas) {
//   // console.log(item);
//   item.style.color = "red";
// }

// Node Vs Elements

// const nodeVsElements = document.querySelector(".container-two");

// console.log(nodeVsElements.children);
// console.log(nodeVsElements.childNodes);

// const ItemTwo = document.getElementById("item-2");

// console.log(ItemTwo);
// const itemParent = ItemTwo.parentElement;
// const itemParent = ItemTwo.parentElement.children;

// console.log(itemParent);

// Sibling

// const nextSibling = ItemTwo.nextElementSibling;
// const previousSibling = ItemTwo.previousElementSibling;

// console.log(nextSibling);
// console.log(previousSibling);

// const somethingSibling = ItemTwo.previousSibling;

// console.log(somethingSibling);

// innerText || textContent || innerHTML
// const containerFour = document.querySelector(".container-four");

// console.log(containerFour.innerText);
// console.log(containerFour.textContent);
// console.log(containerFour.innerHTML);

// setAttribute() || getAttribute() || removeAttribute()
// const myButton = document.getElementById("click-btn");

// myButton.setAttribute("class", "btn btn-primary");
// myButton.setAttribute("class", "btn btn-primary common-class");

// myButton.setAttribute("disabled", true);

// myButton.removeAttribute("disabled");

// console.log(myButton);

// const myLink = document.getElementById("myLink");

// myLink.getAttribute("title");

// const link = myLink.getAttribute("href");
// const link = myLink.getAttribute("title");

// console.log(myLink);
// console.log(link);

// Creating an element and append || add class name || classList[add(), remove()] || append child vs append || remove() or remove child()

const containerFive = document.querySelector(".container-five");

// console.log(containerFive);

// const p = document.createElement("p");
const p = document.createElement("p");

// console.log(p);
p.innerText = "I am created by JS dynamically.";

// containerFive.appendChild(p);
containerFive.append(p, "Hello there how are you?");

const h1 = document.createElement("h3");
h1.textContent = "I am h3, and I can inject to HTML through JS";

containerFive.appendChild(h1);

// p.classList.add("common-class");

// p.className = "common-class";
// p.classList.remove('common-class')

// Remove and removeChild
// document.getElementById("remove").remove();
// containerFive.remove()
// containerFive.removeChild(h1);
