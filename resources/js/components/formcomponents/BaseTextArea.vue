<template>
  <div>
    <label for="description">{{label}}</label>
    <textarea
      type="text"
      id="description"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="label"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
textarea,
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