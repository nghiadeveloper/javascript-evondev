// console.log: dùng để xuất giá trị hoặc kết quả nào đó
console.log("Hello World");

// Biến (variable): dùng để lưu giá trị dữ liệu và sử dụng được ở nhiều nơi
// Delcare variable: khai báo biến
// Có 3 loại:
// - const (hằng số) và let: Không khởi tạo giá trị mặc định
// - var: Khởi tạo giá trị mặc định là undefined
const number = 100;
console.log(number);

let orderNumber = 200;
orderNumber = "Welcome to my javascript course";
console.log(orderNumber);

// Hoisting
const anotherNumber = true; // Boolean
let orderValue = undefined; // Undefined null
console.log(anotherNumber);
// Data type: Number, String, Boolean, Undefined, null

{
    // Temporal Dead Zone (TDZ)
    const teacher = "Nghĩa";
    const teacherLearning = function () {
        console.log(teacher);
        const teacher = "Nghĩa";
    };
    // teacherLearning();

    // Temporal Dead Zone is existed here
    // Temporal Dead Zone is existed here
    // Temporal Dead Zone is existed here
    // console.log(library);
    // Temporal Dead Zone is existed here
    const library = "reactjs"; // Temporal Dead Zone end here
    // Temporal Dead Zone is not existed here
    console.log(library);

    // Temporal Dead Zone start and end here
    console.log(hobbies); // Temporal Dead Zone is not existed here
    // Temporal Dead Zone is not existed here
    var hobbies = "Badminton";
}
