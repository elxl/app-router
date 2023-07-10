<template>
    <div class="checkbox-container">
      <checkbox-item ref="checkbox1" checkbox-id="checkbox1" :image="image1" @checkbox-change="handleCheckboxChange" />
      <checkbox-item ref="checkbox2" checkbox-id="checkbox2" :image="image2" @checkbox-change="handleCheckboxChange" />
      <checkbox-item ref="checkbox3" checkbox-id="checkbox3" :image="image3" @checkbox-change="handleCheckboxChange" />
      <checkbox-item ref="checkbox4" checkbox-id="checkbox4" :image="image4" @checkbox-change="handleCheckboxChange" />
      <checkbox-item ref="checkbox5" checkbox-id="checkbox5" :image="image5" @checkbox-change="handleCheckboxChange" />
      <!-- Add more checkbox items -->
    </div>

    <div v-if="selectedCheckbox">
      <!-- Render additional element based on the selected checkbox -->
      <component :is="selectedCheckboxComponent" @child-data="handleChildData"/>
    </div>
  </template>
  
  <script>
  import { shallowRef,  ref, computed } from 'vue'

  import CheckboxItem from '../components/CheckboxItem.vue';

  import AdditionalElements1 from '../components/T1.vue';
  import AdditionalElements2 from '../components/T2.vue';
  import AdditionalElements3 from '../components/T3.vue';
  import AdditionalElements4 from '../components/T4.vue';
  import AdditionalElements5 from '../components/C1.vue';

  import image1 from "../assets/T1.png"
  import image2 from "../assets/T2.png"
  import image3 from "../assets/T3.png"
  import image4 from "../assets/T4.png"
  import image5 from "../assets/T5.png"
  
  export default {
    components: {
      CheckboxItem,
    },
    data () {
        return{
            image1,
            image2,
            image3,
            image4,
            image5,

            selectedCheckbox:null,
            selectedCheckboxComponent:null,
        }
    },
    methods: {
        handleCheckboxChange(checkboxId) {
            for (const refName in this.$refs) {
                if (refName.startsWith('checkbox')) {
                    const child = this.$refs[refName];
                    if (child.checkboxId !== checkboxId) {
                    child.isChecked = false;
                    }
                }
                }
                if (checkboxId === this.selectedCheckbox) {
                    this.selectedCheckbox = null;
                    this.selectedCheckboxComponent = null;
                } else {
                    if (checkboxId === 'checkbox1') {
                    this.selectedCheckbox = 'checkbox1';
                    this.selectedCheckboxComponent = shallowRef(AdditionalElements1);
                    } else if (checkboxId === 'checkbox2') {
                    this.selectedCheckbox = 'checkbox2';
                    this.selectedCheckboxComponent = shallowRef(AdditionalElements2);
                    } else if (checkboxId === 'checkbox3') {
                    this.selectedCheckbox = 'checkbox3';
                    this.selectedCheckboxComponent = shallowRef(AdditionalElements3);
                    } else if (checkboxId === 'checkbox4') {
                    this.selectedCheckbox = 'checkbox4';
                    this.selectedCheckboxComponent = shallowRef(AdditionalElements4);
                    } else if (checkboxId === 'checkbox5') {
                    this.selectedCheckbox = 'checkbox5';
                    this.selectedCheckboxComponent = shallowRef(AdditionalElements5);
                    } else {
                    this.selectedCheckbox = null;
                    this.selectedCheckboxComponent = null;
                    }
                    }},
                    handleChildData(data) {
                        // Access the child data here
                        console.log(data);
                    },
                },
  };
  </script>
  <style scoped src="../style/giveway-style.css">
</style>
  