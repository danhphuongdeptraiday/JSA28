// Tạo 1 mảnh lưu tên thành viên trong gia đình

// let family = ["Châu", "An", "Minh"];
// console.log("Mảng ban đầu: " + family);

// Để truy cập vào các vị trí trong mảng: tên của mảng đó[index];

// console.log("Tên người thứ nhất trong gia đình là: " + family[3]);
// console.log("Chiều dài của 1 mảng: " + family.length);
// Thêm 1 phần tử vào cuối mảng: family.push(new value);

// family.push("Giáo sư X");
// family.push("Giáo sư Y");
// console.log(family);

// Xóa phần tử cuối mảng: family.pop()
// console.log("Phần tử vừa bị xóa là: " + family.pop());
// console.log(family);

// FOR:

// for( (1) ; (2) ; (3) )
// (1): vị trí bắt đầu lặp (let i = 0)
// (2): điều kiện để vòng lặp chạy (i < 1 số bất kì)
// (3): sự thay đổi của i sau mỗi vòng lặp
// for (let i = 1; i < 100; i++) {
//   if (i % 3 == 0 && i % 2 == 0) {
//     console.log(i);
//   }
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// OBJECT: Đối tượng JS
// - Thuộc tinh:

let book1 = {
  bookName: "Ngữ văn 12",
  bookPrice: 8000,
  publishDate: "17-3-2007",
  pages: 250,
};

let book2 = {
  bookName: "Toán 11",
  bookPrice: 5000,
  publishDate: "26-7-2007",
  pages: 100,
};

if (book1.bookPrice < book2.bookPrice) {
  console.log("Tên sách có giá tiền lớn hơn là: " + book2.bookName);
} else if (book1.bookPrice > book2.bookPrice) {
  console.log("Tên sách có giá tiền lớn hơn là: " + book1.bookName);
}

let family = [];
family.push(book1);
family.push(book2);
// console.log(family);

for (let i = 0; i < 2; i++) {
  console.log(family[i].pages);
}

let names = ["Hải", "Quý", "Quyết", "Minh", "Sơn", "Tín", "An", "Duy"];

// console.log(family[0].pages);
// console.log(family[1].pages);

// console.log(book.bookName);
