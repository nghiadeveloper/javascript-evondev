// Function
// Khai báo function: function functionName(parameters, parameters,..)
// Gọi function: functionName(argument, argument,...)
// - parameters: truyền tham số
// - argument: truyền đối số
// - functionName(): invoke function

// // Đề bài: Tính tổng 2 số a và b
function sum(a, b) {
    const total = a + b;
    return total;
    // nếu không return thì hàm trả về kết quả là undefined
}
console.log(sum(5, 10)); // truyền đối số



// Lưu function vào 1 biến
function add(a = 0, b = 0) {
    return a + b;
}
const sum2 = add;
sum2(100, 200);



// Tham số là function
// Đề bài: Tính trung bình của a và b -> (a + b) / 2
// fn: function
function average(a, b, fn) {
    const total = fn(a, b);
    return total / 2;
}
let result = average(200, 300, sum2);
console.log(`Result = ${result}`);



// Các loại function
// 1. Function declaration: (như các hàm phía trên)
// 2. Anonymous function (function expession)
const logName = function() {
    console.log("Your name");
}
logName();

// 3. IIFE (Immediately invoked function execution)
(function() {
    console.log("This is IIFE function");
})();

// 4. Arrow function
// Cách viết khi sử dụng Anonymous function
const square1 = function(x) {
    return x * x;
}
// Áp dụng Arrow function
const square2 = (x) => {
    return x * x;
}

// Cách 1
const square3 = () => {
    return 1000;
}
// Cách 2: rút gọn code
const square4 = () => 1000;



// Global scope và function scope
let name1 = "Bé mỡ"; // Global scope
function logYourName() {
    let name2 = name1; // function scope
    console.log(name2)
}
logYourName();



// Block scope và từ khoá var
if(2 > 1) {
    // block scope
    // let message = "Hello world";
    const message = "Hello world";
    // global scope
    var message2 = "Nghĩa";
}
alert(message2);


// Closure
// Lexical scope
let aNewName = "Nghĩa"; // global scope
function sayHello() {
    let message5 = "Hi"; // block scope
    console.log(`Message: ${message5} ${aNewName}`);
}
sayHello();



// Closure
// function con có thể truy xuất scope của function cha
// parent function
function sayHello2() {
    let message6 = "Hi";
    // inner function
    function sayHi() {
        console.log(message6);
    }
    return sayHi;
}
let hello = sayHello2(); 
hello();



function sayHello3() {
    return function hiYourName(name) {
        console.log(`Message: ${message} ${aname}`);
    }
}
let hello2 = sayHello3("Welcome to javascript");
hello2(" Closure");