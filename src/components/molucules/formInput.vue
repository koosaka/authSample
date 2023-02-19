<script setup lang="ts">
type Props = {
  id: string;
  label: string;
  type: "text" | "email" | "date" | "password";
  modelValue: string;
};

const props = defineProps<Props>();
console.log(props.modelValue);
const emit = defineEmits(["changeEvent"]);

const changeEvent = (e: any) => {
  emit("changeEvent", e.target.value);
};
</script>

<template>
  <div>
    <label :for="id" class="label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      class="input"
      :value="modelValue"
      @input="changeEvent"
    />
  </div>
</template>

<style lang="scss">
.input {
  background-color: #262626;
  padding: 1rem;
  border: none;
  border-radius: 0.4rem;
  color: white;
  width: 100%;
  font-size: 1rem;
  &:focus {
    border: none;
    outline: none;
  }

  .label {
    display: block;
    margin-bottom: 8px;
  }
}
</style>
