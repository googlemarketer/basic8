<template>
  <div>
    <label for="title">{{label}}</label>
    <input v-bind="$attrs" :type="type" id="title" v-model="inputValue"  :placeholder="label">
  </div>
</template>

<script>
  export default {
  name: 'BaseInput',  
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: String
    },
  },
  computed: {
      inputValue: {
        get() {
          return this.modelValue
        },
        set(value) {
          this.$emit('update:modelValue', value)
        }
      }
    }
}
</script>

<style scoped>
input , label {
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