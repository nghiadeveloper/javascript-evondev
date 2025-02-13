// Bài tập đơn giản về Date object
// In ra ngày 13/02/2025
const myTime = new Date("Thu Feb 13 2025 20:21:37 GMT+0700 (Indochina Time)");
const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth();
const myDate = myTime.getDate();
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);



// Bài tập chương 5
// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi
function getAge(year) {
    if(typeof year !== "number") return 0;
    const now = new Date();
    const currentYear = now.getFullYear();
    return currentYear - year;
}
const yourAge = getAge(2000);
console.log(`Năm nay bạn ${yourAge} tuổi`);

// 2. Viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian đầu vào.
// Ví dụ: thời gian làm bài là 30 phút, nếu chạy về 0 thì thông bao là hết thời gian
function countDown(minutes = 1) {
    let seconds = minutes * 60;
    let counter = 0;
    const timer = setInterval(function() {
        counter += 1;
        console.log(counter);
        if(counter === 30) {
            clearInterval(timer);
            console.log("Your time is end");
        }
    }, 1000);
}
countDown(1);

// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào
// so với thời gian hiện tại. Ví dụ: Bạn đang chat với 1 bạn A offline và sau đó vài phút thì
// hiển thị bạn A vừa online `30 giây trước`, `3 phút trước`, `3 ngày trước`, `2 tháng trước`,
// `1 năm trước` 
// 1 năm = 365 * 24 * 60 * 60 (ngày * giờ * phút * giây) = 31536000
// 1 tháng = 31 * 24 * 60 * 60 = 2678400
// 1 tuần = 7 * 24 * 60 * 60 = 604800
// 1 ngày = 1 * 24 * 60 * 60 = 86400
// 1 giờ = 1 * 60 * 60 = 3600
// 1 phút = 1 * 60 = 60
function timeSince(date) {
    const now = new Date();
    const yourDate = new Date(date);
    const seconds = Math.floor(now.getTime() - yourDate.getTime() / 1000); // in ra số giây
    
    if(seconds < 0) {
        alert("Thời gian không đúng");
        return;
    }

    let timer = seconds / 31536000;
    if(timer > 1) {
        console.log(`${Math.floor(timer)} năm trước`);
        return;
    }
    
    timer = seconds / 2678400;
    if(timer > 1) {
        console.log(`${Math.floor(timer)} tháng trước`);
        return;
    }
    
    timer = seconds / 604800;
    if(timer > 1) {
        console.log(`${Math.floor(timer)} tuần trước`);
        return;
    }
    
    timer = seconds / 86400;
    if(timer > 1) {
        console.log(`${Math.floor(timer)} ngày trước`);
        return;
    }

    timer = seconds / 3600;
    if(timer > 1) {
        console.log(`${Math.floor(timer)} giờ trước`);
        return;
    }

    timer = seconds / 60;
    if(timer > 1) {
        console.log(`${Math.floor(timer)} phút trước`);
        return;
    }

    timer = seconds;
    if(timer > 1) {
        console.log(`${Math.floor(timer)} giây trước`);
    }

    return;
}
timeSince("Thu Feb 13 2025 20:21:37 GMT+0700 (Indochina Time)");