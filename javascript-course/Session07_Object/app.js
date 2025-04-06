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

// for in
for(let key in student) {
    if(key === "name") {
        console.log("Hello name");
    }
    const value = student[key];
    console.log(`${key}: ${student}`);
}

// Object.keys: trả về 1 mảng chứa tất cả các keys của Object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);

// Object.values: trả về 1 mảng chứa tất cả các giá trị của object
const values = Object.values(student);
console.log(values);

// Object.entries: trả về một mảng nested [["name", "Nghia"], ["age", "25"]] gồm có key và value
const entries = Object.entries(student);
console.log(entries);

// Object.assign: sao chép dữ liệu từ Object này qua Object khác
const a = {
    firstName: "nghia",
};

const b = {
    lastName: "nguyen",
};

const c = Object.assign(a, b);
console.log(c);

const d = { ...a, ...b };
console.log(d);

// Object.freeze: ngăn chặn việc chỉnh sửa key và value của Object
const car = {
    brand: "BMW"
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar);

// Object.seal: cho phép chỉnh sửa key và value nhưng không được thêm key và value mới
const user = {
    userName: "Nghĩa hot boy",
    school: {
        name: "Evondev",
        room: { 
            name: "Javascript" 
        }
    }
}
// const newUser = Object.seal(user);
// newUser.userName = "nghia.admin@gmail.com";
// newUser.nickName = "Bé Mỡ"
// console.log(newUser);


// Sao chép Object
const newUser = {...user};
newUser.userName = "Nguyễn Hiếu Nghĩa";
// console.log(user);
// console.log(newUser);


// Sao chép Object phức tạp
console.log(newUser);
const newUser1 = Object.assign({}, user);
console.log(newUser1);

const newUser2 = JSON.parse(JSON.stringify(user));
newUser2.school.name = "IT";
console.log("New user 2: ");
console.log(newUser2);


// Từ khóa this: nó sẽ đề cập tới Object gần nhất
const student2 = {
    name: "Hiếu Nghĩa",
    fullname: { name: "Nguyễn Hiếu Nghĩa" },
    age: 25,
    male: true,
    hi: function() {
        console.log(`My name is ${this.name} and i am ${this.age} year old`);
    }
};
student2.hi();


// Optional Chaining: truy cập các thuộc tính của một đối tượng mà không cần phải kiểm tra xem đối tượng đó có tồn tại hay không.
// Cách 1
if(student2.fullname) {
    if(student2.fullname.name) {
        console.log(student2.fullname.name);
    }
}

// Cách 2
console.log(student2.fullname?.name);


// Destructuring Object: 
// Cách 1: function with object parameter 
function whatYourInfo(obj) {
    console.log(obj.name, obj.age, obj.school);
}

const newObj = {
    name: "Nguyễn Hiếu Nghĩa",
    age: 25,
    school: "Evondev"
};

whatYourInfo(newObj);

// Cách 2: object destructuring parameter 
function whatYourInfo2({name, age, school}) {
    console.log(name, age, school);
}
// function whatYourInfo2 <=> const { name, age, school } = newObj;
whatYourInfo2({
    name: "Nguyễn Hiếu Nghĩa",
    age: 25,
    school: "Evondev"
})