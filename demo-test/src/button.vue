<!--
 * @Author: mrzou
 * @Date: 2021-08-16 21:41:06
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-16 21:44:42
 * @Description: file content
-->
<template>
  <button class="m-button">hi</button>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.m-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>
