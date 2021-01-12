<template>
  <div class="theme-style">
    <div class="semicircle-left"></div>
    <div class="semicircle-right"></div>
  </div>
</template>

<script lang = 'ts'>
import { IThemeStyle } from "@/common/types/common";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "ThemeStyleButton",
  props: {
    themeStyle: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(props) {
    const bColor = ref<string>("");
    onMounted (() => {
    })
  },
});
</script>

<style lang = 'scss' scoped>
.theme-style {
  height: 150px;
  width: 250px;
  background-color: bisque;
  .semicircle-left {
    @include semicircle(50px, red, #fff, "left");
  }
  .semicircle-right {
    @include semicircle(50px, red, #fff, "right");
  }
}
</style>