let inputvalue = document.getElementById("inputvalue");

let inputkey = document.getElementById("inputkey");

let nut = document.getElementById("add");

nut.addEventListener("click", function () {
  if (inputkey.value == "" || inputvalue.value == "") {
    alert("chua nhap");
  } else if (inputkey.value != "" && inputvalue.value != "") {
    var input1 = inputvalue.value;
    var input2 = inputkey.value;

    localStorage.setItem(input1, input2);
    let vuong1 = document.createElement("div");
    vuong1.style.backgroundColor = "red";
    vuong1.style.width = "100px";
    vuong1.style.height = "100px";
    vuong1.style.margin = "20px";
    document.body.appendChild(vuong1);
    vuong1.innerText = inputvalue.value;

    inputvalue.value = "";

    let vuong2 = document.createElement("div");
    vuong2.style.backgroundColor = "red";
    vuong2.style.width = "100px";
    vuong2.style.height = "100px";
    vuong2.style.margin = "20px";
    document.body.appendChild(vuong2);
    vuong2.innerText = inputkey.value;

    inputkey.value = "";

    let to = document.createElement("div");
    document.body.appendChild(to);
    to.style.display = "flex";
    to.appendChild(vuong1);
    to.appendChild(vuong2);
  }
});

let deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", function () {
  deleteBtn.parentElement.remove();
  console.log();
});

let name = ["chau", "an", "minh"];
console.log(name);
localStorage.setItem("listName", JSON.stringify(name));
let getListName = localStorage.getItem("listName");
console.log(JSON.parse(getListName)[0]);

let tencb = document.getElementsByClassName("asd");
console.log(tencb);
for (i = 0; i < name.length; i++) {
  tencb[i].innerText = name[i];
}
// for( i=0 ; i < name.length ; i++){
//     console.log(name[i]);
//     ten
// }
