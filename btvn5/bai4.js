//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";

// - Lấy ra tất cả sdt trong đoạn text sau
// - Yêu cầu dùng regex
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";

const emails = textEmail.match(/(m[\w]+@[\w]+\.com)|(t[\w]+@[\w]+\.com)/g);
console.log(emails);
console.log(textPhone.match(/\d{10,11}/g));

// const regex = /(....) | (....)/
