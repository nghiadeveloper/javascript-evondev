// 1. selector.getAttribute("attribute"): lấy ra giá trị của attribute selector
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach((item) => {
    console.log(item.getAttribute("class"));    
})
console.log(li);


// 2. selector.setAttribute("attribute", value): set giá trị cho attribute nào đó của selector
link.setAttribute("target", "_blank");
const listLink = document.querySelectorAll("a.link");
listLink.forEach((item) => item.setAttribute("target", "_blank"));


// 3. selector.removeAttribute("attribute"): xóa attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("style");


// 4. selector.hasAttribute("attribute"): kiểm tra selector có attribute nào đó hay không, nếu có thì trả về true ngược lại không có thì trả về false
console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("id"));