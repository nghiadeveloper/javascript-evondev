// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector("span");

function handleClick() {
    console.log("Click button");
}

// button.addEventListener("click", function() {
//     console.log("Click me");
// });

// button.addEventListener("click", handleClick);



// Bubbling: nổi bọt, sự kiện click chạy từ trong ra ngoài 
// span.addEventListener("click", function(e) {
//     // e.stopPropagation(); // ngăn chặn quá trình nổi bọt
//     console.log("Click span");
// });

// document.body.addEventListener("click", function() {
//     console.log("Click body");
// });



// Capturing: sự kiện click chạy từ ngoài vô trong
// button.addEventListener("click", handleClick, { capture: true, });

// span.addEventListener("click", function(e) {
//     // e.stopPropagation(); // ngăn chặn quá trình nổi bọt
//     // e.stopImmediatePropagation // ngăn chặn mọi event
//     console.log("Click span");
// });

// span.addEventListener("click", function() {
//     console.log("Click span 2");
// }, {
//     capture: true,
// });

// document.body.addEventListener("click", function() {
//     console.log("Click body");
// }, {
//     capture: true,
// });



// target vs currentTarget
button.addEventListener("click", function(event) {
    // event.target: nó sẽ chọn chính xác element mà mình click tới
    console.log(`event.target: ${event.target}`);
    // event.currentTarget: nó sẽ chọn phần tử mà mình click
    console.log(`event.currentTarget: ${event.currentTarget}`);
});



// preventDefault
const link = document.querySelector(".link");
link.addEventListener("click", function(event) {
    event.preventDefault();
    // Lấy custom attribute data-name
    // event.target.dataset.name
    const name = event.target.dataset.name;
    console.log(name);
    // console.log()
    // selector.style.property = value
    // event.target.style.property = value
    // console.log(event.target);
    // console.log(event.target.style);
    // event.target.style.color = "red";
    // background-color -> backgroundColor
    // position -> position
})