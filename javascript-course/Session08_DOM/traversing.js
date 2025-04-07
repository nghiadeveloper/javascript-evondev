// Traversing DOM 

// 1. parentNode, parentElement, removeChild
// parentNode, parentElement: truy xuât đến các phần tử cha gần nhất
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);
// removeChild: xóa thẻ 
// span.parentNode.removeChild(span);


// 2. nextElementSibling và previousElementSibling
// nextElementSibling: tìm tới phần tử kế tiếp
// previousElementSibling: tìm tới phần tử đứng sau nó
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);


// 3. childNode và children
// childNode: trả về 1 mảng các node bên trong bao gồm textNodes
// children: trả về các node không bao gồm textNodes
console.log(span.childNodes);
console.log(span.children);


// 4. firstChild và firstElementChild 
// firstChild: lấy phần tử con đầu tiên bao gồm textNodes
// firstElementChild: lấy element không bao gồm textNodes
console.log(span.firstChild);
console.log(span.firstElementChild);


// 5. lastChild và lastElementChild 
console.log(span.lastChild);
console.log(span.lastElementChild);


// 6. nextSibling và previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);