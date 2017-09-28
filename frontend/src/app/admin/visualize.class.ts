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
            counts[element[key]] = counts[element[key]] ? counts[element[key]]+1: 1; 
            this.confidenc[element[key]] = this.confidenc[element[key]] ? this.confidenc[element[key]]+element['rating']['confidence']['value']: element['rating']['confidence']['value']; 
            this.expertc[element[key]] = this.expertc[element[key]] ? this.expertc[element[key]]+element['rating']['expertise']['value']: element['rating']['expertise']['value']; 
            this.mge += element['rating']['mge']['value']
            this.pathogen += element['rating']['genome']['value']
        });

        // let data = [];
        for(var k in counts){ 
            this.data.push({name: k, value: counts[k], confidence:this.confidenc[k], expertice:this.expertc[k]});
        }

        this.bestCategory = Object.keys(counts).reduce(function(a, b){ return counts[a] > counts[b] ? a : b });
        this.bestCategoryCounts = counts[this.bestCategory];
        this.totalCategoryCounts = edata.length;
        this.ready = true;


    }

}