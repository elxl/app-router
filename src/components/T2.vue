<template>
  <div>
    <label>
      <input type="radio" v-model="flowtype" value="vhc" />
      vhc
    </label>
    <label>
      <input type="radio" v-model="flowtype" value="uvp" />
      uvp
    </label>
    <label>
      <input type="radio" v-model="flowtype" value="detailed" />
      Catégories
    </label>
  </div>
  
  <div class="config-grid">
      <div>
      </div>
      <div class="north">
          <div style="margin-top: 10px;">
              <input type="checkbox" id="combn" v-model="scomb">4+6
          </div>
          <div>
            <select v-model="sslope" style="margin-top: 10px;">
              <option value="4">4%</option>
              <option value="2">2%</option>
              <option value="0">0%</option>
              <option value="-2">-2%</option>
              <option value="-4">-4%</option>
            </select>
          </div>
          <div v-if="flowtype === 'vhc'">
              <input type="text" class="n-flow" id="flow6" v-model="f6" placeholder="vhc">
              <input type="text" class="n-flow" id="flow4" v-model="f4" placeholder="vhc">
          </div>
          <div v-else-if="flowtype === 'uvp'">
              <input type="text" class="n-flow" id="flow6" v-model="f6" placeholder="uvp">
              <input type="text" class="n-flow" id="flow4" v-model="f4" placeholder="uvp">
          </div>
          <div v-else>
              <input type="text" class="n-flow" id="flow61" v-model="f41" placeholder="voit">
              <input type="text" class="n-flow" id="flow41" v-model="f61" placeholder="voit"><br>
              <input type="text" class="n-flow" id="flow62" v-model="f42" placeholder="cam">
              <input type="text" class="n-flow" id="flow42" v-model="f62" placeholder="cam"><br>
              <input type="text" class="n-flow" id="flow63" v-model="f43" placeholder="TR">
              <input type="text" class="n-flow" id="flow43" v-model="f63" placeholder="TR"><br>
              <input type="text" class="n-flow" id="flow64" v-model="f44" placeholder="mot">
              <input type="text" class="n-flow" id="flow44" v-model="f64" placeholder="mot"><br>
              <input type="text" class="n-flow" id="flow65" v-model="f45" placeholder="vélo">
              <input type="text" class="n-flow" id="flow45" v-model="f65" placeholder="vélo"><br>
          </div>
      </div>
      <div>
      </div>
      <div class="west">
          <div style="margin-right: 10px;">
              <input type="checkbox" id="combw" v-model="ecomb">7+8
          </div>
          <div>
            <select v-model="eslope" style="margin-right: 10px;">
              <option value="4">4%</option>
              <option value="2">2%</option>
              <option value="0">0%</option>
              <option value="-2">-2%</option>
              <option value="-4">-4%</option>
            </select>
          </div>
          <div v-if="flowtype === 'vhc'">
              <input type="text" class="w-flow" id="flow7" v-model="f7" placeholder="vhc"><br>
              <input type="text" class="w-flow" id="flow8" v-model="f8" placeholder="vhc">
          </div>
          <div v-else-if="flowtype === 'uvp'">
              <input type="text" class="w-flow" id="flow7" v-model="f7" placeholder="uvp"><br>
              <input type="text" class="w-flow" id="flow8" v-model="f8" placeholder="uvp">
          </div>
          <div v-else>
              <input type="text" class="w-flow" id="flow71" v-model="f71" placeholder="voit">
              <input type="text" class="w-flow" id="flow72" v-model="f72" placeholder="cam">
              <input type="text" class="w-flow" id="flow73" v-model="f73" placeholder="TR">
              <input type="text" class="w-flow" id="flow74" v-model="f74" placeholder="mot">
              <input type="text" class="w-flow" id="flow75" v-model="f75" placeholder="vélo">
              <br>
              <input type="text" class="w-flow" id="flow81" v-model="f81" placeholder="voit">
              <input type="text" class="w-flow" id="flow82" v-model="f82" placeholder="cam">
              <input type="text" class="w-flow" id="flow83" v-model="f83" placeholder="TR">
              <input type="text" class="w-flow" id="flow84" v-model="f84" placeholder="mot">
              <input type="text" class="w-flow" id="flow85" v-model="f85" placeholder="vélo">
          </div>
      </div>
      <div style="position: relative;">
          <img class="standard-fig" src="../assets/T2_config.png">
      </div>
      <div class="east">
          <div v-if="flowtype === 'vhc'">
              <input type="text" class="e-flow" id="flow3" v-model="f3" placeholder="vhc"><br>
              <input type="text" class="e-flow" id="flow2" v-model="f2" placeholder="vhc">
          </div>
          <div v-else-if="flowtype === 'uvp'">
              <input type="text" class="e-flow" id="flow3" v-model="f3" placeholder="uvp"><br>
              <input type="text" class="e-flow" id="flow2" v-model="f2" placeholder="uvp">
          </div>
          <div v-else>
              <input type="text" class="e-flow" id="flow31" v-model="f31" placeholder="voit">
              <input type="text" class="e-flow" id="flow32" v-model="f32" placeholder="cam">
              <input type="text" class="e-flow" id="flow33" v-model="f33" placeholder="TR">
              <input type="text" class="e-flow" id="flow34" v-model="f34" placeholder="mot">
              <input type="text" class="e-flow" id="flow35" v-model="f35" placeholder="vélo">
              <br>
              <input type="text" class="e-flow" id="flow21" v-model="f21" placeholder="voit">
              <input type="text" class="e-flow" id="flow22" v-model="f22" placeholder="cam">
              <input type="text" class="e-flow" id="flow23" v-model="f23" placeholder="TR">
              <input type="text" class="e-flow" id="flow24" v-model="f24" placeholder="mot">
              <input type="text" class="e-flow" id="flow25" v-model="f25" placeholder="vélo">
          </div>
          <div>
            <select v-model="wslope" style="margin-right: 10px;">
              <option value="4">4%</option>
              <option value="2">2%</option>
              <option value="0">0%</option>
              <option value="-2">-2%</option>
              <option value="-4">-4%</option>
            </select>
          </div>
          <div style="margin-right: 10px;">
              <input type="checkbox" id="combe" v-model="wcomb">2+3
          </div>
      </div>
  </div>
  <div class="details">
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
          <button class="nextstep" @click="sendDataToParent" id="submit">Calculer</button>
  </div>
  </template>
  
  <script>
  export default {
    emits: ['child-data'],
    data (){
      return {
        f2:'',
        f3:'',
        f4:'',
        f6:'',
        f7:'',
        f8:'',
  
        f21:'',
        f22:'',
        f23:'',
        f24:'',
        f25:'',
        f31:'',
        f32:'',
        f33:'',
        f34:'',
        f35:'',
  
        f41:'',
        f42:'',
        f43:'',
        f44:'',
        f45:'',
        f61:'',
        f62:'',
        f63:'',
        f64:'',
        f65:'',
  
        f71:'',
        f72:'',
        f73:'',
        f74:'',
        f75:'',
        f81:'',
        f82:'',
        f83:'',
        f84:'',
        f85:'',
  
        wcomb:false,
        ecomb:false,
        scomb:false,
  
        wslope:'0',
        sslope:'0',
        eslope:'0',
  
        flowtype:'vhc',
        project:null,
        savepath:null,
        email:null,
      }
    },
    methods: {
      sendDataToParent() {
        let data = {
          flowtype: this.flowtype,
          wslope: this.wslope,
          eslope: this.eslope,
          sslope: this.sslope,
          wcomb: this.wcomb,
          ecomb: this.ecomb,
          scomb: this.scomb,
          savepath: this.project+'-'+this.savepath,
          email:this.email
        }
  
        if (this.flowtype==='detailed'){
          data['flow'] = {'2':[this.f21,this.f22,this.f23,this.f24,this.f25],'3':[this.f31,this.f32,this.f33,this.f34,this.f35],
                          '4':[this.f41,this.f42,this.f43,this.f44,this.f45], '6':[this.f61,this.f62,this.f63,this.f64,this.f65],
                          '7':[this.f71,this.f72,this.f73,this.f74,this.f75], '8':[this.f81,this.f82,this.f83,this.f84,this.f85]}
        } else {
          data['flow'] = {'2':this.f2,'3':this.f3,'4':this.f4,'6':this.f6,'7':this.f7,'8':this.f8}
        }
        this.$emit('child-data', data);
      },
    }
  
  }
  </script>
  
  <style scoped src="../style/giveway-style-2.css">
  
  </style>