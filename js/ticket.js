let ism = prompt("Xurmatli mijoz ismingizni kiriting")
let pul = prompt("Xurmatli " + ism +" sizda qancha pul bor?")
let dollarK = prompt("Hozirgi dollar kursini kiriting:")
let yevroK = prompt("Hozirgi yevro kursini kiriting:");
let ticket = 350 * dollarK
let living = 500 * dollarK;
let picnic = 500 * yevroK ;
let total = ticket + living + picnic;


 if (total > pul) {
   alert("Sizda pul yetarli emas ekan");
 } else {
   alert("Sizda pul yetarli");
 }

