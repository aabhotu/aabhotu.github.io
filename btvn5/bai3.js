function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(Word) {
            return Word[0].toUpperCase() + Word.substr(1);
        })
        .join(' ');
     }

let case1 = "    hOang Bui   ";
// -> Hoang Bui

let case2 = " hOANG      BUI   hOang     ";

let case3 = "23traN    dUOng23     ";

case1 = case1.trim().toLowerCase();
case2 = case2.replace(/\s+/g, ' ').toLowerCase().trim()
case3 = case3.replace(/\s+/g, ' ').toLowerCase().trim().split('23').join('')
console.log(toUpper(case1));
console.log(toUpper(case2));
console.log(toUpper(case3));

// const format = (words) => {
//     return words
//         .toLowerCase()
//         .match(/[a-z]+/gi)
//         .map((word) => 
//             word
//                 .split("")
//                 .map((char, i) => (i === 0 ? char.toUpperCase() : char)))
//         .join(" ");
// };