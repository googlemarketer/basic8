<template>
    <div>

        <h1>Header</h1>
 
    </div>
</template>

<script>

export default {
    name: "student-form-component",
    data() {
        return {
            text: 'Name'
        }
    },  

  mounted() {
    console.log("Component mounted.");
  },
  
};
</script>
