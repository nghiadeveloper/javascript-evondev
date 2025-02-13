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
console.log(student2[student2.length - 1]);

// Các phương thức hay dùng trong mảng
// length: độ dài của mảng
console.log(student2.length);

// reverse: đảo ngược giá trị trong mảng
console.log(student2.reverse());

// join: nối các phần tử trong mảng thành chuỗi
// Khi viết join như thế này ("") thì nó sẽ dính nhau. Ví dụ mình có arr = ["Hieu","Nghia"] khi dùng arr.join("") thì sẽ có kết quả là "HieuNghia"
// còn nếu chúng ta điền từ vào trong join ví dụ arr.join("-") thì sẽ có kết quả là "Hieu-Nghia"
console.log(student2.join());
console.log(student2.join(" "));



// includes: kiểm tra phần tử có nằm trong mảng hay không
// phương thức includes, phương thức này dùng để kiểm tra phần tử có nằm trong mảng hay không ví dụ mảng arr = [1,2,3] thì nếu chúng ta dùng arr.includes(1) 
// thì sẽ trả về true vì có 1 trong mảng, ngược lại nếu mình viết arr.includes(5) thì sẽ trả về false vì không có giá trị 5 nằm ở trong mảng
console.log(student2.includes("Nghĩa"));
console.log(student2.includes("Fullstack"));

// indexOf: trả về vị trí của phần tử tìm thấy đầu tiên
console.log(student2.indexOf("Nghĩa"));

// lastIndexOf: trả về vị trí của phần tử tìm thấy cuối cùng
console.log(student2.lastIndexOf("Boy"));

// push: thêm phần tử vào cuối mảng
console.log(student2.push("Javascript"));

// unshift: thêm phần tử vào đầu mảng
console.log(student2.unshift("Hiếu"));

// pop: xóa phần tử cuối cùng trong mảng
student2.pop();

// shift: xóa phần tử đầu tiên trong mảng
student2.shift();



// slice: tạo ra một mảng copy từ mảng ban đầu
const animals = ["tiger", "lion", "horse", "elephant"];
const animals1 = animals.slice(); // ["tiger", "lion", "horse", "elephant"]

// slice(start): vị trí index trong mảng
const animals2 = animals.slice(1); // ["lion", "horse", "elephant"]

// slice(start, end): vị trí index trong mảng
const animals3 = animals.slice(1, 3); // ["lion", "horse"]

// slice(start, end): lấy phần tử ở vị trí cuối cùng trong mảng
const animals4 = animals.slice(-1); // ["elephant"]

const animals5 = animals.slice(-2); // ["horse", "elephant"]



// splice: xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dog", "cat", "bird", "dragon"];

// splice(start)
const pets1 = pets.splice(2); // [ "bird", "dragon"]

// splice(start, deleteCount, item1, item2, ... , itemN)
// deleteCount: là số lượng phần tử muốn xóa hoặc thay thế
const pets2 = pets.splice(0, 1); // [ "cat"]
const pets3 = pets.splice(0, 1, "dinasour"); // ["dinasour", "cat", "bird", "dragon"]
const pets4 = pets.splice(0, 2, "dinasour"); // ["dinasour", "bird", "dragon"]
const pets5 = pets.splice(0, 2, "dinasour", "pig"); // ["dinasour", "pig", "bird", "dragon"]



// sort: sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 9999, 10, 5, 9]; 
console.log(random.sort()); // [1, 10, 5, 9, 9999]

const random1 = random.sort(function(a, b) {
    if(a > b) return 1; // sắp xếp theo tăng dần
    if(a < b) return -1; // sắp xếp theo giảm dần
});

const random2 = random.sort((a, b) => a > b ? 1 : -1); // sắp xếp theo tăng dần
const random3 = random.sort((a, b) => a > b ? -1 : 1); // sắp xếp theo giảm dần



// find: trả về phần tử tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const numbers = [1, 9999, 10000000, 5, 9];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element) => element > 10);
console.log(findYourNumber); // nếu không tìm thấy trả về kết quả undefined



// finđIndex: trả về vị trí index tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const findYourIndex = numbers.findIndex((element) => element < 0);
console.log(findYourIndex); // nếu không tìm thấy trả về kết quả -1



// map: duyệt qua từng phần tử trong mảng và trả về một mảng mới mà không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5];
// trả ra một mảng mới mà các số (giá trị) trong mảng cũ nhân 2
// .map(callback(value, index, array))
const listNumberDouble = listNumber.map(function(value, index, array) {
    return value * 2;
}); 
console.log(listNumberDouble); // [2, 4, 6, 8, 10]



// forEach
// .forEach(callback(value, index, array))
const listNumberTripple = listNumber.forEach((value, index, array) => {
    return value * 3;
}); 
console.log(listNumberTripple); // undefined vì forEach không được return

// Câu hỏi: Sự khác nhau giữa forEach và map?
// - 1. map được return, forEach không được return
// - 2. map trả ra mảng mới dựa vào mảng ban đầu, forEach thì không
// - 3. vì forEach không có return nên nó sẽ không dừng nó cứ chạy mãi, thường được sử dụng ỏ trong DOM



// filter: sàng lọc các phần tử trong mảng thỏa điều kiện nào đó
// .filter(callback(value, index, array))
const greaterThanThree = listNumber.filter((item) => item > 3);
console.log(greaterThanThree); // [4, 5]



// some: trả về true khi thỏa 1 điều kiện và ngược lại trả về false khi không thỏa điều kiện nào
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);

// every: chỉ trả về true khi tất cả điều kiện đều đúng
const everyNumber = listNumber.every((value) => value > 0);
console.log(everyNumber);

// reduce: gom các phần tử trong mảng lại thành 1
// .reduce((a, b) => {}, initialize value)
const totalNumber = listNumber.reduce(function(previousValue, currentValue) {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
}, 0);
console.log(totalNumber);