export class ComplexPieChart {
    
    greeting: string;
    data: any;
    colorScheme: any;
    showLegend: boolean;
    explodeSlices: boolean;
    doughnut: boolean;
    gradient: boolean;
    showLabels: boolean;
    ready: boolean;
    dummy: any;
    bestCategory: string;
    mge: number;
    pathogen: number;
    bestCategoryCounts: any;
    confidenc: any;
    expertc: any;
    totalCategoryCounts: number;

    constructor(){
        this.data = [];
        this.totalCategoryCounts = 0;
        this.bestCategoryCounts = 0;
        this.confidenc = {};
        this.expertc = {};
        this.mge = 0;
        this.pathogen = 0;
        this.showLegend = false;
        this.explodeSlices = false;
        this.doughnut = false;
        this.gradient = true;
        this.showLabels = true;
        this.bestCategory = "---";
        this.bestCategoryCounts = 0;
        this.colorScheme = {
                domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.ready = false;
    }

    draw(edata, key){

        let counts = {};
        // let mge = 0
        edata.forEach(element => {
            try {
                element[key] = element[key].toLowerCase()
            } catch (error) {
                
            }
            
            counts[element[key]] = counts[element[key]] ? counts[element[key]]+1: 1; 
            try {
                this.confidenc[element[key]] = this.confidenc[element[key]] ? this.confidenc[element[key]]+element['rating']['confidence']['value']: element['rating']['confidence']['value']; 
            } catch (error) {
                // element['rating']['confidence']['value'] = 0;
            }
            
            try {
                this.expertc[element[key]] = this.expertc[element[key]] ? this.expertc[element[key]]+element['rating']['expertise']['value']: element['rating']['expertise']['value']; 
            } catch (error) {
                // element['rating']['expertise']['value'] = 0;
            }
            
            try {
                this.mge += element['rating']['mge']['value']
            } catch (error) {
                // element['rating']['mge']['value'] = 0;
            }
            
            try {
                this.pathogen += element['rating']['genome']['value']
            } catch (error) {
                // element['rating']['genome']['value'] = 0;
            }
            
        });

        // let data = [];
        let CNTs = {};
        for(var k in counts){ 
            this.data.push({name: k, value: counts[k], confidence:this.confidenc[k], expertice:this.expertc[k]});
            CNTs[k] = this.confidenc[k]/edata.length + 1.2*this.expertc[k]/edata.length;
        }

        this.bestCategory = Object.keys(CNTs).reduce(function(a, b){ return CNTs[a] > CNTs[b] ? a : b });
        this.bestCategoryCounts = counts[this.bestCategory];
        this.totalCategoryCounts = edata.length;
        this.ready = true;


    }

}