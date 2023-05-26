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
                <input type="file" id="file" name="filename">
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

<div class="config">
    <div class="north">
        <div>
            <input type="text" class="n-combine" id="combn" v-model="ncomb" placeholder="eg:22,24">
        </div>
        <div>
            <input type="text" class="n-flow" id="flow26" v-model="f26">
            <input type="text" class="n-flow" id="flow24" v-model="f24">
            <input type="text" class="n-flow" id="flow22" v-model="f22">
        </div>
        <div>
            <input type="checkbox" class="n-contain" id="contain26" value="26" v-model="checkedbox">
            <input type="checkbox" class="n-contain" id="contain24" value="24" v-model="checkedbox">
            <input type="checkbox" class="n-contain" id="contain22" value="22" v-model="checkedbox">
        </div>
    </div>
    <div class="image-row">
        <div class="west">
            <div>
                <input type="text" class="w-combine" id="combw" v-model="wcomb" placeholder="eg:32,34">
            </div>
            <div>
                <input type="text" class="w-flow" id="flow32" v-model="f32"><br>
                <input type="text" class="w-flow" id="flow34" v-model="f34"><br>
                <input type="text" class="w-flow" id="flow36" v-model="f36">
            </div>
            <div>
                <input type="checkbox" class="w-contain" id="contain32" value="32" v-model="checkedbox"><br>
                <input type="checkbox" class="w-contain" id="contain34" value="34" v-model="checkedbox"><br>
                <input type="checkbox" class="w-contain" id="contain36" value="36" v-model="checkedbox">
            </div>
        </div>

        <div style="position: relative;">
            <img class="standard-fig" src="../assets/standard.png">
            <div style="position: absolute;top: 30%;left: 40%;">
                <input type="checkbox" class="n-contain" id="ped42" value="42" v-model="checkedped">
                <input type="text" class="n-flow" id="width42" v-model="w42">
            </div>
            <div style="position: absolute;top: 40%;right: 30%">
                <input type="checkbox" class="e-contain" id="ped41" value="41" v-model="checkedped"><br>
                <input type="text" class="e-flow" id="width41" v-model="w41">
            </div>
            <div style="position: absolute;top: 65%;left: 40%;">
                <input type="checkbox" class="s-contain" id="ped40" value="40" v-model="checkedped">
                <input type="text" class="s-flow" id="width40" v-model="w40">
            </div>
            <div style="position: absolute;top: 40%;right: 60%;">
                <input type="checkbox" class="w-contain" id="ped43" value="43" v-model="checkedped"><br>
                <input type="text" class="w-flow" id="width43" v-model="w43">
            </div>
        </div>
        <div class="east">
            <div>
                <input type="checkbox" class="e-contain" id="contain12" value="12" v-model="checkedbox"><br>
                <input type="checkbox" class="e-contain" id="contain14" value="14" v-model="checkedbox"><br>
                <input type="checkbox" class="e-contain" id="contain16" value="16" v-model="checkedbox">
            </div>

            <div>
                <input type="text" class="e-flow" id="flow12" v-model="f12"><br>
                <input type="text" class="e-flow" id="flow14" v-model="f14"><br>
                <input type="text" class="e-flow" id="flow16" v-model="f16">
            </div>
            <div>
                <input type="text" class="e-combine" id="combe" v-model="ecomb" placeholder="eg:12,14">
            </div>
        </div>
    </div>

    <div class="south">
        <div>
            <input type="checkbox" class="s-contain" id="contain2" value="2" v-model="checkedbox">
            <input type="checkbox" class="s-contain" id="contain4" value="4" v-model="checkedbox">
            <input type="checkbox" class="s-contain" id="contain6" value="6" v-model="checkedbox">
        </div>
        <div>
            <input type="text" class="s-flow" id="flow2" v-model="f2">
            <input type="text" class="s-flow" id="flow4" v-model="f4">
            <input type="text" class="s-flow" id="flow6" v-model="f6">
        </div>
        <div>
            <input type="text" class="s-combine" id="combs" v-model="scomb" placeholder="eg:2,4">
        </div>
    </div>

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
        <router-link :to="{ name : 'result'}">
            <button class="nextstep" @click="callAPI" id="submit">Submit</button>
        </router-link>
    </div>
   
</div>

</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            cycle:90,
            iv:2,
            ig_mode:true,
            ig:7,
            filename:'',
            speedped:1,
            speedpedig:1.2,
            checkedbox:[],
            checkedped:[],
            scomb:'',
            ecomb:'',
            ncomb:'',
            wcomb:'',
            f2:'',
            f4:'',
            f6:'',
            f12:'',
            f14:'',
            f16:'',
            f22:'',
            f24:'',
            f26:'',
            f32:'',
            f34:'',
            f36:'',
            w40:'',
            w41:'',
            w42:'',
            w43:'',

            process:false,
            nameofmvt: {},
            mvt:[],
            authorize:'',

            opt:false,
            conflict:false,
            savepath:'',
        }
    },
    methods: {
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
            const data = {
                'parameters':{'ivt':this.iv,'vw':this.speedped,'vwig':this.speedpedig,'ig':this.ig},
                'compose':this.compose,
                'name':this.nameofmvt,
                'secondary':this.authorize,
                'default':this.ig_mode,
                'opt':this.opt,
                'conflict':this.conflict,
                'savepath':this.savepath
            }

            axios.post('http://localhost:8000/standard',data)
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

<style>
@import '../style/standard-style.css';
</style>
