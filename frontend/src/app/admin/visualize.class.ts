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

    constructor(){
        this.data = [];
        this.showLegend = false;
        this.explodeSlices = false;
        this.doughnut = false;
        this.gradient = true;
        this.showLabels = true;
        this.colorScheme = {
                domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.ready = false;
    }

    draw(edata, key){

        let counts = {};
        let expertc = {};
        let confidenc = {}
        edata.forEach(element => {
            counts[element[key]] = counts[element[key]] ? counts[element[key]]+1: 1; 
            confidenc[element[key]] = confidenc[element[key]] ? confidenc[element[key]]+element['rating']['confidence']['value']: element['rating']['confidence']['value']; 
            expertc[element[key]] = expertc[element[key]] ? expertc[element[key]]+element['rating']['expertise']['value']: element['rating']['expertise']['value']; 
        });

        // let data = [];
        for(var k in counts){
            this.data.push({name: k, value: counts[k], confidence:confidenc[k], expertice:expertc[k]});
        }

        this.ready = true;

    }

}