var student = {
  fName: 'nitesh',
  lName: 'khatri',
  age: 33,
  height: 170,
  fullName: function () {
    return `Hello ${this.fName} ${this.lName}`;
  },
};
console.log(student.fullName())
console.log(student?.age);
