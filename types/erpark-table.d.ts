import Vue from "vue/types/umd";

type ScrollType = {x: number} | number

export class ErpackTable extends Vue {
  url: string;
  columns: any[];
  dataSource: any[];
  rowKey: string;
  Model: Function;
  selectable: boolean;
  single: boolean;
  scroll: ScrollType;
  bordered: boolean;
}