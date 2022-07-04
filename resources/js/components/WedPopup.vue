<template>
  <div class="popup">
    <h1>{{header}}</h1>
    <pre>
      {{JSON.stringify(formData,null,2)}}
    </pre>
    <form @submit.prevent="formSubmit">
      <div>
        <CustomRadio label="Foo" value="foo" v-model="MySelectedValue"></CustomRadio>
        <CustomRadio label="Bar" value="var" v-model="MySelectedValue"></CustomRadio>
        <CustomRadio label="Baz" value="baz" v-model="MySelectedValue"></CustomRadio>
       </div>
      <p>
        <BaseInput
          v-for="(input,i) in textInputs"
          :key="i"
          :label="input.label"
          v-model="input.value"
          :type="input.type"
          :placeholder="input.placeholder"
        ></BaseInput>
      </p>
      <p>
        <BaseInput
          label="Title"
          v-model="formData.title"
        ></BaseInput>
      </p>
      <p>
        <BaseTextArea
          label="Description"
          v-model="formData.description"
        ></BaseTextArea>
      </p>
      <p>
        <FormCheckbox
          type="checkbox"
          checkboxLabel="Amenties"
          v-model="formData.amenties"
          value="php"
        ></FormCheckbox>
      </p>
      <p>
        <FormRadio
          type="radio"
          radioLabel="choice"
          v-model="formData.choice"
        ></FormRadio>
      </p>
      <p>
        <BaseSelect
          label="Options"
          v-model="formData.options"
        ></BaseSelect>
      </p>
      <p><BaseCheckBox fieldId="volume" v-model="volumeOn" label="Volume On" /></p>
      <!-- <input type="text" v-model="name"> -->
      <!-- <button @click="$emit('close', name)">close</button> -->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "./formcomponents/BaseInput";
import BaseSelect from "./formcomponents/BaseSelect";
import BaseTextArea from "./formcomponents/BaseTextArea";
import BaseCheckBox from "./formcomponents/BaseCheckBox";
import FormCheckbox from "./formcomponents/FormCheckbox";
import FormRadio from "./formcomponents/FormRadio";
import CustomRadio from "./formcomponents/CustomRadio";

export default {
  name: "WedPopup",
  components: {
    BaseInput,
    BaseTextArea,
    BaseSelect,
    BaseCheckBox,
    FormCheckbox,
    FormRadio,
    CustomRadio
  },
  props: ["header"],
  data() {
    return {
      formData: {
        title: "",
        description: "",
        amenties: [],
        choice: true,
        options: "",
        volumeOn: '',
      },
      MySelectedValue: "",
      textInputs: [
        {
          label: "First Name",
          value: "",
          type: "text",
          placeholder: "Enter your firstname",
        },
        {
          label: "Last Name",
          value: "",
          type: "text",
          placeholder: "Enter your lastname",
        },
        {
          label: "Email",
          value: "",
          type: "email",
          placeholder: "Enter your Email",
        },
      ],
      name: "",
    };
  },
  emits: {
    close: name => {
      if (!name) {
        return false;
      } else {
        return true;
      }
    },
  },

  methods: {
   formSubmit() {
      console.log(
        this.formData,
        this.textInputs[0].value,
        this.textInputs[1].value,
        this.textInputs[2].value
      );
    },
  },
};
</script>

<style scoped>
.popup {
  display: block;
  padding: 1em;
}
</style>