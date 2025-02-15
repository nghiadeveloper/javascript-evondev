// 1. Đảo ngược một chuỗi. Ví dụ: "My name is Nghia" -> "Nghia is name My"
function reverseString(str) {
    if(!str) return null;
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is Nghia"));

// 2. Đảo ngược một chuỗi. Ví dụ: "I love you" -> "uoy evol I"
function reverseWord(str) {
    if(!str) return null;
    const arrStr = str.split(" ").map((item) => item.split(" ").reverse().join(" ")).reverse().join(" ");
    console.log(arrStr);
}
console.log(reverseWord("I love you"));

// 3. In hoa chữ cái đầu trong chuỗi. Ví dụ: "my name is nghia" -> "My Name Is Nghia"
function cappitalizeWord(word = "") {
    if(word.length === 0) return null;
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`;
}
function cappitalizeStr(str) {
    if(!str) return null;
    const result = str.split(" ").map(cappitalizeWord).join(" ");
    console.log(result);
}
cappitalizeStr("my name is nghia");



// Bài tập chương 6
// 1. Cho một mảng gòm nhiều giá trị: [1, 1000, false, null, "nghia", "", undefined, "javascript", [1, 2, 3], NaN].
// Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng, chỉ giữ lại các giá trị là truthy. 
// Gợi ý giá trị falsy là 0, null, "", undefined, false, NaN
const array = [1, 1000, false, null, "nghia", "", undefined, "javascript", [1, 2, 3], NaN];
const filterFalssy = array.filter((item) => Boolean(item));
console.log(filterFalssy);

// 2. Cho một mảng phức tạp: [[1, 2, 3, [false, null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]].
// Và kết quả mong muốn là: [1, 2, 3, false, null, 1, 5, 6, "javascript", 888, 666, 90]
const complexArray = [[1, 2, 3, [false, null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]];
const result = complexArray.flat(2);
console.log(result);

// 3. Đảo ngược số nguyên. Ví dụ: 1234 -> 4321
function reverseNumber(number) {
    const value = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
    console.log(value);
}
reverseNumber(1234);

// 4. Viêt chương trình có tên là fizzBuzz với đầu vào là một số nguyên và cho chạy từ 1 đến số nguyên đó.
// Kiểm tra nếu số nguyên chia hết cho 2 thì in ra chữ "Fizz", nếu số nguyên chia hết cho 3 thì in ra chữ "Buzz",
// nếu số nguyên chia hết cho 2 thì in ra chữ "FizzBuzz"
function fizzBuzz(number) {
    for(i = 1; i <= number; i++) {
        if(i % 2 == 0 && i % 3 == 0) {
            console.log("FizzBuzz");
        } else if(i % 2 == 0) {
            console.log("Fizz");
        } else if(i % 3 == 0) {
            console.log("Buzz");
        }
    }
}
fizzBuzz(22);

// 5. Cho một chuỗi bất kỳ, đếm số lượng ký tự "vowels" có trong chuỗi. Ví dụ: "evondev"
function countVowels(string) {
    let count = 0;
    const character = "ueoai";
    for(let c of string.toLowerCase()) {
        if(character.includes(c)) count += 1;
    }
    return count;
}
console.log(countVowels("evondev"));

// 6. Cho một mảng các giá trị số [1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6]. Viết function trả về một mảng
// với các giá trị unique. Kết quả trả về là [1, 2, 3, 5, 7, 6]
function unique(arr) {
    let result = [];
    if(!Array.isArray(arr)) return result;
    for(let i = 0; i < arr.length; i++) {
        if(!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(unique([1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6]));

// 7. Viết một function xử lý từ một mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào. 
// Ví dụ: ([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]] 
function splitArray(array, number) {
    let result = [];
    let index = 0;
    while(index < array.length) {
        result.push(array.slice(index, number + index));
        index = index + number;
    }
    console.log(result);
    return result
}
splitArray([1, 2, 3, 4, 5], 2);