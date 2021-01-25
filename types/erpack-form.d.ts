import Vue from "vue/types/umd";

export type LayoutType = 'inline' | 'horizontal' | 'vertical'

export class ErpackForm extends Vue {
    form: Object;
    rules: any[];
    layout: LayoutType;
    labelWidth: string;
    columns: number;
    showHelp: boolean;
    noValidate: boolean;
}