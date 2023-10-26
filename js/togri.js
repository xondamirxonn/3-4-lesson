let son = prompt("Biror sonni kiriting (1-10)");
let random = Math.floor(Math.random() * 10 +1);

 if(son == random){
  alert("Javobigniz to'g'ri chindan ham " +random + " sonini o'ylagan edim" )
}

else{
  alert("Javobingiz noto'g'ri, men o'ylagan son " + random)
}