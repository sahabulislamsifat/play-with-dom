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

const myParas = document.querySelectorAll(".paragraph-class");

// console.log(myParas);

for (let item of myParas) {
  // console.log(item);
  item.style.color = "red";
}
