//! Bad way
// interface ReadOnlyProduct {
//     readonly name: string;
//     readonly price: number;
// }

//# Link Utility-Types => https://www.typescriptlang.org/docs/handbook/utility-types.html

interface Product {
    name: string;
    price: number;
}

type ReadOnly<T> = {
    // Index signature
    // keyof
    readonly [K in keyof T]: T[K];
}

type Optional<T> = {
    [K in keyof T]?: T[K];
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
}

let product:ReadOnly<Product> = {
    name: "a",
    price: 1,
}

