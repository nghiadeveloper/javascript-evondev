// 1. textContent: trả về nội dung tong cặp thẻ HTML
const spinner = document.querySelector("#spinner")
// thay đổi nội dung text content
// spinner.textContent = "Hello new content";
console.log(spinner.textContent);


// 2. innerText: giống textContent nhưng nó không lấy được những cái nội dung nằm trong HTML mà bị ẩn đi và nó không lấy khoảng trắng phía trước và phía sau
console.log(spinner.textContent);
console.log(spinner.innerText);


// 3. innerHTML: lấy ra nội dung của selector bao gồm cả HTML
// spinner.textContent = `<div class="demo">Hello HTML</div>`;
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo">Hello HTML</div>`;