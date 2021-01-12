<template>
  <div class="theme-style">
    <div class="theme-style-background"></div>
    <div class="theme-style-color"></div>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ThemeStyleButton",
  setup() {
      const bColor = ref<string>('');
  }
});
</script>

<style lang = 'scss' scoped>
.theme-style-background {
    @include semicircle(10px, )
}

</style>