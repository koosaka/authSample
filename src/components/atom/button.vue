<script setup lang="ts">
type ButtonProps = {
  text: string;
};

defineProps<ButtonProps>();
</script>

<template>
  <button class="button" type="submit">
    {{ text }}
  </button>
</template>

<style lang="scss">
.button {
  color: #fff;
  background-color: #fd5750;
  height: 48px;
  min-width: 90px;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 16px;
  border: none;
  border-radius: 4px;
  text-transform: lowercase;
}
</style>
