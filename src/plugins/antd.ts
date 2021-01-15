import type { App } from 'vue';
import {Modal, Table, Menu, Input, Form,Card, Checkbox, Radio} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export function setupAntd(app: App<Element>) {
    app.use(Form)
        .use(Input)
        .use(Modal)
        .use(Table)
        .use(Menu)
        .use(Card)
        .use(Checkbox)
        .use(Radio);
}