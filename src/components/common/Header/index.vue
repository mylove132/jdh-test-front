<template>
  <div class="header">
    <div class="theme">
      <input type="text" placeholder="请输入样式名称" v-model="themeName" @keyup="addThemeStyle" />
      <li v-for="theme of themes" :key="theme.id">
        {{ theme.name }}
        <ThemeStyleButton v-bind:themeStyle="themeData"></ThemeStyleButton>
      </li>
    </div>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent, ref, reactive, watch, onMounted, computed } from "vue";
import { ITheme, THEME_STYLE } from "@/common/types/theme";
import { store } from "@/store";
import { SET_THEME } from "@/store/actiontypes";
import { useTheme, IUseTheme } from "@/hooks/index";
import state from '@/store/state';
import ThemeStyleButton from "@/components/common/ThemeStyleButton/index.vue";
import { IThemeStyle } from "@/common/types/common";
export default defineComponent({
  name: "Header",
  components : {
    ThemeStyleButton
  },
  setup() {
    const { addTheme, setThemeList, getThemeStyle }: IUseTheme = useTheme();
    const themeName = ref<string>("");
    const themeStyle = ref<THEME_STYLE>(THEME_STYLE.DEFAULT);
    const themeData = reactive<IThemeStyle>(getThemeStyle(themeStyle.value));

    const switchTheme = (theme: ITheme): void => {
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
        return store.state.themes;
      },
      (themes: ITheme[]) => {
        setThemeList(themes);
      }
    );

    return {
      themes: computed( () => {return store.state.themes}),
      themeName,
      switchTheme,
      addThemeStyle,
      themeStyle
    };
  }
});
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: 500px;
  .theme {
    width: 500px;
    height: 100px;
    float: right;
  }
}
</style>