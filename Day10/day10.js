let listUser = [
  {
    userName: "Bruno",
    userImage:
      "https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111856/Player_Profile_Thumbnail_Mens_2223_Kit_bruno1658216905336.jpg",
    userAddress: "Portugal",
  },

  {
    userName: "Casemiro",
    userImage:
      "https://assets.manutd.com/AssetPicker/images/0/0/17/89/1137010/C_Player_Profile_Thumbnail_copy1661414109798.jpg",
    userAddress: "Brasil",
  },

  {
    userName: "Lindelof",
    userImage:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/41/1190338/PlayerProfile_Thumbnail_VICTOR_LINDELOF1675365412789.jpg",
    userAddress: "Sweden",
  },

  {
    userName: "Eriksen",
    userImage:
      "https://assets.manutd.com/AssetPicker/images/0/0/17/3/1114946/CE_Player_Profile_Thumbnail1658929113165.jpg",
    userAddress: "Denmark",
  },

  {
    userName: "Rashford",
    userImage:
      "https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111866/Player_Profile_Thumbnail_Mens_2223_Kit_Rashford1658219371866.jpg",
    userAddress: "England",
  },
];

let container = document.querySelector(".container");
for (let i = 0; i < listUser.length; i++) {
  let each_person = document.createElement("div");
  each_person.className = "each_person";
  let img = document.createElement("img");
  img.src = listUser[i].userImage;

  let title = document.createElement("h1");
  title.innerText = listUser[i].userName;

  let address = document.createElement("p");
  address.innerText = listUser[i].userAddress;

  let add_to_card_btn = document.createElement("button");
  add_to_card_btn.innerText = "Add to card";

  each_person.appendChild(img);
  each_person.appendChild(title);
  each_person.appendChild(address);
  each_person.appendChild(add_to_card_btn);

  container.appendChild(each_person);
}
