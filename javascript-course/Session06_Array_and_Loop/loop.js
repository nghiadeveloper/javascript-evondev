// Vòng lặp for
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numbers.length; i++) {
    console.log(`The number is ${i}`);
}

for(let i = 0; i < numbers.length; i += 2) {
    console.log(`The index is ${i}`);
}

for(let i = 0; i < numbers.length; i++) {
    // nếu giá trị là 8 thì dừng vòng lặp
    // console.log(`The value is ${numbers[i]}`);
    // if(numbers[i] === 8) {
    //     break;
    // }
    // nếu giá trị là 8 thì bỏ qua giá trị đó
    if(numbers[i] === 8) {
        continue;
    }
    console.log(`The value is ${numbers[i]}`);
}

// Nested loop
for(let i = numbers.length - 1; i >= 0; i--) {
    console.log(`The value is ${numbers[i]}`);
    for(let j = numbers.length - 1; j >= 0; j--) {
        console.log(j);
    }
}

// Bài tập vòng lặp for
// 1. Sao chép mảng dùng vòng lặp for
let copyArr = [];
for(let i = 0; i < numbers.length; i++) {
    copyArr.push(numbers[i]);
}
console.log(copyArr);

// 2. Đảo ngược một chuỗi. Ví dụ: "I love you" -> "uoy evol I"
let str = "I love you";
let result = "";
for(let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    result += str[i];
}
console.log(result);



// Vòng lặp while và do while
let number = 1;
while(number < 10) {
    console.log("Number is " + number);
    // điều kiện dừng vòng lặp
    number++;
}

let number1 = 1;
do {
    console.log("Number is " + number1);
    number1++;
} while(number1 < 10);



// Vòng lặp for of
for(let value of numbers) {
    console.log(value);
}

let a = [];
for(let value of numbers) {
    value += 10;
    a.push(value);
}
console.log(a);

for(let n of "nghia") {
    console.log(n);
}