type Uid = string;


export interface Payload {
    uid: Uid;
    level: number;
    point?: number;
}

//# 泛型
export interface PayloadT<T = any> {
    uid: Uid;
    level: number;
    point?: number;
    data: T;
}



function insert(payload: Payload) {
    const {

    } = payload;
};


export default insert;

