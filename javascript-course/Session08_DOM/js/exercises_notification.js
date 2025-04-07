// Viết function tạo ra thông báo
function createNotification(title = "Welcome to notification") {
    const template = `<div class="noti">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/a/ad/N%C3%B4bita_%E1%BB%9F_v%C6%B0%C6%A1ng_qu%E1%BB%91c_ch%C3%B3_m%C3%A8o.jpg" alt="img-doraemon" class="noti-image">
                        <div class="noti-content">
                            <h3 class="noti-title">${title}</h3>
                            <p class="noti-desc">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eveniet, reiciendis dignissimos
                            </p>
                        </div>
                    </div>`;
    // insertAdjacentHTML để chèn vào body
    document.body.insertAdjacentHTML("afterbegin", template);
}

const randomData = [
    "Welcome to javascript course",
    "Welcome to this tutorial",
    "Today is a good day",
    "My name is Nghĩa",
    "I am Back-End Developer"
];

let lastTitle;
const times = setInterval(function() {
    const item = document.querySelector(".noti");
    if (item) item.parentNode.removeChild(item);
    // Lấy random title từ mảng randomData
    // Công thức random trong mảng bất kỳ: array[Math.floor(Math.random() * array.length)]
    const title = randomData[Math.floor(Math.random() * randomData.length)];
    if (lastTitle !== title) {
        createNotification(title);
    }
    lastTitle = title;
}, 5000);