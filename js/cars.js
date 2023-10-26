let cars = ["lamborghini", "bugatti", "ferrari", "tesla", "mercedes benz"];
let  car = prompt("Qanday moshina tanlamoqchisiz");

if(cars.includes(car.toLowerCase())){

  console.log(car + " moshinasi allaqachon bor")

}

else{
  cars.push(car);

  console.log(car + " Moshinasi qoshildi")

};

