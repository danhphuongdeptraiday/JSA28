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

console.log(listUser[0].userImage);
console.log(listUser[1].userName);
console.log(listUser[2].userName);
console.log(listUser[3].userName);
console.log(listUser[4].userName);

let img1 = document.getElementsByClassName("img1");

for (let i = 0; i < img1.length; i++) {
  img1[i].src = listUser[i].userImage;
}
