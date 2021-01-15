<template>
   <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
      <a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent, ref, reactive, watch, onMounted, computed } from "vue";
import { ITheme, THEME_STYLE } from "@/common/types/theme";
import { store } from "@/store";
import { SET_THEME } from "@/store/actiontypes";
import { useTheme } from "@/hooks/index";
import state from '@/store/state';
import { IThemeStyle } from "@/common/types/common";
import { IUseTheme } from "@/hooks/useTheme";
export default defineComponent({
  name: "Header",
  components : {
    
  },
  setup() {

    const current: string[] = ['mail'];
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
      themeStyle,
      current
    };
  }
});
</script>

<style lang='less' scoped>

</style>