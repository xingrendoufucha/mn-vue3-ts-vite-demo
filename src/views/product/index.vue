
<script setup lang="tsx">
    import { onMounted, reactive, toRefs } from 'vue'
    import service from '@/http'
    
    import type{ IDefaultQueryList } from '@/type/http'
    import type{ IProductList, Iproduct } from '@/type/product.ts'
    // import { storeToRefs } from 'pinia'
    // import { uesrStore } from '@/state/index.ts'
    // const users = uesrStore()
    // const { name } = storeToRefs(users)
    const productColumns = [
        // {
        //     type: 'selection',
        //     selectable(row, index) {
        //         return true
        //     }
        // },
        {
            dataIndex: 'name',
            prop: 'name',
            ellipsis: true,
            // slotHeader: {
            //     render(row) {
            //         return (
            //             <el-input v-model={input} placeholder="Please input" clearable />
            //         )
            //     }
            // },   
            label: '产品名称'
        }, {
            dataIndex: 'price',
            prop: 'price',
            ellipsis: true,
            slotName: 'price',
            label: '价格'
        }, {
            dataIndex: 'status',
            prop: 'status',
            ellipsis: true,
            label: '状态',
            'label-class-name': "self",
        }, {
            dataIndex: 'type',
            prop: 'type',
            ellipsis: true,
            label: '类型'
        }, {
            dataIndex: 'action',
            label: '操作',
            fixed: 'left',
            render(row) {
                return (
                    <div>
                        <el-button type="primary" onClick={
                            () => {
                                handleEditProduct(row)
                            }
                        }>
                            编辑
                        </el-button>
                        <el-button type="danger" onClick={() => {}}>
                            删除
                        </el-button>
                    </div>
                )
            }
        }
    ]
    const productState = reactive({
        productList: [] as Iproduct[],
    })
    const { productList } = toRefs(productState)

    

    // let productList:Iproduct[] = reactive([])
    
    const getProductList = () => {
        service.request<IProductList, IDefaultQueryList>({
            url: '/getProductList',
            needCancel: true,
            showError: true,
        }).then((res)=> {
            productState.productList = res.data.list
        }).catch(err => {
            console.log(err)
        })
    }
    getProductList()
    const handleGetProductList = () => {
        getProductList()
    }
    import { router } from '@/router';
// import { rowContextKey } from 'element-plus';
    const handleClick = () => {
        router.go(-1)
    }
    // const input:string = ''

    const handleEditProduct = (row) => {
        console.log(11111, row)
    }
    const handleCurrentChange = (row) => {
        console.log(22222, row)
    }

</script>
<template>



    <h1>这是商品页</h1>
    <div>{{ productList.length }}</div>
    <my-table 
        class="my-table" 
        max-height="680"
        :list="productList" 
        :columns="productColumns"
        @current-change="handleCurrentChange"
        >
        <template #price>
            <el-input></el-input>
        </template>
    </my-table>
    <el-button type="primary" @click="handleClick">点击返回</el-button>
    <el-button type="primary" @click="handleGetProductList">获取商品</el-button>
</template>

<style scoped lang="less">
.my-table {
    // :deep(.el-table__cell) {
    //     background-color: red  !important;
    // }
    .el-table__cell {
        background-color: red  !important;
    }
}


</style>