const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];

// var num = [];
// for(let i = 0; i < nums.length; i++)
// {
//     num[i] = 0
// }
// for(let i = 0; i < nums1.length; i++)
// {
//     num[nums[i]]++;
// }
// for(let i = 0; i < nums2.length; i++)
// {
//     if (num[i]>0)
//     {
//         console.log('gia tri ' + i + ' xuat hien ' + num[i] + ' lan');
//     }
// }
const count = (nums) => {
    let map = {};
    for (const num of nums) map[num] = map.hasOwnProperty(num) ? map[num] + 1 : 1;
    return map;
}
console.log(count(nums));
console.log(count(nums1));
console.log(count(nums2));
// let c = nums.filter((val, index) => {
//     console.log(val, index);;
//     if(val % 2 == 0)
//     {
//         return true;
//     }
// })
// console.log(c);

