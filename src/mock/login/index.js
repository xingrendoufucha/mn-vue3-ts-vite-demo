import {mock} from "mockjs"

mock('/api/login','post',() => {
    return {
        code: 200,
        message: '请求成功',
        data: 'JHGH000GJH45GNBNG'
    }
})