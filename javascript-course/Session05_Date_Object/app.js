// Date object
const now = new Date();
console.log(now);
// Wed Feb 12 2025 21:40:15 GMT+0700 (Indochina Time)
// Day of the week: Web
// Day: 12
// Month: Feb
// Year: 2025
// Hour: 21
// Minute: 40
// Second: 15
// Timezone: GMT+0700 (Indochina Time)

// Timestamp và epochtime
// Timestamp: Tính ra kết quả là miliseconds
console.log(now.getTime()); 

// 4 cách khởi tạo Date object
// new Date(); -> in ra ngày giờ hiện tại
// new Date(timestamp); -> dựa vào timestamp để in ra ngày giờ
// new Date(date string);
// new Date(year, month, day, hour, minute, second, milisecond);

// Các hàm get trong Date
const birthday = new Date(2000, 2, 22);
// getFullYear: in ra năm
console.log(birthday.getFullYear());
// getMonth: in ra tháng. Tính từ 0 (tháng 1) -> 11 (tháng 12)
console.log(birthday.getMonth());
// getDate: in ra ngày của tháng
console.log(birthday.getDate());
// getDay: in ra thứ của tuần. Tính từ 0 (chủ nhật) -> 6 (thứ 7)
console.log(birthday.getDay());
// getHours: in ra giờ
console.log(birthday.getHours());
// getMinutes: in ra phút
console.log(birthday.getMinutes());
// getSeconds: in ra mili giây
console.log(birthday.getSeconds());
// in ra timestamp
console.log(birthday.getTime()); 

// Các hàm set trong Date
console.log(birthday.setFullYear(2000));
console.log(birthday.setMonth(2));
console.log(birthday.setDate(22));
console.log(birthday.setDay(4));
console.log(birthday.setHours(11));
console.log(birthday.setMinutes(11));
console.log(birthday.setSeconds(11));

// Tìm hiểu utc trong Date
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC
console.log(birthday.getUTCFullYear());
console.log(birthday.getUTCMonth());
console.log(birthday.getUTCDate());
console.log(birthday.getUTCDay());
console.log(birthday.getUTCHours());
console.log(birthday.getUTCMinutes());
console.log(birthday.getUTCSeconds());
console.log(birthday.getUTCTime()); 

// Tìm hiểu các hàm khác trong Date
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleDateString("vi-VI"));
console.log(now.toISOString());

// Tìm hiểu setTimeout và setInterval
// const timer = setTimeout(function() {
//     alert("Call me after 3 seconds");
// }, 3000);
// clearTimeout(timer);

const timer = setInterval(function() {
    console.log("Call me");
}, 1000);
clearInterval(timer);