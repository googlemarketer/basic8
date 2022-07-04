<template>
  <div>
    <input type="radio" id="choice" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <label for="choice">{{radioLabel}}</label>

  </div>
</template>

<script>
  export default {
  name: 'FormRadio',  
  props: [
    'modelValue','radioLabel'],

  }
</script>

<style scoped>
input[type="text"], label {
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
  box-shadow: 2px 4px 2px 0 rgba(120,0,0,0.2);

}
</style>