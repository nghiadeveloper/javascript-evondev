// Number
console.log(Number("4.5"));
console.log(Number("4"));
console.log(Number("abc"));
console.log(Number(""));
console.log(Number(NaN));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));

// String
console.log(String(4.5));
console.log(String(NaN));
console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));

// Boolean
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("nghia"));
console.log(Boolean(false));

// Type coercion
console.log(1 + 2); // 3
console.log(10 + 10); // 20
console.log(10 + "10"); // 1010
console.log("10" + 10); // 1010
console.log("10" - 10); // 0
console.log(null + ""); // "null"
console.log(null + undefined); // NaN
console.log("" - 1); // -1
console.log(false - true); // -1
console.log(null + 10); // 10

// Toán tử so sánh: < > <= >=
console.log(5 > 7);
console.log(10 > 5);
console.log(20 < 10);
console.log(5 >= 5);
console.log(5 <= 5);

// Toán tử logic: && || !
// true && false -> false
// true && true -> true
// true || false -> true
// true || true -> true
console.log(5 > 7 && 8 > 3);
console.log(5 > 7 || 8 > 3);

const amIWrong = false;
console.log(!amIWrong);

// So sánh == (loose equality) với === (strict equality)
console.log(10 == "10"); // true
console.log(true == 1); // true
console.log(1 == "01"); // true
console.log(null == ""); // false
console.log(true == "true"); // false
console.log(typeof 10); // number
console.log(typeof "10"); // string
console.log(10 === "10"); // false
console.log(10 !== "10"); // true

// Câu điều kiện
const isRich = false;
const myMoney = 100;
if(!isRich) {
    console.log("I will buy a new car");
} else if(myMoney > 1000) {
    console.log("I will give you some money");
} else {
    console.log("I poor");
}

// alert, prompt, confirm
alert("Your website has been hacked");

const fullname = prompt("Vui lòng nhập tên của bạn", "");
console.log(fullname);

const isYourMoney = confirm("Đây có phải là tiền của bạn không?");
console.log(isYourMoney);

// Bài tập vận dụng
// Đề bài: Nhập vào số tuổi và kiểm tra nếu số tuổi >= 18 thì được xem phim chiếu rạp và ngược lại
const yourAge = prompt("Nhập số tuổi của bạn","");
console.log(typeof yourAge);
let message = "Bạn không đủ tuổi";
if(Number(yourAge) >= 18) {
    message = "Bạn có thể vào rạp phim";
}
alert(message);

// Switch - case
const fruit = orange;
switch (fruit) {
    case "apple":
        console.log("You like to eat apple");
        break;
    
    case "watermelon":

    case "lemon":
        console.log("You like to eat lemon");
        break;

    default:
        console.log("You like to eat orange");
        break;
}

// Ternary operator
const age = 18;
let message2 = "You are a young boy";
if(age >= 18) {
    message2 = "You are adult";
} else if(age <= 18) {
    message2 = "You are still a child";
}

// condition ? true : false
let message3 = age >= 18 ? "You are adult" : "You are still a child";
console.log(message3);

let message4 = age >= 18 
    ? "You are adult" : age < 18 
    ? "You are still a child" : "You are a young boy";
console.log(message4);