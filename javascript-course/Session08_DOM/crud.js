// 1. document.creatElement: Tạo ra Element trong javascript
const div = document.createElement("div");



// 2. selector.appendChild
// document.body -> thẻ body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";
div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus suscipit tempora animi quam perferendis alias fuga doloribus! Inventore odio necessitatibus laborum magni consectetur, eum sit mollitia esse facilis voluptas repellendus."
div.innerHTML = `<div class="content"><h3></h3></div>`;
div.setAttribute("data-name", "hieunghia")

// bài tập: tạo ra HTML như đã minh họa ở file index3.html
const card = document.createElement("div");
card.classList.add("card");
const cardImage = document.createElement("img");
cardImage.setAttribute("src", "https://i.pinimg.com/736x/d7/8d/9d/d78d9d7061dac28debe593f0f8642180.jpg");
cardImage.setAttribute("class", "card-image");
card.appendChild(cardImage);
body.appendChild(card);



// 3. document.createTextNode
const text = document.createTextNode("Hello my name is Nghĩa");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);

// 4. element.cloneNode
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);

// 4. element.hasChildNodes: kiểm tra element có phần tử con hay không, nếu có trả về true
// console.log(h1.hasChildNodes());
console.log(document.querySelector("h3").hasChildNodes());