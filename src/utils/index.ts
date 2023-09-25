export function getStorageItem(name: string):string {
    let value = localStorage.getItem(name) || ''
    return value
}

export function setStorageItem(key: string, val:any) :void {
    localStorage.setItem(key, val)
}