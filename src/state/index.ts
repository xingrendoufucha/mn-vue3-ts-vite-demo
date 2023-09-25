import { defineStore } from 'pinia'

export const uesrStore = defineStore('user', {
    state: () => (
        {
            name: '张三'
        }
    ),
    actions: {
        login(name: string) {
            this.name = name
        },
        logout(){
            this.name = ''
        }
    }
})