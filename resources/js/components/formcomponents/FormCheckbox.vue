<template>
  <div>
    
    <input type="checkbox" id="amenties" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <label for="amenties">{{checkboxLabel}}</label>

  </div>
</template>

<script>
  export default {
  name: 'FormCheckbox',  
  props: ['modelValue','checkboxLabel'],

  }
</script>

<style scoped>
input[type="checkbox"], label {
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