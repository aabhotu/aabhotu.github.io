// Bài 2
// Cho 1 mảng người dùng như dưới
// 1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
// 3. Chuyển hết những người có giới tính male về female

const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];
const getALlUser = (users) => console.log(users);
const addUser = (user) => users.push(user);
const deleteUser = (userId) => {
    return users.filter(user => user.id !== userId)
};
const updateUser = (userId, body) => {
    return users.map((user) => 
    user.id === userId ? {...user, ...body} : user);
};
const statUser = (users) => {
    const stat = {nam: 0, teen: 0};
    users.map((user) => {
        if(user.gender === "male") ++stat.nam;
        if(user.gender === "female") ++stat.teen;
    });
    return stat;
};
const calcTotalMoney = (users) => {
    return users.reduce((acc, {id, money}) => 
    (id %2 === 0 ? acc + money : acc),0);
};
getALlUser(users);
const user = {
    id: 5,
    name: "Thao",
    age: 20,
    gender: "female",
    money: 1000,
};
addUser(user);
console.log("after added user with id 5");
getALlUser(users);

console.log("after updated user with id 5");
console.log(updateUser(5, {age:19, money: 2000}));
console.log(deleteUser(5));
console.log(calcTotalMoney(users));