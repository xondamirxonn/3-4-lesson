// console.log(Math.E);
// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);
// console.log(Math.abs(10));
// console.log(Math.max(1, -30, -64, -2.5, -6.8, -7 , -8)) // (eng katta sonni chiqaradi)
// console.log(Math.min(1, -30, -64, -2.5, -6.8, -7 , -8)) // (eng kichik sonni chiqaradi)
// console.log(Math.pow(2, 4)) // kvadrat chiqarib beradi
// console.log(Math.sqrt(4)) // ildiz osti

// MIN = 10, MAX=100
// Ultimate formula: Math.floor(Math.random() *(MAX - MIN +1) +MIN)

// console.log(Math.floor(Math.random() * (100 - 10 + 1)) +10)
// console.log(Math.random()*100 +1) // min<0 ~ 0.9999999999999999 random(tasodifiy sonlar)
// console.log(Math.floor(3.14) ) // ozidan kichik sonni aniqlaydi (yalxitlaydi)
// console.log(Math.ceil(3.14) ) // yuqoriga yalxitlaydi
// console.log(Math.round(3.14)) // oziga yaqin sonni aniqlaydi (yalxitlaydi)

// Contitionals

// if ,else if, else

// let random = Math.floor(Math.random() * 10 + 1);
// if (random === 0) {
//   console.log("Juft ham emas , toq ham emas: ", random);
// } else if (random % 2 === 0) {
//   console.log("Juft son chiqdi: ", random);
// } else {
//   console.log("Toq son chiqdi ", random);
// }

// switch, case , default

// let random = 4;
// switch (random) {
//   case 0: {
//     console.log("nol chiqdi");
//     break;
//   }

//   case 1:
//   case 2:
//   case 3: {
//     console.log("yomon");
//     break;
//   }

//   default: {
//     console.log("boshqa son chiqdi");
//   }
// }

// if (random === 0){
//   console.log("nol chiqdi");
// } else if (random === 1 || random === 2 || random === 3) {
//   console.log("yomon");
// } else {
//   console.log("boshqa son chiqdi")
// }

function getNewColor(){
  var symbols,color;
  symbols = "0123456789ABCDEF";

  color= "#"
  for(var i = 0;i<6;i++){
    color = color + symbols[Math.floor(Math.random() * 16)];
  }

  document.body.style.background = color;
  document.getElementById("hex").innerHTML = color;
  
  
}