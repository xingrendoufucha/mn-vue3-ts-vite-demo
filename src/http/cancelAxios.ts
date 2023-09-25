import type { AxiosRequestConfig } from "axios";

const pendingMap = new Map<string, AbortController>()
const getPengdingUrl = (config:AxiosRequestConfig):string => {
    return [config.method, config.url].join('&')
}
export class axiosCancel {
    addPending(config:AxiosRequestConfig): void {
        this.removePenging(config)
        const url = getPengdingUrl(config)
        const controller = new AbortController()
        config.signal = controller.signal
        if(!pendingMap.has(url)) {
            pendingMap.set(url, controller)
        }
    }
    removePenging(config:AxiosRequestConfig): void {
        const url = getPengdingUrl(config)
        if(pendingMap.has(url)) {
            const abortController = pendingMap.get(url)
            if(abortController) {
                abortController.abort()
            }
            pendingMap.delete(url)
        }
    }
    reset(): void {
        pendingMap.clear()
    }
 }