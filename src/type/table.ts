import { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import type { VNode } from "vue";


export interface ICuntomTableColumn<T = any> extends TableColumnCtx<T> {
    render?: (row: any, index?: number) => string | VNode 
}

export type RenderScope<T> = {
    row: T;
    column: TableColumnCtx<T>;
    [key: string]: any;
  };