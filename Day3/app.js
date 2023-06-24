// localStorage.setItem("name", "");
// localStorage.setItem("name", "Phương");
// localStorage.setItem("age", 20);

// let dataFromLocalStorage = localStorage.getItem("name");
// console.log(dataFromLocalStorage);

// document.getElementById("delete").addEventListener("click", function () {
//   localStorage.clear();
// });

let inputKey = document.getElementById("key");
let inputValue = document.getElementById("value");
let btnAdd = document.querySelector(".input_container button");
let keyItem = document.querySelector(".keyItem");
let valueItem = document.querySelector(".valueItem");
btnAdd.addEventListener("click", function () {
  // let input1 = inputKey.value
  console.log("Key: " + inputKey.value);
  console.log("Value: " + inputValue.value);
  localStorage.setItem(inputKey.value, inputValue.value);
  keyItem.innerText = inputKey.value;
  valueItem.innerText = inputValue.value;
});

// localStorage.setItem("person", JSON.stringify({ name: "Phương" }));
// let t = localStorage.getItem("person");
// console.log(JSON.parse(localStorage.getItem("person")));
