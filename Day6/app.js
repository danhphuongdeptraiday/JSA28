// // setTimeout(function, second);

// // setTimeout(function () {
// //   console.log("hello");
// // }, 3000);

// // setInterval()

// let number = document.getElementById("number");
// let c = 0;
// let a;
// a = setInterval(function () {
//   c = c + 1;
//   number.innerText = c;
// }, 1000);
// let stopBtn = document.getElementById("stopBtn");
// let continueBtn = document.getElementById("continue");

// stopBtn.addEventListener("click", function () {
//   clearInterval(a);
//   continueBtn.style.display = "inline-block";
//   stopBtn.style.display = "none";
// });

// continueBtn.addEventListener("click", function () {
//   a = setInterval(function () {
//     c = c + 1;
//     number.innerText = c;
//   }, 1000);
//   stopBtn.style.display = "inline-block";
//   continueBtn.style.display = "none";
// });
