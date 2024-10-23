

// // Class declaration 

// class Person2 {
//   constructor(name, address) {
    
//   }
// }

// // Class expression

// const   Person = class {
//   constructor(name,address){
//     this.name = name.trim();
//     this.address = address.trim();
//   }

//   get firstName(){
//     if(this.name.split(" ").length >= 2){
//       console.log("correct formate")
//     }else{
//       console.log("write last name")
//     }
//   }
// }

// const person1 = new Person("shivam tiwari","jaunpur");

// person1.firstName

// // set property using getter and setter method

// const   Person1 = class {
//   constructor(name,address){
//     this.name = name.trim();
//     this.address = address.trim();
//   }
//   set firstName(fname){
//     this._name = fname;
//   }
//   get firstName(){
//      return this._name;
//   }
// }

// const per = new Person1("shivam","up")
// console.log(per)
// per.firstName = "raju"
// console.log(per.firstName)
// console.log(per)


// /* Challenge 2 
// create a car object which have accelerate and break method 
// and create getter and setter for setting speed in mi/h and
// take input in km/h
// */

// class Car {
//   constructor(carName, speed) {
//     this.carName = carName;
//     this.speed = speed;
//   }

//   accelerate(){
//    return this.speed += 10;
//   }
//   break(){
//    return  this.speed -= 5;
//   }

//   get speedUS(){
//     return this.speed/1.6
//   }

//   set speedUS(speed){
//       this.speed = speed *1.6
//   }
// }

// const car1 = new Car("Ford", 120)

// console.log(car1)

// // console.log(car1.accelerate())
// // console.log(car1.break())
// car1.speedUS = 60
// console.log(car1.speedUS)

// console.log(car1.accelerate())
// console.log(car1.break())




const Car = function(name, speed){
  this.name = name;
  this.speed = speed;
}

Car.prototype.accelerate = function(speed){
 return  this.speed += 10;
}
Car.prototype.break = function(speed){
  return  this.speed -= 5;
 }

const EV = function(name, speed, charge){
  Car.call(this,name,speed)
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
  return this.charge = chargeTo 
}

EV.prototype.accelerate = function(){
   this.speed +=  20;
   this.charge--;

   return `${this.speed} km/h and charging level ${this.charge}%`

}

const tesla = new EV("Tesla",120, 22)

console.log(tesla.chargeBattery(90))

console.log(tesla.accelerate())
console.log(tesla.accelerate())