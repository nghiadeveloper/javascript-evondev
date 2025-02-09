// String
// "Hello world": double quotes
// 'Hello world': single quotes
// `Hello world`: blackticks (template literal)

const fullname = "Nguyễn Hiếu Nghĩa";
const job = "Backend Developer";
console.log(fullname);
console.log(typeof fullname);

const newStr = "My name is Nguyen Hieu Nghia and I am back-end developer";
const newStr2 = "My name is " + fullname + " and I am " + job;
console.log(newStr2);

const newStr3 = `My name is ${fullname} and I am ${job}, I love coding`;
console.log(newStr3);

// index và length
// index: vị trí của từng ký tự trong chuỗi, bao gồm cả khoảng trắng
// length: xác định độ dài của một chuỗi
console.log(newStr3.length);

// split: chia một chuỗi thành một mảng các chuỗi con dựa trên một ký tự hoặc một chuỗi ký tự phân tách
console.log(job.split(" "));
console.log(job.split(""));
console.log(job.split("/"));

// toLowerCase: chuyển đổi tất cả các ký tự trong một chuỗi thành chữ thường
console.log(job.toLowerCase());

// toUpperCase: chuyển đổi tất cả các ký tự trong một chuỗi thành chữ hoa
console.log(job.toUpperCase());

// startsWith: kiểm tra xem một chuỗi có bắt đầu bằng một chuỗi con cụ thể hay không. Phương thức này trả về giá trị boolean (true hoặc false)
console.log(job.startsWith("Backend"));

// endsWith: kiểm tra xem một chuỗi có kết thúc bằng một chuỗi con cụ thể hay không. Phương thức này trả về giá trị boolean (true hoặc false)
console.log(job.endsWith("Developer"));

// includes: kiểm tra xem một chuỗi có chứa một chuỗi con cụ thể hay không. Phương thức này trả về giá trị boolean (true hoặc false)
console.log(job.includes("end"));

// indexOf: tìm vị trí đầu tiên của một chuỗi con trong một chuỗi. Nếu chuỗi con không được tìm thấy, phương thức sẽ trả về -1
console.log(job.indexOf("D"));

// lastIndexOf: tìm vị trí của lần xuất hiện cuối cùng của một chuỗi con trong một chuỗi. Nếu chuỗi con không được tìm thấy, phương thức sẽ trả về -1.
console.log(job.lastIndexOf("D"));

// replace: thay thế một phần của chuỗi bằng một chuỗi khác
console.log(job.replace("Backend", "Fullstack"));

// repeat: lặp lại chuỗi gốc một số lần nhất định
console.log(job.repeat(5));

// slice: cắt ra một phần của chuỗi hoặc mảng và trả về một chuỗi hoặc mảng mới
console.log(job.slice(0, 7));
console.log(job.slice(0));
console.log(job.slice(-3));

// trim: loại bỏ khoảng trắng ở đầu và cuối của một chuỗi
console.log(job.trim());

// trim: loại bỏ khoảng trắng ở đầu của một chuỗi
console.log(job.trimStart());

// trim: loại bỏ khoảng trắng ở cuối của một chuỗi
console.log(job.trimEnd());

// charAt: lấy ký tự tại một vị trí cụ thể trong chuỗi
console.log(job.charAt(1));

// substr: lấy ra một phần của chuỗi
console.log(job.substr(0, 3));

// substring: lấy ra các ký tự của chuỗi
console.log(job.substring(0, 4));

// Sử dụng nhiều phương thức của string cùng lúc
// Đề bài: Loại bỏ khoảng trắng 2 bên, đưa tất cả về chữ in hoa, thay chữ Developer thành chữ Developer and Designer, lặp lại chuỗi đó 2 lần
console.log(`Result of job: ${job.trim().replace("Developer", "Developer and Designer").toUpperCase().repeat(2)}`);



// Number
// Số nguyên: 1 2 3 4 5 
// Số thập phân: 2,2 9,5 -> 2.2 9.5
console.log(5 + 5); 
console.log(typeof 10);

const number1 = "5";
const number2 = "9.8";
const number3 = 10;

// parseInt: chuyển đổi chuỗi chứa các ký tự số thành một số nguyên
console.log(parseInt(number1));

// parseFloat: chuyển đổi chuỗi chứa các ký tự số thành một số thập phân
console.log(parseFloat(number2));

// Math.abs: trả về giá trị tuyệt đối của một số
console.log(Math.abs(number3));

// Math.floor: làm tròn xuống
console.log(Math.floor(9.2));

// Math.ceil: làm tròn lên
console.log(Math.ceil(9.8));

// Math.ceil: làm tròn gần nhất
console.log(Math.round(9.5));

// toFixed: định dạng một số thành chuỗi với một số lượng chữ số thập phân cụ thể
console.log(parseFloat((1 / 3).toFixed(2)));

// Math.random: tạo ra một số ngẫu nhiên
console.log(Math.random());
console.log(Math.ceil(Math.random() * 10));

// Math.max: trả ra con số lớn nhất trong dãy số
console.log(`Max: ${Math.max(1, 2, 3)}`);

// Math.min: trả ra con số nhỏ nhất trong dãy số
console.log(`Min: ${Math.min(1, 2, 3)}`);

// Math.pow: tính lũy thừa của một số
console.log(Math.pow(3, 2));

// isNaN và Number.isNaN
// NaN -> Not a Number (không phải số)
console.log(isNaN("This is a string")); // true
console.log(isNaN("12345")); // false
console.log(Number.isNaN("12345")); // false
console.log(Number.isNaN(NaN)); // true



// Undefined: Khai báo nhưng chưa gán giá trị
let a;
console.log(a);

// null
let b = null;
console.log(b);

// Boolean -> true hoặc false
// falsy values và truthy values
// falsy values: "", null, 0, false, undefined
// truthy values: "abc", true, 1, 100, 1000