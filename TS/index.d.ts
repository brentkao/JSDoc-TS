declare type Payload = {
    uid: Uid;
    level: number;
    point?: number;
    dataList: (string | number)[];
};


// Payload.d.ts
// declare interface Payload {
//     value_type: "string" | "number" | "JSON";
//     value: string;
//   }
  