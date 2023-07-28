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
    <div class="north">
        <div>
            <input type="text" class="n-combine" id="combn" v-model="ncomb" placeholder="eg:22,24">
        </div>
        <div>
            <input type="text" class="n-flow" id="flow26" v-model="f26" :disabled="!check26" placeholder="veh">
            <input type="text" class="n-flow" id="flow24" v-model="f24" :disabled="!check24" placeholder="veh">
            <input type="text" class="n-flow" id="flow22" v-model="f22" :disabled="!check22" placeholder="veh">
        </div>
        <div>
            <input type="checkbox" class="n-contain" id="contain26" value="26" v-model="check26" @click="togglebox($event.target.value)">
            <input type="checkbox" class="n-contain" id="contain24" value="24" v-model="check24" @click="togglebox($event.target.value)">
            <input type="checkbox" class="n-contain" id="contain22" value="22" v-model="check22" @click="togglebox($event.target.value)">
        </div>
    </div>
    <div>
    </div>
    <div class="west">
        <div>
            <input type="text" class="w-combine" id="combw" v-model="wcomb" placeholder="eg:32,34">
        </div>
        <div>
            <input type="text" class="w-flow" id="flow32" v-model="f32" :disabled="!check32" placeholder="veh"><br>
            <input type="text" class="w-flow" id="flow34" v-model="f34" :disabled="!check34" placeholder="veh"><br>
            <input type="text" class="w-flow" id="flow36" v-model="f36" :disabled="!check36" placeholder="veh">
        </div>
        <div>
            <input type="checkbox" class="w-contain" id="contain32" value="32" v-model="check32" @click="togglebox($event.target.value)"><br>
            <input type="checkbox" class="w-contain" id="contain34" value="34" v-model="check34" @click="togglebox($event.target.value)"><br>
            <input type="checkbox" class="w-contain" id="contain36" value="36" v-model="check36" @click="togglebox($event.target.value)">
        </div>
    </div>
    <div style="position: relative;">
        <img class="standard-fig" src="../assets/standard.png">
        <div style="position: absolute;top: 30%;left: 40%;">
            <input type="checkbox" class="n-contain" id="ped42" value="42" v-model="check42" @click="toggleped($event.target.value)">
            <input type="text" class="n-flow" id="width42" v-model="w42" :disabled="!check42" :style="w42 ? 'background-color: white;' : 'background-color: transparent;'">m
        </div>
        <div style="position: absolute;top: 40%;right: 30%">
            <input type="checkbox" class="e-contain" id="ped41" value="41" v-model="check41" @click="toggleped($event.target.value)"><br>
            <input type="text" class="e-flow" id="width41" v-model="w41" :disabled="!check41" :style="w41 ? 'background-color: white;' : 'background-color: transparent;'">m
        </div>
        <div style="position: absolute;top: 65%;left: 40%;">
            <input type="checkbox" class="s-contain" id="ped40" value="40" v-model="check40" @click="toggleped($event.target.value)">
            <input type="text" class="s-flow" id="width40" v-model="w40" :disabled="!check40" :style="w40 ? 'background-color: white;' : 'background-color: transparent;'">m
        </div>
        <div style="position: absolute;top: 40%;right: 60%;">
            <input type="checkbox" class="w-contain" id="ped43" value="43" v-model="check43" @click="toggleped($event.target.value)"><br>
            <input type="text" class="w-flow" id="width43" v-model="w43" :disabled="!check43" :style="w43 ? 'background-color: white;' : 'background-color: transparent;'">m
        </div>
    </div>
    <div class="east">
        <div>
            <input type="checkbox" class="e-contain" id="contain16" value="16" v-model="check16" @click="togglebox($event.target.value)"><br>
            <input type="checkbox" class="e-contain" id="contain14" value="14" v-model="check14" @click="togglebox($event.target.value)"><br>
            <input type="checkbox" class="e-contain" id="contain12" value="12" v-model="check12" @click="togglebox($event.target.value)">
        </div>

        <div>
            <input type="text" class="e-flow" id="flow16" v-model="f16" :disabled="!check16" placeholder="veh"><br>
            <input type="text" class="e-flow" id="flow14" v-model="f14" :disabled="!check14" placeholder="veh"><br>
            <input type="text" class="e-flow" id="flow12" v-model="f12" :disabled="!check12" placeholder="veh">
        </div>
        <div>
            <input type="text" class="e-combine" id="combe" v-model="ecomb" placeholder="eg:12,14">
        </div>
    </div>
    <div>
    </div>
    <div class="south">
        <div>
            <input type="checkbox" class="s-contain" id="contain2" value="2" v-model="check2" @click="togglebox($event.target.value)">
            <input type="checkbox" class="s-contain" id="contain4" value="4" v-model="check4" @click="togglebox($event.target.value)">
            <input type="checkbox" class="s-contain" id="contain6" value="6" v-model="check6" @click="togglebox($event.target.value)">
        </div>
        <div>
            <input type="text" class="s-flow" id="flow2" v-model="f2" :disabled="!check2" placeholder="veh">
            <input type="text" class="s-flow" id="flow4" v-model="f4" :disabled="!check4" placeholder="veh">
            <input type="text" class="s-flow" id="flow6" v-model="f6" :disabled="!check6" placeholder="veh">
        </div>
        <div>
            <input type="text" class="s-combine" id="combs" v-model="scomb" placeholder="eg:2,4">
        </div>
    </div>
    <div>
    </div>

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

            cycle:90,
            iv:2,
            ig_mode:true,
            ig:7,
            file:null,
            speedped:1,
            speedpedig:1.2,
            checkedbox:[],
            checkedped:[],
            scomb:'',
            ecomb:'',
            ncomb:'',
            wcomb:'',
            slist: [2,4,6],
            elist: [12,14,16],
            nlist: [22,24,26],
            wlist: [32,34,36],
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
            check2: false,
            check4: false,
            check6: false,
            check12: false,
            check14: false,
            check16: false,
            check22: false,
            check24: false,
            check26: false,
            check32: false,
            check34: false,
            check36: false,          
            w40:'',
            w41:'',
            w42:'',
            w43:'',
            check40: false,
            check41: false,
            check42: false,
            check43: false,

            process:false,
            nameofmvt: {},
            mvt:[],
            authorize:null,

            opt:false,
            conflict:false,
            project:null,
            savepath:null,
            email:null,
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
            // append value to checked pedestrian if not exist and remove it otherwise
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

            // Process valid inputs
            this.preprocess()

        },
        // Preprocess input
        preprocess() {

            // Clear name and authorized conflict
            this.nameofmvt = {}
            this.authorize = null
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
            mvt.forEach((combine, index) => {
                if (typeof combine === 'number' && combine >= 40) {
                this.nameofmvt[combine] =  'P' + (index+1);
                } else {
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
            if (this.authorize !== null){
                const values = this.authorize.split(/[,;]/);
                const allValuesExist = values.every(value => names.includes(value.trim()));
                if (!allValuesExist) {
                alert("Les mouvements dans les conflits autorisés ne sont pas inclus!");
                return; 
            }
            }

            // Check file name
            if (this.savepath === null) {
                alert("Veuillez indiquer le nom du fichier!");
                return; 
            }  
            // if (!this.savepath.endsWith(".pdf")) {
            //     alert("Le nom de fichier doit se terminer par .pdf!");
            //     return;                
            // }
            // check email address
            if (this.email === null) {
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
            data.append('default',this.ig_mode)
            data.append('opt',this.opt)
            data.append('conflict',this.conflict)
            data.append('savepath',this.project+'-'+this.savepath)
            data.append('email',this.email)

            let endpoint = null
            if (this.ig_mode != true){
                // Append file to the FormData object
                data.append('file', this.file);
                endpoint = 'standard-upload'

            } else {
                endpoint = 'standard-default'
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

<style scoped src="../style/standard-style.css">
</style>
