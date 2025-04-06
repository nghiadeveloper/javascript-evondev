// 1. DOM (Document Object Model)
// DOM Attribute: gồm các thẻ: html, body, head, a, b, i,...
// DOM Node: gôm các thuộc tính của thẻ: src, type,...



// 2. Selecting nodes

// 2.1. documennt.querySelector("selector"): trả về 1 node nếu tồn tại selector đó, ngược lại sẽ trả về null
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container .header");


// 2.2. document.querySelectorAll("selector"): trả về 1 NodeList chứa danh sách các node, nếu không có thì trả về empty
// nó có thể loop và sử dụng forEach
// nó giống array là có thể loop nhưng không sử dụng được các phương thức như: push, pop, shift,...
const multiNodes = document.querySelectorAll(".item");
// for(let i = 0; i < multiNodes.length; i++) {
//     console.log(multiNodes[i]);
// }


// 2.3. document.getElementsByClassName("className"): trả về 1 HTML Collection chứa danh sách các node, nếu không có thì trả về empty []
const classNodes = document.getElementsByClassName("item");

// 2.4. document.getElementsByTagName("tagName"): trả về 1 HTML Collection chứa danh sách các node, nếu không có thì trả về empty []
const tagNodes = document.getElementsByTagName("h1");

// 2.5. document.getElementById("id"): trả về 1 node có id đó, nếu không có trả về null
const idNode = document.getElementById("spinner");