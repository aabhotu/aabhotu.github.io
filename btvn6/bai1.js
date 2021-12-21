// Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
// case1
// Input: str = "tranduong"
// Output: 0
// case2
// Input: str = "hitclubhiuhiu"
// Output: 2
// case3
// Input: str = "aabb"
// Output: -1

let str = 'tranduong';
let str1 = 'hitclubhiuhiu';
let str2 = 'aabb';

// function findChar(strr) {
//     let arr = strr.split('');
//     arr.forEach(i =>{
//         arr[i] = arr[i] ? arr[i] + 1: 1;
//     })
//     for(let index in strr) {
//         if(arr[strr[index]] == 1) {
//             return index;
//         }
//     }
//     return -1;
// }

// console.log(findChar(str));
// console.log(findChar(str1));
// console.log(findChar(str2));

function findChar(str) {
    for(let i in str) {
        if(str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
            return i;
        }
    return -1;
    }
}
console.log(findChar(str));
console.log(findChar(str1));
console.log(findChar(str2));