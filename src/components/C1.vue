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
      Catécories
    </label>
  </div>
  
  <div class="config-grid">
      <div>
      </div>
      <div class="north">
        <div style="margin-top: 30px;">
                <input type="checkbox" id="combn" v-model="check1011" @change="handleCheckboxChange(1011)">10+11
                <input type="checkbox" id="combn" v-model="check1112" @change="handleCheckboxChange(1112)">11+12
                <input type="checkbox" id="combn" v-model="check101112" @change="handleCheckboxChange(101112)">10+11+12
          </div>
          <div>
              <select v-model="nslope" style="margin-top: 10px;margin-bottom: 10px;">
                <option value="4">4%</option>
                <option value="2">2%</option>
                <option value="0">0%</option>
                <option value="-2">-2%</option>
                <option value="-4">-4%</option>
              </select>
          </div>
          <div v-if="flowtype === 'vhc'">
                <input type="text" class="n-flow" id="flow12" v-model="f12" placeholder="vhc">
                <input type="text" class="n-flow" id="flow11" v-model="f11" placeholder="vhc">
                <input type="text" class="n-flow" id="flow10" v-model="f10" placeholder="vhc">
            </div>
            <div v-else-if="flowtype === 'uvp'">
                <input type="text" class="n-flow" id="flow12" v-model="f12" placeholder="uvp">
                <input type="text" class="n-flow" id="flow11" v-model="f11" placeholder="uvp">
                <input type="text" class="n-flow" id="flow10" v-model="f10" placeholder="uvp">
            </div>
            <div v-else>
              <input type="text" class="n-flow" id="flow121" v-model="f121" placeholder="voit">
              <input type="text" class="n-flow" id="flow111" v-model="f111" placeholder="voit">
              <input type="text" class="n-flow" id="flow101" v-model="f101" placeholder="voit"><br>
              <input type="text" class="n-flow" id="flow122" v-model="f122" placeholder="cam">
              <input type="text" class="n-flow" id="flow112" v-model="f112" placeholder="cam">
              <input type="text" class="n-flow" id="flow102" v-model="f102" placeholder="cam"><br>
              <input type="text" class="n-flow" id="flow123" v-model="f123" placeholder="TR">
              <input type="text" class="n-flow" id="flow113" v-model="f113" placeholder="TR">
              <input type="text" class="n-flow" id="flow103" v-model="f103" placeholder="TR"><br>
              <input type="text" class="n-flow" id="flow124" v-model="f124" placeholder="mot">
              <input type="text" class="n-flow" id="flow114" v-model="f114" placeholder="mot">
              <input type="text" class="n-flow" id="flow104" v-model="f104" placeholder="mot"><br>
              <input type="text" class="n-flow" id="flow125" v-model="f125" placeholder="vélo">
              <input type="text" class="n-flow" id="flow115" v-model="f115" placeholder="vélo">
              <input type="text" class="n-flow" id="flow105" v-model="f105" placeholder="vélo"><br>
            </div>
      </div>
      <div>
      </div>
      <div class="west">
          <div style="margin-right: 10px;">
            <input type="checkbox" id="combw" v-model="check12" @change="handleCheckboxChange(12)">1+2 <br>
            <input type="checkbox" id="combw" v-model="check23" @change="handleCheckboxChange(23)">2+3 <br>
            <input type="checkbox" id="combw" v-model="check123" @change="handleCheckboxChange(123)">1+2+3
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
          <div v-if="flowtype === 'vhc'">
              <input type="text" class="w-flow" id="flow1" v-model="f1" placeholder="vhc"><br>
              <input type="text" class="w-flow" id="flow2" v-model="f2" placeholder="vhc"><br>
              <input type="text" class="w-flow" id="flow3" v-model="f3" placeholder="vhc">
          </div>
          <div v-else-if="flowtype === 'uvp'">
              <input type="text" class="w-flow" id="flow1" v-model="f1" placeholder="uvp"><br>
              <input type="text" class="w-flow" id="flow2" v-model="f2" placeholder="uvp"><br>
              <input type="text" class="w-flow" id="flow3" v-model="f3" placeholder="uvp">
          </div>
          <div v-else>
              <input type="text" class="w-flow" id="flow11" v-model="f11" placeholder="voit">
              <input type="text" class="w-flow" id="flow12" v-model="f12" placeholder="cam">
              <input type="text" class="w-flow" id="flow13" v-model="f13" placeholder="TR">
              <input type="text" class="w-flow" id="flow14" v-model="f14" placeholder="mot">
              <input type="text" class="w-flow" id="flow15" v-model="f15" placeholder="vélo">
              <br>
              <input type="text" class="w-flow" id="flow21" v-model="f21" placeholder="voit">
              <input type="text" class="w-flow" id="flow22" v-model="f22" placeholder="cam">
              <input type="text" class="w-flow" id="flow23" v-model="f23" placeholder="TR">
              <input type="text" class="w-flow" id="flow24" v-model="f24" placeholder="mot">
              <input type="text" class="w-flow" id="flow25" v-model="f25" placeholder="vélo">
              <br>
              <input type="text" class="w-flow" id="flow31" v-model="f31" placeholder="voit">
              <input type="text" class="w-flow" id="flow32" v-model="f32" placeholder="cam">
              <input type="text" class="w-flow" id="flow33" v-model="f33" placeholder="TR">
              <input type="text" class="w-flow" id="flow34" v-model="f34" placeholder="mot">
              <input type="text" class="w-flow" id="flow35" v-model="f35" placeholder="vélo">
          </div>
      </div>
      <div style="position: relative;">
          <img class="standard-fig" src="../assets/C1_config.png">
      </div>
      <div class="east">
          <div v-if="flowtype === 'vhc'">
              <input type="text" class="e-flow" id="flow9" v-model="f9" placeholder="vhc"><br>
              <input type="text" class="e-flow" id="flow8" v-model="f8" placeholder="vhc"><br>
              <input type="text" class="e-flow" id="flow7" v-model="f7" placeholder="vhc">
          </div>
          <div v-else-if="flowtype === 'uvp'">
              <input type="text" class="e-flow" id="flow9" v-model="f9" placeholder="uvp"><br>
              <input type="text" class="e-flow" id="flow8" v-model="f8" placeholder="uvp"><br>
              <input type="text" class="e-flow" id="flow7" v-model="f7" placeholder="uvp">
          </div>
          <div v-else>
              <input type="text" class="e-flow" id="flow91" v-model="f91" placeholder="voit">
              <input type="text" class="e-flow" id="flow92" v-model="f92" placeholder="cam">
              <input type="text" class="e-flow" id="flow93" v-model="f93" placeholder="TR">
              <input type="text" class="e-flow" id="flow94" v-model="f94" placeholder="mot">
              <input type="text" class="e-flow" id="flow95" v-model="f95" placeholder="vélo">
              <br>
              <input type="text" class="e-flow" id="flow81" v-model="f81" placeholder="voit">
              <input type="text" class="e-flow" id="flow82" v-model="f82" placeholder="cam">
              <input type="text" class="e-flow" id="flow83" v-model="f83" placeholder="TR">
              <input type="text" class="e-flow" id="flow84" v-model="f84" placeholder="mot">
              <input type="text" class="e-flow" id="flow85" v-model="f85" placeholder="vélo">
              <br>
              <input type="text" class="e-flow" id="flow71" v-model="f71" placeholder="voit">
              <input type="text" class="e-flow" id="flow72" v-model="f72" placeholder="cam">
              <input type="text" class="e-flow" id="flow73" v-model="f73" placeholder="TR">
              <input type="text" class="e-flow" id="flow74" v-model="f74" placeholder="mot">
              <input type="text" class="e-flow" id="flow75" v-model="f75" placeholder="vélo">
              <br>
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
          <div style="margin-right: 10px;">
              <input type="checkbox" id="combe" v-model="check78" @change="handleCheckboxChange(78)">7+8 <br>
              <input type="checkbox" id="combe" v-model="check89" @change="handleCheckboxChange(89)">8+9 <br>
              <input type="checkbox" id="combe" v-model="check789" @change="handleCheckboxChange(789)">7+8+9
          </div>
      </div>
      <div>
      </div>
      <div class="south">
          <div v-if="flowtype === 'vhc'">
              <input type="text" class="s-flow" id="flow4" v-model="f4" placeholder="vhc">
              <input type="text" class="s-flow" id="flow5" v-model="f5" placeholder="vhc">
              <input type="text" class="s-flow" id="flow6" v-model="f6" placeholder="vhc">
          </div>
          <div v-else-if="flowtype === 'uvp'">
              <input type="text" class="s-flow" id="flow4" v-model="f4" placeholder="uvp">
              <input type="text" class="s-flow" id="flow5" v-model="f5" placeholder="uvp">
              <input type="text" class="s-flow" id="flow6" v-model="f6" placeholder="uvp">
          </div>
          <div v-else>
              <input type="text" class="s-flow" id="flow41" v-model="f41" placeholder="voit">
              <input type="text" class="s-flow" id="flow51" v-model="f51" placeholder="voit">
              <input type="text" class="s-flow" id="flow61" v-model="f61" placeholder="voit"><br>
              <input type="text" class="s-flow" id="flow42" v-model="f42" placeholder="cam">
              <input type="text" class="s-flow" id="flow52" v-model="f52" placeholder="cam">
              <input type="text" class="s-flow" id="flow62" v-model="f62" placeholder="cam"><br>
              <input type="text" class="s-flow" id="flow43" v-model="f43" placeholder="TR">
              <input type="text" class="s-flow" id="flow53" v-model="f53" placeholder="TR">
              <input type="text" class="s-flow" id="flow63" v-model="f63" placeholder="TR"><br>
              <input type="text" class="s-flow" id="flow44" v-model="f44" placeholder="mot">
              <input type="text" class="s-flow" id="flow54" v-model="f54" placeholder="mot">
              <input type="text" class="s-flow" id="flow64" v-model="f64" placeholder="mot"><br>
              <input type="text" class="s-flow" id="flow45" v-model="f45" placeholder="vélo">
              <input type="text" class="s-flow" id="flow55" v-model="f55" placeholder="vélo">
              <input type="text" class="s-flow" id="flow65" v-model="f65" placeholder="vélo"><br>
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
          <div style="margin-top: 10px;">
              <input type="checkbox" id="combs" v-model="check45" @change="handleCheckboxChange(45)">4+5
              <input type="checkbox" id="combs" v-model="check56" @change="handleCheckboxChange(56)">5+6
              <input type="checkbox" id="combs" v-model="check456" @change="handleCheckboxChange(456)">4+5+6
          </div>
      </div>
      <div>
      </div>
  </div>
  <div class="details">
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
        check12:false,
        check23:false,
        check123:false,

        check45:false,
        check56:false,
        check456:false,

        check78:false,
        check89:false,
        check789:false,

        check1011:false,
        check1112:false,
        check101112:false,

        eslope:'0',
        wslope:'0',
        sslope:'0',
        nslope:'0',
  
        flowtype:'vhc',
        savepath:null,
        email:null,
      }
    },
    computed: {
      wcomb() {
        if (this.check12) {
          return '(1,2)';
        } else if (this.check23) {
          return '(2,3)';
        } else if (this.check123) {
          return '(1,2,3)';
        } else {
          return '';
        }
      },
      scomb() {
        if (this.check45) {
          return '(4,5)';
        } else if (this.check56) {
          return '(5,6)';
        } else if (this.check456) {
          return '(4,5,6)';
        } else {
          return '';
        }
      },
      ecomb() {
        if (this.check78) {
          return '(7,8)';
        } else if (this.check89) {
          return '(8,9)';
        } else if (this.check789) {
          return '(7,8,9)';
        } else {
          return '';
        }
      },
      ncomb() {
        if (this.check1011) {
          return '(10,11)';
        } else if (this.check1112) {
          return '(11,12)';
        } else if (this.check101112) {
          return '(10,11,12)';
        } else {
          return '';
        }
      },
    },
    created() {
      for (let i = 1; i <= 12; i++) {
        this['f' + i] = '';
        for (let j = 1; j <= 5; j++){
          this['f'+i+j] = ''
        }
      }
      },
    methods: {
      handleCheckboxChange(checkboxNumber) {

        if (checkboxNumber === 12) {
          if (this.check12) {
            this.check23 = false
            this.check123 = false
          }
        } else if (checkboxNumber === 23) {
          if (this.check23) {
            this.check12 = false
            this.check123 = false
          }
        } else if (checkboxNumber === 123) {
          if (this.check123) {
            this.check12 = false
            this.check23 = false
          } 
        } else if (checkboxNumber === 45) {
          if (this.check45) {
            this.check56 = false
            this.check456 = false
          }
        } else if (checkboxNumber === 56) {
          if (this.check56) {
            this.check45 = false
            this.check456 = false
          }
        } else if (checkboxNumber === 456) {
          if (this.check456) {
            this.check45 = false
            this.check56 = false
          }
        } else if (checkboxNumber === 78) {
          if (this.check78) {
            this.check89 = false
            this.check789 = false
          }
        } else if (checkboxNumber === 89) {
          if (this.check89) {
            this.check78 = false
            this.check789 = false
          }
        } else if (checkboxNumber === 789) {
          if (this.check789) {
            this.check78 = false
            this.check89 = false
          }
        } else if (checkboxNumber === 1011) {
          if (this.check1011===true) {
            this.check1112 = false
            this.check101112 = false
          } 
        } else if (checkboxNumber === 1112) {
          if (this.check1112) {
            this.check1011 = false
            this.check101112 = false
          }
        } else if (checkboxNumber === 101112) {
          if (this.check101112) {
            this.check1011 = false
            this.check1112 = false
          }
        } else {
          console.log("not exist!")
        }
      },
      sendDataToParent() {
        let data = {
          flowtype: this.flowtype,
          wslope: this.wslope,
          eslope: this.eslope,
          sslope: this.sslope,
          nslope: this.nslope,
          wcomb: this.wcomb,
          ecomb: this.ecomb,
          scomb: this.scomb,
          ncomb: this.ncomb,
          savepath: this.savepath,
          email:this.email
        }
  
        if (this.flowtype==='detailed'){
          const temp = {}
          for (let i=1; i<=12; i++) {
            temp[i] = []
            for (let j=1; j<=5; j++) {
              temp[i].push(this['f'+i+j])
            }
          }
          data['flow'] = temp
        } else {
          const temp = {}
          for (let i=1; i<=12; i++){
            temp[i] = this['f'+i]
          }
          data['flow'] = temp
        }
        this.$emit('child-data', data);
      },
    }
  
  }
  </script>
  
  <style scoped src="../style/giveway-style-c.css">
  
  </style>