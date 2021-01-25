import { any } from "core-js/fn/promise";
import Vue from "vue/types/umd";
import { ErpackModel } from "../src/components/Model";

export interface ItemProps {
  label?: string;
  prop?: string;
  component?: Vue | string;
  [propName: string]: any;
}
export type ItemType = string | ItemProps
export type ToggleType = boolean | 'attr'
export class ErpackSearch extends Vue {
  items: ItemType[];
  Model: ErpackModel;
  columns: number;
  showItemNum: number;
  toggle: ToggleType;
}