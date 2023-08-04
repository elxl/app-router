<template>
    <div>
      <input type="checkbox" :id="checkboxId" v-model="isChecked" @change="handleChange" /><br>
      <label :for="checkboxId"><img :src="image" class="small-image"/></label><br>
      <!-- <component :is="additionalElementsComponent" v-if="isChecked" /> -->
    </div>
  </template>
  
  <script>
  import AdditionalElements1 from './T1.vue';
  import AdditionalElements2 from './T2.vue';
  import AdditionalElements3 from './T3.vue';
  import AdditionalElements4 from './T4.vue';
  import AdditionalElements5 from './C1.vue';
  
  export default {
    props: {
      checkboxId: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isChecked: false,
        additionalElementsComponent: null,
      };
    },
    watch: {
      isChecked(newVal) {
        this.additionalElementsComponent = newVal ? this.getAdditionalElementsComponent() : null;
      },
    },
    methods: {
      handleChange() {
        this.$emit('checkbox-change', this.checkboxId);
      },
      getAdditionalElementsComponent() {
        switch (this.checkboxId) {
          case 'checkbox1':
            return AdditionalElements1;
          case 'checkbox2':
            return AdditionalElements2;
          case 'checkbox3':
            return AdditionalElements3;
          case 'checkbox4':
            return AdditionalElements4
          case 'checkbox5':
            return AdditionalElements5
          // Add more cases for each checkbox
          default:
            return null;
        }
      },
    },
  };
  </script>
  
  <style>
  .larger-image {
    width: 200px; /* Adjust the size as needed */
    height: 200px;
  }
  
  .small-image {
    width: 50px; 
    height: 50px;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
  }
  </style>
  