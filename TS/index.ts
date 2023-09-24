type Uid = string;

type data = {
    deleted: number;
    status: number;
    dataList: {
        name: string,
    }[]
}

 
export interface Payload {
    uid: Uid;
    level: number;
    point?: number;
    dataList: (string | number)[];
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

