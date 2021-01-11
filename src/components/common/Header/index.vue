<template>
    <div class="header">
        <div class="theme">
            <input type="text" placeholder="请输入样式名称" v-model="" />
            <select> 
               <option :value="theme.name" v-for="theme of themes" @change="switchTheme(theme)"> {{ theme.name }} </option>
            </select>
        </div>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent, ref } from "vue";
import { ITheme, THEME_STYLE } from "@/common/types/theme";
import { store, useStore } from '@/store';
import { SET_THEME } from "@/store/actiontypes";

export default defineComponent ({
    name: "Header",
    setup () {
        const themes: ITheme[] = store.state.themes;
        const theme_name = ref<string>('');

        const switchTheme = (theme: ITheme): void => {
            useStore().dispatch(SET_THEME, theme);
        }
        return {
            themes,
            theme_name,
            switchTheme
        }
    }
})
</script>

<style lang='scss' scoped>
    .header {
        width: 100%;
        height: 100px;
        background-color: #fcfc;
        .theme {
            width: 200px;
            height: 100px;
            float: right;
            background-color: aqua;
        }
    }
</style>