// class Person {
//     constructor(public firstName: string, public lastName: string) {

//     }

//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     }

//     walk() {
//         console.log("Walking");

//     }

// }

// class Student extends Person {
//     constructor(public studentId: number, firstName: string, lastName: string) {
//         super(firstName, lastName);
//     }

//     takeTest(){
//         console.log("Take Test!");
//     }
// }

// class Teacher extends Person {
//     override get fullName() {
//         return "Professor " + super.fullName; 
//     }
// }

// class Principal extends Person {
//     override get fullName(){
//         return 'Principal ' + super.fullName;
//     }
// }

// printNames([
//     new Student(1,"Ko","Brent"),
//     new Teacher("Chang","Melody"),
//     new Principal("Chang","Jenny"),
// ])

// function printNames(people:Person[]) {
//     for (const person of people) {
//         console.log(person.fullName);
//     }
// }
