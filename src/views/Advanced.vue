<template>

  <div class="input">
      <div class="input-first" >
          <div class="meta-data">
              <label for="cycle">Cycle:</label>
              <input type="text" class="input-text" id="cycle" v-model="cycle">s
          </div>
          <div class="meta-data">
              <label for="iv">Inter vehicle time:</label>
              <input type="text" class="input-text" id="iv" v-model="iv">s/veh
          </div>
          <div class="meta-data">
              <label for="ig">Inter green time:</label>
                  <input type="radio" id="default" name="speedig" value="true" v-model="ig_mode"> Default:
                  <input type="text" class="input-text" name="ig" v-model="ig">s
                  <input type="radio" id="upload" name="speedig" value="false" v-model="ig_mode"> Upload
                  <div v-if="ig_mode=='false'" style="display: inline;">
                      <input type="file" id="file" name="filename" @change="handleFileUpload">
                  </div>
          </div>
      </div>
  
      <div class="input-second">
          <div class="meta-data">
              <label for="speed">Speed of pedestrian:</label>
              <input type="text" class="input-text" name="speed" v-model="speedped">m/s
          </div>
          <div class="meta-data">
              <label for="speedig">Speed of pedestrain for inter green:</label>
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
              <input type="text" class="n-flow-t" id="flow29" v-model="f29">
              <input type="text" class="n-flow-b" id="flow28" v-model="f28">
              <input type="text" class="n-flow" id="flow27" v-model="f27">
              <input type="text" class="n-flow" id="flow26" v-model="f26">
              <input type="text" class="n-flow" id="flow25" v-model="f25">
              <input type="text" class="n-flow" id="flow24" v-model="f24">
              <input type="text" class="n-flow" id="flow23" v-model="f23">
              <input type="text" class="n-flow" id="flow22" v-model="f22">
              <input type="text" class="n-flow-b" id="flow21" v-model="f21">
              <input type="text" class="n-flow-t" id="flow20" v-model="f20">
          </div>
          <div style="margin-left: 0%;">
              <input type="checkbox" class="n-contain-t" id="contain29" value="29" v-model="checkedbox">
              <input type="checkbox" class="n-contain-b" id="contain28" value="28" v-model="checkedbox">
              <input type="checkbox" class="n-contain" id="contain27" value="27" v-model="checkedbox">
              <input type="checkbox" class="n-contain" id="contain26" value="26" v-model="checkedbox">
              <input type="checkbox" class="n-contain" id="contain25" value="25" v-model="checkedbox">
              <input type="checkbox" class="n-contain" id="contain24" value="24" v-model="checkedbox">
              <input type="checkbox" class="n-contain" id="contain23" value="23" v-model="checkedbox">
              <input type="checkbox" class="n-contain" id="contain22" value="22" v-model="checkedbox">
              <input type="checkbox" class="n-contain-b" id="contain21" value="21" v-model="checkedbox">
              <input type="checkbox" class="n-contain-t" id="contain20" value="20" v-model="checkedbox">
          </div>
      </div>
      <div>
      </div>
      <div class="west">
          <div>
              <input type="text" class="w-combine" id="combw" v-model="wcomb" placeholder="eg:32,34">
          </div>
          <div>
              <input type="text" class="w-flow-t" id="flow30" v-model="f30"><br>
              <input type="text" class="w-flow-b" id="flow31" v-model="f31"><br>
              <input type="text" class="w-flow" id="flow32" v-model="f32"><br>
              <input type="text" class="w-flow" id="flow33" v-model="f33"><br>
              <input type="text" class="w-flow" id="flow34" v-model="f34"><br>
              <input type="text" class="w-flow" id="flow35" v-model="f35"><br>
              <input type="text" class="w-flow" id="flow36" v-model="f36"><br>
              <input type="text" class="w-flow" id="flow37" v-model="f37"><br>
              <input type="text" class="w-flow-b" id="flow38" v-model="f38"><br>
              <input type="text" class="w-flow-t" id="flow39" v-model="f39">
          </div>
          <div>
              <input type="checkbox" class="w-contain" id="contain30" value="30" v-model="checkedbox"><br>
              <input type="checkbox" class="w-contain" id="contain31" value="31" v-model="checkedbox"><br>
              <input type="checkbox" class="w-contain" id="contain32" value="32" v-model="checkedbox"><br>
              <input type="checkbox" class="w-contain" id="contain33" value="33" v-model="checkedbox"><br>
              <input type="checkbox" class="w-contain" id="contain34" value="34" v-model="checkedbox"><br>
              <input type="checkbox" class="w-contain" id="contain35" value="35" v-model="checkedbox"><br>
              <input type="checkbox" class="w-contain" id="contain36" value="36" v-model="checkedbox"><br>
              <input type="checkbox" class="w-contain" id="contain37" value="37" v-model="checkedbox"><br>
              <input type="checkbox" class="w-contain" id="contain38" value="38" v-model="checkedbox"><br>
              <input type="checkbox" class="w-contain" id="contain39" value="39" v-model="checkedbox">
          </div>
      </div>
      <div style="position: relative;">
          <img class="standard-fig" src="../assets/advanced.png">
          <div style="position: absolute;top: 30%;left: 40%;">
              <input type="checkbox" class="n-contain" id="ped42" value="42" v-model="checkedped">
              <input type="text" class="n-flow" id="width42" v-model="w42" :style="w42 ? 'background-color: white;' : 'background-color: transparent;'">
          </div>
          <div style="position: absolute;top: 40%;right: 27%">
              <input type="checkbox" class="e-contain" id="ped41" value="41" v-model="checkedped"><br>
              <input type="text" class="e-flow" id="width41" v-model="w41" :style="w41 ? 'background-color: white;' : 'background-color: transparent;'">
          </div>
          <div style="position: absolute;top: 65%;left: 40%;">
              <input type="checkbox" class="s-contain" id="ped40" value="40" v-model="checkedped">
              <input type="text" class="s-flow" id="width40" v-model="w40" :style="w40 ? 'background-color: white;' : 'background-color: transparent;'">
          </div>
          <div style="position: absolute;top: 40%;right: 65%;">
              <input type="checkbox" class="w-contain" id="ped43" value="43" v-model="checkedped"><br>
              <input type="text" class="w-flow" id="width43" v-model="w43" :style="w43 ? 'background-color: white;' : 'background-color: transparent;'">
          </div>
      </div>
      <div class="east">
          <div>
              <input type="checkbox" class="e-contain" id="contain19" value="19" v-model="checkedbox"><br>
              <input type="checkbox" class="e-contain" id="contain18" value="18" v-model="checkedbox"><br>
              <input type="checkbox" class="e-contain" id="contain17" value="17" v-model="checkedbox"><br>
              <input type="checkbox" class="e-contain" id="contain16" value="16" v-model="checkedbox"><br>
              <input type="checkbox" class="e-contain" id="contain15" value="15" v-model="checkedbox"><br>
              <input type="checkbox" class="e-contain" id="contain14" value="14" v-model="checkedbox"><br>
              <input type="checkbox" class="e-contain" id="contain13" value="13" v-model="checkedbox"><br>
              <input type="checkbox" class="e-contain" id="contain12" value="12" v-model="checkedbox"><br>
              <input type="checkbox" class="e-contain" id="contain11" value="11" v-model="checkedbox"><br>
              <input type="checkbox" class="e-contain" id="contain10" value="10" v-model="checkedbox">
          </div>
  
          <div>
              <input type="text" class="e-flow-t" id="flow19" v-model="f19"><br>
              <input type="text" class="e-flow-b" id="flow18" v-model="f18"><br>
              <input type="text" class="e-flow" id="flow17" v-model="f17"><br>
              <input type="text" class="e-flow" id="flow16" v-model="f16"><br>
              <input type="text" class="e-flow" id="flow15" v-model="f15"><br>
              <input type="text" class="e-flow" id="flow14" v-model="f14"><br>
              <input type="text" class="e-flow" id="flow13" v-model="f13"><br>
              <input type="text" class="e-flow" id="flow12" v-model="f12"><br>
              <input type="text" class="e-flow-b" id="flow11" v-model="f11"><br>
              <input type="text" class="e-flow-t" id="flow10" v-model="f10">
          </div>
          <div>
              <input type="text" class="e-combine" id="combe" v-model="ecomb" placeholder="eg:12,14">
          </div>
      </div>
      <div>
      </div>
      <div class="south">
          <div style="margin-left: 3%;">
              <input type="checkbox" class="s-contain" id="contain0" value="0" v-model="checkedbox">
              <input type="checkbox" class="s-contain" id="contain1" value="1" v-model="checkedbox">
              <input type="checkbox" class="s-contain" id="contain2" value="2" v-model="checkedbox">
              <input type="checkbox" class="s-contain" id="contain3" value="3" v-model="checkedbox">
              <input type="checkbox" class="s-contain" id="contain4" value="4" v-model="checkedbox">
              <input type="checkbox" class="s-contain" id="contain5" value="5" v-model="checkedbox">
              <input type="checkbox" class="s-contain" id="contain6" value="6" v-model="checkedbox">
              <input type="checkbox" class="s-contain" id="contain7" value="7" v-model="checkedbox">
              <input type="checkbox" class="s-contain" id="contain8" value="8" v-model="checkedbox">
              <input type="checkbox" class="s-contain" id="contain9" value="9" v-model="checkedbox">
          </div>
          <div style="margin-left: 3%;">
              <input type="text" class="s-flow-t" id="flow0" v-model="f0">
              <input type="text" class="s-flow-b" id="flow1" v-model="f1">
              <input type="text" class="s-flow" id="flow2" v-model="f2">
              <input type="text" class="s-flow" id="flow3" v-model="f3">
              <input type="text" class="s-flow" id="flow4" v-model="f4">
              <input type="text" class="s-flow" id="flow5" v-model="f5">
              <input type="text" class="s-flow" id="flow6" v-model="f6">
              <input type="text" class="s-flow" id="flow7" v-model="f7">
              <input type="text" class="s-flow-b" id="flow8" v-model="f8">
              <input type="text" class="s-flow-t" id="flow9" v-model="f9">
          </div>
          <div>
              <input type="text" class="s-combine" id="combs" v-model="scomb" placeholder="eg:2,4">
          </div>
      </div>
      <div></div>
      <div></div>
      <div class="bus">
      <label for="bus" style="font-size: 20px"><b>Bus lanes:</b></label>
      <input type="text" id="bus" placeholder="eg:1;12;24;36" v-model="bus" style="margin-left: 5px;height: 30px;width: 150px;">
      </div>  
      <div></div>
  </div>
  
  <div class="next">
      <button class="nextstep" @click="preprocess">Next</button>
  </div>
  
  <div v-if="process">
      <div class="next-title">
          <h2 >Name of movement and calculation details</h2>
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
          <label for="secondary">Authorized conflict:</label>
          <input type="text" class="authorize" id="secondary" placeholder="eg:V1,V2;P5,V4" v-model="authorize">
      </div>
  
      <div class="details">
          <label class="checkbox">
          <input type="checkbox" v-model="opt">
          Green optimization
          </label>
          <label class="checkbox">
          <input type="checkbox" v-model="conflict">
          Conflict critical movement
          </label>
          <label for="savefile" class="checkbox">    
          Filename:
          <input type="text" id="savefile" placeholder="example.pdf" v-model="savepath">
          </label>
      </div>
  
      <div class="next" ref="bottomElement">
          <!-- <router-link :to="{ name : 'result'}">
              <button class="nextstep" @click="callAPI" id="submit">Submit</button>
          </router-link> -->
          <button class="nextstep" @click="callAPI" id="submit">Submit</button>
      </div>
     
  </div>
  
  </template>
  
  <script>
  import axios from 'axios'
  import config from '../../config.json'
  
  export default {
      data () {
          return {
              cycle:90,
              iv:2,
              ig_mode:true,
              ig:7,
              file:null,
              speedped:1,
              speedpedig:1.2,
              checkedbox:[],
              checkedped:[],
              bus:null,
              scomb:'',
              ecomb:'',
              ncomb:'',
              wcomb:'',
              w40:'',
              w41:'',
              w42:'',
              w43:'',
  
              process:false,
              nameofmvt: {},
              mvt:[],
              authorize:null,
  
              opt:false,
              conflict:false,
              savepath:null,
          }
      },
      created() {
          for (let i = 0; i <= 40; i++) {
            this['f' + i] = '';
          }
          },
      methods: {
          handleFileUpload(event) {
              this.file = event.target.files[0]
          },
          preprocess(event) {     
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
              
              // Show name component
              this.process = true
  
              // Scroll to the bottom element
              this.$nextTick(() => {
                  const bottomElement = this.$refs.bottomElement;
                  bottomElement.scrollIntoView({ behavior: 'smooth' });
              });
  
          },
  
          callAPI() {
  
              const data = new FormData();
              // Append data properties to the FormData object
              data.append('parameters',JSON.stringify({'cycle':this.cycle, 'ivt':this.iv,'vw':this.speedped,'vwig':this.speedpedig,'ig':this.ig}))
              data.append('compose',JSON.stringify(this.compose))
              data.append('name',JSON.stringify(this.nameofmvt))
              data.append('secondary',this.authorize)
              data.append('default',this.ig_mode)
              data.append('opt',this.opt)
              data.append('conflict',this.conflict)
              data.append('savepath',this.savepath)
              data.append('bus',this.bus)
  
              let endpoint = null
              if (this.ig_mode != true){
                  // Append file to the FormData object
                  data.append('file', this.file);
                  endpoint = 'advanced-upload'
  
              } else {
                  endpoint = 'advanced-default'
              }
  
              axios.post(config.frontendUrl + endpoint,data,{
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
  
