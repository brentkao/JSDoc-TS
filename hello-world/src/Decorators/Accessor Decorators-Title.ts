// function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
//     console.log(target, methodName);
    
//     const original = descriptor.get;
//     descriptor.get = function () {
//         const result = original?.call(this);
//         return (typeof result === 'string') ? result.toUpperCase() : result;
//     }
// }

// class Person {
//     constructor(public firstName: string, public lastName: string) { }

//     @Capitalize
//     get fullName() {
//         // return 0;
//         // return null;
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// let person = new Person("Ko", "Brent");
// console.log(person.fullName);
