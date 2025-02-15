// Object

// Cách khai báo object
// 1. Object literal
const objectLiteral = {};
// 2. Object constructor
const objectConstructor = new Object();
const student = {
    name: "Nguyễn Hiếu Nghĩa",
    "last-name": "Bé Mỡ",
    age: 25,
    male: true,
    hi: function() {
        console.log("Hi");
    }
};

// Có 2 cách truy xuất giá trị object
// 1. Dot notation object.key
console.log(student.name);
// 2. Bracked notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);

// Thay đổi giá trị của Object
student.age = 18;
student.male = "male";
student.isDeveloper = true;
student["is-developer"] = false;
student.hello = function() {
    console.log("Hello");
}
console.log(student);

// Xóa giá trị trong object
delete student["age"];