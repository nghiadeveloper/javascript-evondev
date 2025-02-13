// Mảng
const a = "a";
const b = "b";
const c = "c";
const d = "d";

// Có 2 cách tạo mảng
// Array literal
const student = [];
// Array constructor
const student1 = new Array();

// Ví dụ mảng
// Mảng phức tạp: [0, false, undefined, null, "nghĩa", ["nghĩa", true, 2000, []]]
// Mảng đơn giản: [0, false, undefined, null, "nghĩa"]
// [1, 2, 3, 4, 5] ["a", "b", "c", "d"] [false, true, true]
// [] empty array -> mảng rỗng
// index: vị trí của phần tử trong mảng, bắt đầu từ 0 đến n phần tử
// length: độ dài của mảng, băt đầu từ 1
const student2 = ["Nghĩa", "Đẹp", "Trai", "Hot", "Boy"];
console.log(student2[0]);
console.log(student2[5]);
// Lấy ra phần tử ở vị trí cuối trong mảng
console.log(student2[student2.length() - 1]);