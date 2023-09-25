import service from '../index'

interface ILoginData {
    name: string
    pwd: string
}

export function login(data:ILoginData) {
    console.log(data)
    return service({
        url: '/login',
        method: 'post',
        data
    })
}

