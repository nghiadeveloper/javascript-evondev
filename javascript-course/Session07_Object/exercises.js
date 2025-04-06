// Bài tập 1: Viết 1 function kiểm tra value có phải là Object hay không?
function isObject(value) {
    if(typeof value === "object" && !Array.isArray(value) && value !== null) {
        return true;
    }
    return false;
}
console.log(isObject({}));



// Bài tập 2: Viết 1 function trả về 1 mảng gồm: key và value dựa vào Object. Ví dụ: {a: 1, b: 2} -> [["a", 1], ["b", 2]] 
function objectToArray(object) {
    // check nếu không phải object thì dừng
    if(!isObject(object)) return;

    let result = [];
    for(let key in object) {
        // hasOwnProperty(key): nếu object chứa key trả về true và ngược lại trả về false
        if(object.hasOwnProperty(key)) {
            result.push([key, object[key]]);
        }
    }
    return result;
}
console.log(objectToArray({a: 1, b: 2}));



// Bài tập 3: ({a: 1, b: 2}, 'b') -> {a: 1}
function without(object, ...key) {
    // spread operator
    const newObject = {...object};
    key.forEach((item) => {
        delete newObject[item];
    });
    return newObject;
}
console.log(without({a: 1, b: 2}, "b"));



// Bài tâp 4:
// {a: 1, b: 2}, {a: 1, b: 2} -> true
// {a: 1, b: 2}, {a: 1, b: 2, c: 3} -> false
function isEqualObject(obj1, obj2) {
    // check keys length of two objects
    const objkey1 = Object.keys(obj1);
    const objkey2 = Object.keys(obj2);

    if(objkey1.length !== objkey2.length) return false;

    // check value of two objects
    const result = objkey1.every((key) => obj1[key] === obj2[key]);
    return result;
}
console.log(isEqualObject({a: 1}, {a: 1, b: 2}));