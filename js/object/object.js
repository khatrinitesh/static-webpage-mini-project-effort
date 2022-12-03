// OBJECT 4 
// function Car(make,model,year){
//     this.make = make;
//     this.model = model;
//     this.year =year;

//     this.setMiles = function(miles){
//         this.miles = miles
//         return miles;
//     }
// }

// const car1 = new Car('toyota','parius',2016);
// const car2 = new Car('suzuki','parius1',2020);

// Car.prototype.age = function(){
//     return (new Date().getFullYear()) - this.year;
// }

// car1.age();



// OBJECT 3
// const user = {
//     name:'nitesh',
//     yearOfBirth:1989,
//     calcAge:function(){
//         const currentYear = (new Date()).getFullYear()
//         return currentYear - this.yearOfBirth;
//     }
// }
// console.log(user.calcAge());
/*OBJECT 2*/
// var bike = {
//   name:'RX100',
//   color:"black",
//   mileage:40,
//   engine:'98cc'
// }
// console.log(bike)
// document.write(bike?.name)
// document.write("<br>")
// document.write(bike?.color)
// document.write("<br>")
// document.write(bike?.mileage)
// document.write("<br>")
//1st method
// document.write(bike?.color)

// document.write('<br>')

// //2nd method
// document.write(bike['color'])


/*OBJECT 1*/
// var student = {
//   fName: 'nitesh',
//   lName: 'khatri',
//   age: 33,
//   height: 170,
//   fullName: function () {
//     return `Hello ${this.fName} ${this.lName}`;
//   },
// };
// console.log(student.fullName())
// console.log(student?.age);
