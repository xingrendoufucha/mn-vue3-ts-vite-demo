

// import type{ IDefaultResult } from '@/type/http'
export interface Iproduct {
    id: number
    name: string
    type: number
    price: number
    status: number
}

export interface IProductList {
    total: number
    list: Iproduct[]
}