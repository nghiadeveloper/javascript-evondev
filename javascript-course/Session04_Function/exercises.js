// 1. Viết hàm so sánh 2 số a và b. Tìm ra số lớn hơn
function compare(a = 0, b = 0) {
    if(typeof a !== "number" || typeof b !== "number") {
        console.log("Please enter a valid number");
        return;
    }
    return Math.max(a, b);
}
console.log(compare(100, "1000"));

// 2. In hoa chữ cái đầu cho chuỗi sau: nghĩa -> Nghĩa, DEV -> Dev
function capitalize(word = "") {
    if(word.length === 0) return null;
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`;
}
console.log(capitalize("nghĩa"));

// 3. Viết hàm có sử dụng callback (function là parameter của function khác). In ra kết quả của hàm compare đã viết ở trên
function useCallback(a, b, callback) {
    let max = compare(a, b);
    callback(max);
}

function printMax(number) {
    console.log("Max number is: " + number);
}

console.log(useCallback(500, 1000, printMax));
