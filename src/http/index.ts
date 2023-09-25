import axios, {type AxiosResponse, type AxiosInstance, type AxiosRequestConfig, type InternalAxiosRequestConfig} from "axios"
import type{ IDefaultResult } from '@/type/http'

// const pendingMap = new Map<string, AbortController>()


// const service:AxiosInstance = axios.create({
//     baseURL: '/api',
//     timeout: 3000,
//     withCredentials: true
// })
// const getPengdingUrl = (config:AxiosRequestConfig):string => {
//     return [config.method, config.url].join('&')
// }
// interface IParams {
//     page?: number
//     size?: number
// }

// service.interceptors.request.use((config: InternalAxiosRequestConfig<IParams>) => {
//     // console.log(config)
//     // if(config.needCancel) {
//     //     const controller = new AbortController()
//     //     config.signal = controller.signal
//     //     console.log(controller)
//     //     let url = getPengdingUrl(config)
//     //     if(!pendingMap.has(url)) {
//     //         pendingMap.set(url, controller)
//     //     } else {
//     //         controller.abort()
//     //     }
//     // }
//     return config
// })
// service.interceptors.response.use((response) => {
//     let url = getPengdingUrl(response.config)
//     pendingMap.delete(url)
//     if(response.data.code !== 200) {
//         return Promise.reject(response.data)
//     } else {
//         return response.data.data
//     }
// }, err => {
//     console.log(err)
//     if(axios.isCancel(err)) {
        
//     }
//     return Promise.reject(err)
// })


// export default service

interface IHttpCustomOption<T> extends AxiosRequestConfig<T>{
    needCancel?: boolean
    showError?: boolean
}
class Requset {
    instance: AxiosInstance
    baseConfig: AxiosRequestConfig = {
        baseURL: '/api',
        timeout: 5000,      
    }
    constructor(config:AxiosRequestConfig) {
        this.instance = axios.create(Object.assign(this.baseConfig, config))
        this.instance.interceptors.request.use((config:InternalAxiosRequestConfig) => {
            return config
        }, (err:any) => {
            return Promise.reject(err)
        })
        this.instance.interceptors.response.use((response:AxiosResponse) => {
            if(response.data.code === 200) {
                return response.data
            } else {
                return Promise.reject(response.data)
            }
        }, (err:any) => {
            return Promise.reject(err)
        })
    }
    // public request<T = any, P = any>(config: AxiosRequestConfig<T>): Promise<P> {
    //     return this.instance.request(config)
    // }


    public request<T, D>(options: IHttpCustomOption<D>): Promise<AxiosResponse<T>> {
        return this.instance.request<T, AxiosResponse<T>, D>(options)
    }


}

export default new Requset({})