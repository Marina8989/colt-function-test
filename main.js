// function isValidPassword(password, username) {

//     if (password.length < 8) {
//         return false;
//     }
//     if (password.indexOf(' ') !== -1) {
//         return false;
//     }
//     if (password.indexOf(username) !== -1) {
//         return false;
//     }
//     return true;

// }
// console.log(isValidPassword('whatwhatwhat', 'hello'));


function average(arr) {
    let avg = 0;
    for (i = 0; i < arr.length; i++) {
        avg = (avg + arr[i]);
    }
    return avg / arr.length;
}

console.log(average([0, 50]));
console.log(average([75, 76, 80, 95, 100]));