<template>

  <div class="input">
      <div class="input-first" >
          <div class="meta-data">
              <label for="cycle">Cycle:</label>
              <input type="text" class="input-text" id="cycle" v-model="cycle">s
          </div>
          <div class="meta-data">
              <label for="iv">Temps intervéhiculaire:</label>
              <input type="text" class="input-text" id="iv" v-model="iv">s/veh
          </div>
          <div class="meta-data">
              <label for="ig">Temps intervert:</label>
                  <input type="radio" id="default" name="speedig" value="true" v-model="ig_mode"> Défaut:
                  <input type="text" class="input-text" name="ig" v-model="ig">s
                  <input type="radio" id="upload" name="speedig" value="false" v-model="ig_mode"> Télécharger
                  <div v-if="ig_mode=='false'" style="display: inline;">
                      <input type="file" id="file" name="filename" @change="handleFileUpload">
                  </div>
          </div>
      </div>
  
      <div class="input-second">
          <div class="meta-data">
              <label for="speed">Vitesse du piéton:</label>
              <input type="text" class="input-text" name="speed" v-model="speedped">m/s
          </div>
          <div class="meta-data">
              <label for="speedig">Vitesse du piéton pour temps intervert:</label>
              <input type="text" class="input-text" name="speedig" v-model="speedpedig">m/s
          </div>
      </div>
  </div>
  
  <div class="config-grid">
      <div>
      </div>
      <div class="north" style="margin-left: 3%;">
          <div>
              <input type="text" class="n-combine" id="combn" v-model="ncomb" placeholder="eg:22,24">
          </div>
          <div>
              <input type="text" class="n-flow-t" id="flow29" :disabled="!check29" v-model="f29">
              <input type="text" class="n-flow-b" id="flow28" :disabled="!check28" v-model="f28">
              <input type="text" class="n-flow" id="flow27" :disabled="!check27" v-model="f27">
              <input type="text" class="n-flow" id="flow26" :disabled="!check26" v-model="f26">
              <input type="text" class="n-flow" id="flow25" :disabled="!check25" v-model="f25">
              <input type="text" class="n-flow" id="flow24" :disabled="!check24" v-model="f24">
              <input type="text" class="n-flow" id="flow23" :disabled="!check23" v-model="f23">
              <input type="text" class="n-flow" id="flow22" :disabled="!check22" v-model="f22">
              <input type="text" class="n-flow-b" id="flow21" :disabled="!check21" v-model="f21">
              <input type="text" class="n-flow-t" id="flow20" :disabled="!check20" v-model="f20">
          </div>
          <div style="margin-left: 0%;">
              <input type="checkbox" class="n-contain-t" id="contain29" value="29" v-model="check29" @click="togglebox($event.target.value)">
              <input type="checkbox" class="n-contain-b" id="contain28" value="28" v-model="check28" @click="togglebox($event.target.value)">
              <input type="checkbox" class="n-contain" id="contain27" value="27" v-model="check27" @click="togglebox($event.target.value)">
              <input type="checkbox" class="n-contain" id="contain26" value="26" v-model="check26" @click="togglebox($event.target.value)">
              <input type="checkbox" class="n-contain" id="contain25" value="25" v-model="check25" @click="togglebox($event.target.value)">
              <input type="checkbox" class="n-contain" id="contain24" value="24" v-model="check24" @click="togglebox($event.target.value)">
              <input type="checkbox" class="n-contain" id="contain23" value="23" v-model="check23" @click="togglebox($event.target.value)">
              <input type="checkbox" class="n-contain" id="contain22" value="22" v-model="check22" @click="togglebox($event.target.value)">
              <input type="checkbox" class="n-contain-b" id="contain21" value="21" v-model="check21" @click="togglebox($event.target.value)">
              <input type="checkbox" class="n-contain-t" id="contain20" value="20" v-model="check20" @click="togglebox($event.target.value)">
          </div>
      </div>
      <div>
      </div>
      <div class="west">
          <div>
              <input type="text" class="w-combine" id="combw" v-model="wcomb" placeholder="eg:32,34">
          </div>
          <div>
              <input type="text" class="w-flow-t" id="flow30" :disabled="!check30" v-model="f30"><br>
              <input type="text" class="w-flow-b" id="flow31" :disabled="!check31" v-model="f31"><br>
              <input type="text" class="w-flow" id="flow32" :disabled="!check32" v-model="f32"><br>
              <input type="text" class="w-flow" id="flow33" :disabled="!check33" v-model="f33"><br>
              <input type="text" class="w-flow" id="flow34" :disabled="!check34" v-model="f34"><br>
              <input type="text" class="w-flow" id="flow35" :disabled="!check35" v-model="f35"><br>
              <input type="text" class="w-flow" id="flow36" :disabled="!check36" v-model="f36"><br>
              <input type="text" class="w-flow" id="flow37" :disabled="!check37" v-model="f37"><br>
              <input type="text" class="w-flow-b" id="flow38" :disabled="!check38" v-model="f38"><br>
              <input type="text" class="w-flow-t" id="flow39" :disabled="!check39" v-model="f39">
          </div>
          <div>
              <input type="checkbox" class="w-contain" id="contain30" value="30" v-model="check30" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="w-contain" id="contain31" value="31" v-model="check31" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="w-contain" id="contain32" value="32" v-model="check32" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="w-contain" id="contain33" value="33" v-model="check33" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="w-contain" id="contain34" value="34" v-model="check34" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="w-contain" id="contain35" value="35" v-model="check35" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="w-contain" id="contain36" value="36" v-model="check36" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="w-contain" id="contain37" value="37" v-model="check37" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="w-contain" id="contain38" value="38" v-model="check38" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="w-contain" id="contain39" value="39" v-model="check39" @click="togglebox($event.target.value)">
          </div>
      </div>
      <div style="position: relative;">
          <img class="standard-fig" src="../assets/advanced.png">
          <div style="position: absolute;top: 30%;left: 40%;">
              <input type="checkbox" class="n-contain" id="ped42" value="42"  v-model="check42" @click="toggleped($event.target.value)">
              <input type="text" class="n-flow" id="width42" v-model="w42" :disabled="!check42" :style="w42 ? 'background-color: white;' : 'background-color: transparent;'">
          </div>
          <div style="position: absolute;top: 40%;right: 27%">
              <input type="checkbox" class="e-contain" id="ped41" value="41" v-model="check41" @click="toggleped($event.target.value)"><br>
              <input type="text" class="e-flow" id="width41" v-model="w41" :disabled="!check41" :style="w41 ? 'background-color: white;' : 'background-color: transparent;'">
          </div>
          <div style="position: absolute;top: 65%;left: 40%;">
              <input type="checkbox" class="s-contain" id="ped40" value="40" v-model="check40" @click="toggleped($event.target.value)">
              <input type="text" class="s-flow" id="width40" v-model="w40" :disabled="!check40" :style="w40 ? 'background-color: white;' : 'background-color: transparent;'">
          </div>
          <div style="position: absolute;top: 40%;right: 65%;">
              <input type="checkbox" class="w-contain" id="ped43" value="43" v-model="check43" @click="toggleped($event.target.value)"><br>
              <input type="text" class="w-flow" id="width43" v-model="w43" :disabled="!check43" :style="w43 ? 'background-color: white;' : 'background-color: transparent;'">
          </div>
      </div>
      <div class="east">
          <div>
              <input type="checkbox" class="e-contain" id="contain19" value="19" v-model="check19" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="e-contain" id="contain18" value="18" v-model="check18" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="e-contain" id="contain17" value="17" v-model="check17" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="e-contain" id="contain16" value="16" v-model="check16" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="e-contain" id="contain15" value="15" v-model="check15" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="e-contain" id="contain14" value="14" v-model="check14" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="e-contain" id="contain13" value="13" v-model="check13" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="e-contain" id="contain12" value="12" v-model="check12" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="e-contain" id="contain11" value="11" v-model="check11" @click="togglebox($event.target.value)"><br>
              <input type="checkbox" class="e-contain" id="contain10" value="10" v-model="check10" @click="togglebox($event.target.value)">
          </div>
  
          <div>
              <input type="text" class="e-flow-t" id="flow19" :disabled="!check19" v-model="f19"><br>
              <input type="text" class="e-flow-b" id="flow18" :disabled="!check18" v-model="f18"><br>
              <input type="text" class="e-flow" id="flow17" :disabled="!check17" v-model="f17"><br>
              <input type="text" class="e-flow" id="flow16" :disabled="!check16" v-model="f16"><br>
              <input type="text" class="e-flow" id="flow15" :disabled="!check15" v-model="f15"><br>
              <input type="text" class="e-flow" id="flow14" :disabled="!check14" v-model="f14"><br>
              <input type="text" class="e-flow" id="flow13" :disabled="!check13" v-model="f13"><br>
              <input type="text" class="e-flow" id="flow12" :disabled="!check12" v-model="f12"><br>
              <input type="text" class="e-flow-b" id="flow11" :disabled="!check11" v-model="f11"><br>
              <input type="text" class="e-flow-t" id="flow10" :disabled="!check10" v-model="f10">
          </div>
          <div>
              <input type="text" class="e-combine" id="combe" v-model="ecomb" placeholder="eg:12,14">
          </div>
      </div>
      <div>
      </div>
      <div class="south">
          <div style="margin-left: 3%;">
              <input type="checkbox" class="s-contain" id="contain0" value="0" v-model="check0" @click="togglebox($event.target.value)">
              <input type="checkbox" class="s-contain" id="contain1" value="1" v-model="check1" @click="togglebox($event.target.value)">
              <input type="checkbox" class="s-contain" id="contain2" value="2" v-model="check2" @click="togglebox($event.target.value)">
              <input type="checkbox" class="s-contain" id="contain3" value="3" v-model="check3" @click="togglebox($event.target.value)">
              <input type="checkbox" class="s-contain" id="contain4" value="4" v-model="check4" @click="togglebox($event.target.value)">
              <input type="checkbox" class="s-contain" id="contain5" value="5" v-model="check5" @click="togglebox($event.target.value)">
              <input type="checkbox" class="s-contain" id="contain6" value="6" v-model="check6" @click="togglebox($event.target.value)">
              <input type="checkbox" class="s-contain" id="contain7" value="7" v-model="check7" @click="togglebox($event.target.value)">
              <input type="checkbox" class="s-contain" id="contain8" value="8" v-model="check8" @click="togglebox($event.target.value)">
              <input type="checkbox" class="s-contain" id="contain9" value="9" v-model="check9" @click="togglebox($event.target.value)">
          </div>
          <div style="margin-left: 3%;">
              <input type="text" class="s-flow-t" id="flow0" :disabled="!check0" v-model="f0">
              <input type="text" class="s-flow-b" id="flow1" :disabled="!check1" v-model="f1">
              <input type="text" class="s-flow" id="flow2" :disabled="!check2" v-model="f2">
              <input type="text" class="s-flow" id="flow3" :disabled="!check3" v-model="f3">
              <input type="text" class="s-flow" id="flow4" :disabled="!check4" v-model="f4">
              <input type="text" class="s-flow" id="flow5" :disabled="!check5" v-model="f5">
              <input type="text" class="s-flow" id="flow6" :disabled="!check6" v-model="f6">
              <input type="text" class="s-flow" id="flow7" :disabled="!check7" v-model="f7">
              <input type="text" class="s-flow-b" id="flow8" :disabled="!check8" v-model="f8">
              <input type="text" class="s-flow-t" id="flow9" :disabled="!check9" v-model="f9">
          </div>
          <div>
              <input type="text" class="s-combine" id="combs" v-model="scomb" placeholder="eg:2,4">
          </div>
      </div>
      <div></div>
      <div></div>
      <div class="bus">
      <label for="bus" style="font-size: 20px"><b>Voies de bus:</b></label>
      <input type="text" id="bus" placeholder="eg:1;12;24;36" v-model="bus" style="margin-left: 5px;height: 30px;width: 150px;">
      </div>  
      <div></div>
  </div>
  
  <div class="next">
      <button class="nextstep" @click="validateInput">Suivant</button>
  </div>
  
  <div v-if="process">
      <div class="next-title">
          <h2 >Nom du mouvement et détails du calcul</h2>
      </div>
      <div style="display: flex;align-items: center; justify-content: center;">
          <div class="name-container">
          <div v-for="(combine,index) in mvt" :key="index" class="name-element">
          <label for="">
              {{ combine }}:<input type="text" class="input-name" :id="combine" v-model="nameofmvt[combine]">
          </label>
          </div>
          </div>
      </div>
  
      <div>
          <label for="secondary">Conflit autorisé:</label>
          <input type="text" class="authorize" id="secondary" placeholder="eg:V1,V2;P5,V4" v-model="authorize">
          <label for="added">Conflit ajouté:</label>
          <input type="text" class="authorize" id="added" placeholder="eg:V1,V2;P5,V4" v-model="added">
      </div>
  
      <div class="details">
          <label class="checkbox">
          <input type="checkbox" v-model="opt">
          Optimisation du temps vert
          </label>
          <label class="checkbox">
          <input type="checkbox" v-model="conflict">
          Mouvements déterminants en conflits
          </label>  
          <label for="savefile" class="checkbox">    
          Affaire:
          <input type="text" id="savefile" v-model="project">
          </label>  
          <label for="savefile" class="checkbox">
          Nom de fichier:
          <input type="text" id="savefile" v-model="savepath">
          </label>
          <label for="email" class="checkbox">  
          Email:
          <input type="text" id="email" v-model="email">
          </label>
      </div>
  
      <div class="next" ref="bottomElement">
            <button class="nextstep" @click="validateData" id="submit">Calculer</button>
            <success-modal
            v-if="showModal"
            :message="successMessage"
            :show="showModal"
            @close="showModal = false"
            />
      </div>
     
  </div>
  
  </template>
  
  <script>
  import axios from 'axios'
  import SuccessModal from './SuccessModal.vue';
  
  export default {
    components: {
      SuccessModal,
    },
      data () {
          return {
              showModal: false,
              successMessage: "Le calcul a été soumis. Le résultat sera envoyé par e-mail dès qu'il sera terminé.",
              
              cycle: 90,
              iv: 2,
              ig_mode: true,
              ig: 7,
              file: null,
              speedped: 1,
              speedpedig: 1.2,
              checkedbox: [],
              checkedped: [],
              bus: null,
              scomb: '',
              ecomb: '',
              ncomb: '',
              wcomb: '',
              slist: [0,1,2,3,4,5,6,7,8,9],
              elist: [10,11,12,13,14,15,16,17,18,19],
              nlist: [20,21,22,23,24,25,26,27,28,29],
              wlist: [30,31,32,33,34,35,36,37,38,39],
              check0: false,
              check1: false,
              check2: false,
              check3: false,
              check4: false,
              check5: false,
              check6: false,
              check7: false,
              check8: false,
              check9: false,
              check10: false,
              check11: false,
              check12: false,
              check13: false,
              check14: false,
              check15: false,
              check16: false,
              check17: false,
              check18: false,
              check19: false,
              check20: false,
              check21: false,
              check22: false,
              check23: false,
              check24: false,
              check25: false,
              check26: false,
              check27: false,
              check28: false,
              check29: false,
              check30: false,
              check31: false,
              check32: false,
              check33: false,
              check34: false,
              check35: false,
              check36: false,
              check37: false,
              check38: false,
              check39: false,
              w40: '',
              w41: '',
              w42: '',
              w43: '',
              check40: false,
              check41: false,
              check42: false,
              check43: false,
  
              process: false,
              nameofmvt: {},
              mvt: [],
              authorize: null,
              added: null,
  
              opt: false,
              conflict: false,
              project: '',
              savepath: null,
              email: null,
          }
      },
      created() {
          for (let i = 0; i < 40; i++) {
            this['f' + i] = '';
          }
          },

      methods: {
            togglebox(value) {
                // append value to checked box if not exist and remove it otherwise
                if (this['check'+value]) {
                    const index = this.checkedbox.indexOf(value);
                    if (index !== -1) {
                        this.checkedbox.splice(index, 1);
                    }
                    this['f'+value] = ''
                } else {
                    this.checkedbox.push(value);
                }
            this['check'+value] = !this['check'+value];
            },
            toggleped(value) {
                // append value to checked box if not exist and remove it otherwise
                if (this['check'+value]) {
                    const index = this.checkedped.indexOf(value);
                    if (index !== -1) {
                        this.checkedped.splice(index, 1);
                    }
                    this['w'+value] = ''
                } else {
                    this.checkedped.push(value);
                }
            this['check'+value] = !this['check'+value];
            },
          handleFileUpload(event) {
              this.file = event.target.files[0]
          },
        // Validate inputs
        validateInput() {
            // Check if all flows and widths are integers
            const regex = /^-?\d+$/; // Regular expression to match integers

            for (const value of this.checkedbox) {
                if (!regex.test(this['f'+value])) {
                    this.process = false
                    alert("Veuillez saisir des nombres valides dans toutes les zones de texte du flux!");
                    return; // Exit the method if any non-integer value is found
                }
            }
            for (const value of this.checkedped) {
                if (!regex.test(this['w'+value])) {
                    this.process = false
                    alert("Veuillez saisir des nombres valides dans toutes les zones de texte du longeur!");
                    return; // Exit the method if any non-integer value is found
                }
            }

            // Check if the combination only contains the flow ticked
            let lists = ['s','e','n','w']
            for (const branch of lists){
                let includedNumbers = this.checkedbox.filter(element => this[branch + 'list'].includes(parseInt(element)));
                let regex_comb = new RegExp(`^(${includedNumbers.join('|')}|,|;)+$`);
                if (this[branch + 'comb']!=='' && !regex_comb.test(this[branch + 'comb'])) {
                    alert('Mouvement non sélectionné inclus dans la combinaison!');
                    return;
                }
            }

            // Check if the bus lanes only contains the flow ticked and non-train
            let bus_candidate = [1,2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38]
            let includedNumbers = this.checkedbox.filter(element => bus_candidate.includes(parseInt(element)));
            let regex_comb = new RegExp(`^(${includedNumbers.join('|')}|;)+$`);
            if (this.bus!==null && !regex_comb.test(this.bus)) {
                alert('Mouvement non sélectionné ou le voie du train inclus dans les voies de bus!');
                return;
            }
            // Process valid inputs
            this.preprocess()

        },
          preprocess() {     
              // Clear name
              this.nameofmvt = {}
              // Get base information of the intersection
  
              let compose = {};
  
              for (let i of this.checkedbox) {
              let flow = this['f' + i];
              compose[parseInt(i)] = ['V', flow];
              }
  
              for (let i of this.checkedped) {
              let width = this['w' + i];
              compose[parseInt(i)] = ['P', width];
              }
  
              // Get combination of lanes
              let composition = [];
              let combined = [];
              function checkComb(comb, comp,combined) {
                  if (comb.length !==0){
                      comb = comb.replace(/\s/g, "")
                      let listOfTuples = comb.split(';').map(tupleString => tupleString.split(',').map(Number));
                      for (let tuple of listOfTuples) {
                          if (tuple.length > 0) {
                            tuple = tuple.sort()
                            comp.push(tuple);
                            combined = combined.concat(tuple)
                          }
                          }
                      }
                  return combined
              }
              combined = checkComb(this.scomb,composition,combined)
              combined = checkComb(this.ecomb,composition,combined)
              combined = checkComb(this.ncomb,composition,combined)
              combined = checkComb(this.wcomb,composition,combined)
  
              this.compose = compose
              this.comb = composition
              // Prepare name dictionary
              let mvt = []
              for (const item of this.checkedbox) {
                  if (!combined.includes(parseInt(item))) {
                      mvt.push(parseInt(item));
                  }
                  }
              for (const each of composition)
                  mvt.push(each);
  
              mvt = mvt.concat(this.checkedped.map(str => parseInt(str)))
              // Sort list
              mvt.sort((a, b) => (typeof a === 'number' ? a : a[0]) - (typeof b === 'number' ? b : b[0]));
              this.mvt = mvt
              // Set default names
              let train = [0,9,10,19,20,29,30,39]
              mvt.forEach((combine, index) => {
                    if (typeof combine === 'number' && combine >= 40) {
                    this.nameofmvt[combine] =  'P' + (index+1);
                    } else if (train.includes(combine)) {
                        this.nameofmvt[combine] =  'T' + (index+1);
                    }
                    else {
                        this.nameofmvt[combine] =  'V' + (index+1);
                    }
              });
              
              // Show name component
              this.process = true
  
              // Scroll to the bottom element
              this.$nextTick(() => {
                  const bottomElement = this.$refs.bottomElement;
                  bottomElement.scrollIntoView({ behavior: 'smooth' });
              });
  
          },

          validateData() {
            // Check if input is all valid
            // Check unique input names
            const names = Object.values(this.nameofmvt);
            const uniqueNames = new Set(names);

            if (names.length !== uniqueNames.size) {
                alert("Veillez à ce que tous les noms du mouvement soient différents!");
                return; 
            }

            // Check secondary conflict
            if (this.authorize !== null && this.authorize !== ''){
                const values = this.authorize.split(/[,;]/);
                const allValuesExist = values.every(value => names.includes(value.trim()));
                if (!allValuesExist) {
                alert("Les mouvements dans les conflits autorisés ne sont pas inclus!");
                return; 
            }
            }
            // Check added conflict
            if (this.added !== null && this.added !== ''){
                const values = this.added.split(/[,;]/);
                const allValuesExist = values.every(value => names.includes(value.trim()));
                if (!allValuesExist) {
                alert("Les mouvements dans les conflits ajoutés ne sont pas inclus!");
                return; 
            }
            }

            // Check file name
            if (this.savepath === null || this.savepath === '') {
                alert("Veuillez indiquer le nom du fichier!");
                return; 
            }  
            // if (!this.savepath.endsWith(".pdf")) {
            //     alert("Le nom de fichier doit se terminer par .pdf!");
            //     return;                
            // }
            // check email address
            if (this.email === null || this.email === '') {
                alert("Veuillez indiquer le l'adresse email!");
                return; 
            }            

            // Call API
            this.callAPI()

        },

          callAPI() {

              this.showModal = true;
  
              const data = new FormData();
              // Append data properties to the FormData object
              data.append('parameters',JSON.stringify({'cycle':this.cycle, 'ivt':this.iv,'vw':this.speedped,'vwig':this.speedpedig,'ig':this.ig}))
              data.append('compose',JSON.stringify(this.compose))
              data.append('name',JSON.stringify(this.nameofmvt))
              data.append('secondary',this.authorize)
              data.append('added',this.added)
              data.append('default',this.ig_mode)
              data.append('opt',this.opt)
              data.append('conflict',this.conflict)
              data.append('savepath',this.project+'-'+this.savepath)
              data.append('email',this.email)
              data.append('bus',this.bus)
  
              let endpoint = null
              if (this.ig_mode != true){
                  // Append file to the FormData object
                  data.append('file', this.file);
                  endpoint = 'advanced-upload'
  
              } else {
                  endpoint = 'advanced-default'
              }
  
              axios.post(process.env.VUE_APP_BACKEND_URL + endpoint,data,{
              headers: {
              'Content-Type': 'multipart/form-data'
              }
              })
              .then(response => {
                  console.log('Post success!')
                  console.log(response.data);
              })
              .catch(error => {
                  console.error(error)
                  alert(`La soumission a échoué à cause de ${error.message}`)
              })
             
          },
  
          getname () {
              console.log(this.nameofmvt)
          }
      },
  }
  </script>
  
  <style scoped src="../style/advanced-style.css">
  </style>
  
