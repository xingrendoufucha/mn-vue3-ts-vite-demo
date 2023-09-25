<script setup lang="tsx">
// import { render } from 'vue'
import { h, computed, defineComponent } from 'vue'
import type { ICuntomTableColumn, RenderScope } from "@/type/table.ts";
import type{ Iproduct } from '@/type/product.ts'
  defineOptions({
    inheritAttrs: false
  })
  const props = defineProps({
     list: {
         type: Array<unknown>,
         default: () => []
     },
     columns: {
       type: Array<any>,
       default: () => []
     }
  })
//  watch(props.list, (newVal, oldVal) => {
//     console.log(!23)
//      console.log(newVal, oldVal)
//  })

interface IRender {
  functional?: any
  props?: {
    row?: any,
    render?: Function,
    index?: Number,
    column?: any
    fixed?: boolean
    type?: string
  },
  render?: (ctx: RenderScope<Iproduct>) => any;
}
const exSlot = defineComponent({
  functional: true,
  props: {
    row: Object,
    render: Function,
    column: {
        type: Object,
        default: null,
    },
  },
  render: (props, ctx) => {
    console.log(111,props)
    console.log(222,ctx)
    // console.log(ctx.)
    return props.render(props.row)
  }
})

function getCuntonColumnAttrs (column:ICuntomTableColumn) {
  let { render, ...options } = column
  return {
    ...options
  }
}

// const exSlot = (props, context) => {
//   console.log(222, props, context)
//   return h(props.render(props.row))
// }

</script>
<template>
    <div> {{ props.list.length }}</div>
    <el-table :data="props.list" v-bind="$attrs" style="width: 100%">
      <template v-for="column in props.columns" :key="column.dataIndex">
        <!-- <el-table-column v-bind="column" v-if="column.slotHeader">
          <template #header>
            <exSlot :render="column.slotHeader.render"></exSlot>
          </template>
        </el-table-column> -->
        <!--  
        <el-table-column v-bind="column" v-if="!column.render"> </el-table-column>   -->
        
        
        <el-table-column v-if="column.render" v-bind="getCuntonColumnAttrs(column)">
          <template #default="scope">
            <exSlot :render="column.render" :row="scope.row" :index="scope.$index" :column="column" />
          </template>
        </el-table-column>
        <el-table-column v-bind="column" v-else-if="column.slotName"> 
          <slot :name="column.slotName"></slot>
        </el-table-column> 
        <el-table-column v-bind="column" v-else />
      </template>
      <!-- <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" /> -->
    </el-table>
</template>

<style lang="less">

</style>