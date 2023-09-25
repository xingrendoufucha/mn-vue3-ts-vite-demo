import type { AxiosResponse, AxiosRequestConfig, InternalAxiosRequestConfig} from "axios"
export interface IDefaultQueryList {
    size?: number
    currentPage?: number
}

export interface IDefaultResult {
    code?: number
    message?: string
    data?: any
}