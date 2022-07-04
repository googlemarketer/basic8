<template>
  <div>
    <label for="options">{{label}}</label>
    <select
      id="options"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="label"
    >
      <option value="One">Value One</option>
      <option value="Two">Value Two</option>
      <option value="Three">Value Three</option>
      </select>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style scoped>
input[type="text"],
label {
  display: inline-block;
  width: 400px;
  padding: 0.3em 0.6em;
  font-size: 0.9em;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 4px 2px 0 rgba(120, 0, 0, 0.2);
}
</style>