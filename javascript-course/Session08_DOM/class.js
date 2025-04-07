// 1. Các phương thức về class

// 1.1. selector.classList.add("className")
const container = document.querySelector(".container");
container.classList.add("is-active");

// 1.2. selector.classList.remove("className")
container.classList.remove("is-active");

// 1.3. selector.classList.contains("className")
console.log(container.classList.contains("container"));


// 1.4. selector.classList.toggle("className")
// // nếu class container có rồi
// if(container.classList.contains("container")) {
//     // thì xóa class container  
//     container.classList.remove("container")
// } else {
//     // nếu chưa có thì tạo mới class container
//     container.classList.add("container");
// }
container.classList.toggle("container");


// 1.5. selector.className: trả ra chuôi các class của selector
const title = document.querySelector(".title");
console.log(title.className);
// title.className = "title";











