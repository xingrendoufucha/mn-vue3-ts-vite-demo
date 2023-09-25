import {mock} from "mockjs"
function getLIst () {
    const { productList } = mock({
        'productList|8-15': [
            {
               'name|1': ['苹果','栗子','木瓜','连衣裙','T恤','短裤','奶牛','飞机','驱逐舰'],
               'price|+100': 100,
               'id|+1': 1,
               'status|1': true,
               'type|1': [0, 1, 2, 3]
            //    'type': '@shuffle([0, 1, 2, 3], 1, 3)'
            }
        ]
    })
    return productList
}

mock('/api/getProductList','get',() => {
    return {
        code: 200,
        message: '请求成功',
        data: {
            list: getLIst(),
            total: getLIst().length*5
        }
    }
})