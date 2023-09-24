// abstract class Shape {
//     constructor(public color: string) { }

//     abstract render(): void;
// }

// class Circle extends Shape {
//     constructor(public radius: number, color: string) {
//         super(color)
//     }

//     override render(): void {
//         console.log("Rendering a circle");
//     }
// }

// //! 因為 abstract 表為尚未準備執行，而無法使用
// // let shape = new Shape('red');
// // shape.render();

// let circle = new Circle(5, 'red');
// circle.render();