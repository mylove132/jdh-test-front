<template>
  <router-view />
</template>

<script lang = 'ts'>
import { defineComponent, onMounted, reactive, watch } from "vue";
import { Color } from "./common/contants";
import { IThemeStyle } from "./common/types/common";
import { THEME_STYLE } from "./common/types/theme";
import { useTheme, userLocalStorage } from "./hooks";
import state from "./store/state";

export default defineComponent({
  setup() {
    const { setThemeList, getThemeStyle } = useTheme();
    const { getThemeList } = userLocalStorage();
    let systemTheme = reactive<IThemeStyle>({
      backgroundColor: Color.WHITE,
      color: Color.BLACK,
      text: ""
    });

    watch(
      () => { return state.themeStyle },
      (themeStyle: THEME_STYLE) => {
        systemTheme = getThemeStyle(themeStyle);
      }
    );

    onMounted(() => {
      setThemeList(getThemeList());
    });

    return {
      systemTheme
    }
  },
});
</script>

<style lang="scss">
#app {
  @include setSystemTheme(yellow, black);
}
</style>
