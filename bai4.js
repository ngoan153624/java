const regex = /pattern/; // Thay "pattern" bằng biểu thức chính quy của bạn
const str = 'string'; // Thay "string" bằng chuỗi mà bạn muốn kiểm tra

const isMatch = regex.test(str);
console.log(isMatch);