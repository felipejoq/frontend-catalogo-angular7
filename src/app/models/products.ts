export interface ProductsI {
    ok:boolean,
    products:[{
        discount: number,
        status: boolean,
        _id: string,
        name: string,
        quanty: number,
        description: string,
        price: number,
        final_price: number,
        img: File,
        __v: number
    }],
    count: number
}

export interface ProductAddI {
    ok:boolean,
    products:{
        discount: number,
        status: boolean,
        _id: string,
        name: string,
        quanty: number,
        description: string,
        price: number,
        final_price: number,
        img: File,
        __v: number
    }
}