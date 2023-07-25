<template>
  <div class="input">
    <h2>Forme du carrefour</h2>
    <div class="checkbox-container">
      <checkbox-item ref="checkbox1" checkbox-id="checkbox1" :image="image1" @checkbox-change="handleCheckboxChange" />
      <checkbox-item ref="checkbox2" checkbox-id="checkbox2" :image="image2" @checkbox-change="handleCheckboxChange" />
      <checkbox-item ref="checkbox3" checkbox-id="checkbox3" :image="image3" @checkbox-change="handleCheckboxChange" />
      <checkbox-item ref="checkbox4" checkbox-id="checkbox4" :image="image4" @checkbox-change="handleCheckboxChange" />
      <checkbox-item ref="checkbox5" checkbox-id="checkbox5" :image="image5" @checkbox-change="handleCheckboxChange" />
      <!-- Add more checkbox items -->
    </div>
  </div>

    <div v-if="selectedCheckbox">
      <!-- Render additional element based on the selected checkbox -->
      <component :is="selectedCheckboxComponent" @child-data="callAPI"/>
      <success-modal
      v-if="showModal"
      :message="successMessage"
      :show="showModal"
      @close="showModal = false"
    />
    </div>
  </template>
  
  <script>
  import axios from 'axios'

  import { shallowRef,  ref, computed } from 'vue'

  import CheckboxItem from '../components/CheckboxItem.vue';
  import SuccessModal from './SuccessModal.vue';

  import AdditionalElements1 from '../components/T1.vue';
  import AdditionalElements2 from '../components/T2.vue';
  import AdditionalElements3 from '../components/T3.vue';
  import AdditionalElements4 from '../components/T4.vue';
  import AdditionalElements5 from '../components/C1.vue';

  import image1 from "../assets/T1.png"
  import image2 from "../assets/T2.png"
  import image3 from "../assets/T3.png"
  import image4 from "../assets/T4.png"
  import image5 from "../assets/C1.png"
  
  export default {
    components: {
      CheckboxItem,
      SuccessModal,
    },
    data () {
        return{
            showModal: false,
            successMessage: "Le calcul a été soumis avec succès ! le résultat sera téléchargé lorsque le calcul sera terminé.",

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
        tupleToStringKey(tuple){
          return JSON.stringify(tuple)
        },
        async callAPI(data) {

          const dataform = new FormData();

          if (this.selectedCheckbox === 'checkbox5') {
            dataform.append('jtype', 'C')
            dataform.append('flow',JSON.stringify(data['flow']))
            dataform.append('flowtype',data['flowtype'])
            dataform.append('slope',JSON.stringify({1:data['wslope'], 2:data['wslope'], 3:data['wslope'],
                                                    4:data['sslope'], 5:data['sslope'], 6:data['sslope'],
                                                    7:data['eslope'], 8:data['eslope'], 9:data['eslope'],
                                                    10:data['nslope'], 11:data['nslope'], 12:data['nslope']}))
            dataform.append('combine',JSON.stringify({west:data['wcomb'],east:data['ecomb'],south:data['scomb'],north:data['ncomb']}))
            dataform.append('savepath',this.savepath)
            dataform.append('email',this.email)
          } else {
            const west = this.tupleToStringKey([2,3])
            const east = this.tupleToStringKey([7,8])
            const south = this.tupleToStringKey([4,6])
            
            // Append data properties to the FormData object
            dataform.append('jtype', 'T')
            dataform.append('flow',JSON.stringify(data['flow']))
            dataform.append('flowtype',data['flowtype'])
            dataform.append('slope',JSON.stringify({2:data['wslope'],3:data['wslope'],4:data['sslope'],6:data['sslope'],7:data['eslope'],8:data['eslope']}))
            dataform.append('combine',JSON.stringify({west:data['wcomb'],east:data['ecomb'],south:data['scomb']}))
            dataform.append('savepath',data['savepath'])
            dataform.append('email',data['email'])
          }

            let endpoint = 'giveway'
            console.log(process.env.VUE_APP_BACKEND_URL)

            // axios.post(process.env.VUE_APP_BACKEND_URL + endpoint,dataform,{
            // headers: {
            // 'Content-Type': 'multipart/form-data'
            // }
            // })
            // .then(response => {
            //     console.log('Post success!')
            //     console.log(response.data);
            //     this.showModal = true;
            // })
            // .catch(error => {
            //     console.error(error)
            //     alert(`La soumission a échoué à cause de ${error.message}`)
            // })

            
        //     for (var pair of dataform.entries()) {
        //         console.log(pair[0]+ ', ' + pair[1]); 
        //     }
          try {
            const response = await axios.post(process.env.VUE_APP_BACKEND_URL + endpoint, dataform, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });

            if (response.data && response.data.url) {

              this.showModal = true;

              const url = response.data.url;

              // Create a hidden anchor element and set the URL and filename
              const downloadLink = document.createElement('a');
              downloadLink.href = url;

              // Programmatically trigger the click event on the anchor element
              downloadLink.click();

              console.log('Download triggered.');
            } else {
              console.log(response.data.message);
              alert("Un bug apparaît lors du calcul.");
            }
          } catch (error) {
            console.error('Error:', error);
            alert(`La soumission a échoué à cause de ${error.message}`);
          }
        },
                },
  };
  </script>
  <style scoped src="../style/giveway-style-4.css">
</style>
  