<template>
  <div class="header">
    <div class="theme">
      <input type="text" placeholder="请输入样式名称" v-model="themeName" @keyup="addThemeStyle" />
      <li v-for="theme of themes" :key="theme.id">
          <span> {{ theme.name }} </span>
      </li>
    </div>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent, ref, watch, onMounted, computed } from "vue";
import { ITheme, THEME_STYLE } from "@/common/types/theme";
import { store } from "@/store";
import { SET_THEME } from "@/store/actiontypes";
import { useTheme, IUseTheme } from "@/hooks/index";
import state from '../../../store/state';

export default defineComponent({
  name: "Header",
  setup() {
    const { addTheme, setThemeList }: IUseTheme = useTheme();
    const themeName = ref<string>("");

    const switchTheme = (theme: ITheme): void => {
        console.log(theme)
      store.dispatch(SET_THEME, theme);
    };

    const addThemeStyle = (e: KeyboardEvent): void => {
      if (e.keyCode === 13 && themeName.value.trim().length) {
        const theme: ITheme = {
          id: new Date().getTime(),
          name: themeName.value,
          style: THEME_STYLE.DEFAULT
        };
        addTheme(theme);
        themeName.value = "";
      }
    };

    watch(
      () => {
        console.log("000000000--->"+JSON.stringify(store.state.themes));
        return store.state.themes;
      },
      (themes: ITheme[]) => {
        setThemeList();
      }
    );

    return {
      themes: computed( () => {console.log(store.state.themes); return store.state.themes}),
      themeName,
      switchTheme,
      addThemeStyle
    };
  }
});
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