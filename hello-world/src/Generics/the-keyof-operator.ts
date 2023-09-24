// interface Product {
//     name: string;
//     price: number;
// }

// class Store<T>{
//     protected _object: T[] = [];

//     add(obj: T): void {
//         this._object.push(obj);
//     }

//     // T is Product
//     // keyof T => 'name' | 'price'
//     find(property: keyof T, value: unknown): T | undefined {
//         return this._object.find(obj => obj[property] === value);
//     }
// }


// let store = new Store<Product>();
// store.add({name: "冰棒", price: 500})
// store.find('name', "冰棒")
// store.find('price', 1)
// store.find('ononon', 1)