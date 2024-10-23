// OOPS object oriented proramming 
// How to make Object 
// 1. constructor Function
function Person (name, place){
   this.name = name;
   this.place = place;
}

const person1 = new Person("shivam", "jaunpur")
const person2 = new Person("raju","up");

console.log(person1)

// prototype

console.log(Person.prototype)

person1.__proto__.species = "homo"

console.log(person1, person2 )

const are = [1,2,3]

const ee = new Array(1,2,3)

const h1 = document.querySelector('h1')
console.log(h1.outerText && h1.textContent)


// Car constructor function

function Car(make, speed){
    this .make = make ;
    this.speed = speed
}
Car.prototype.accelerate = function() {
  this.speed = this.speed + 10;
  // console.log(`${this.make} going at ${car1.speed} km/h`)
  return this.speed;
}
Car.prototype.break = function() {
  this.speed = this.speed - 5;
  // console.log(`${this.make} going at ${car1.speed}`)
  return this.speed;
}
const car1 = new Car('BMW', 120);

const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const but1 = document.querySelector('.but-1');
const but2 = document.querySelector('.but-2');

but1.addEventListener('click',(e)=>{ 
    img2.style.transform = `rotate(${car1.accelerate() + 5+(-90)}deg)`;  
  })

  but2.addEventListener('click',(e)=>
   
    { 
      img2.style.transform = `rotate(${car1.break() + (-110)}deg)`;
    
      
    })