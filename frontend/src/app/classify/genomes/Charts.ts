export class PieChart {
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

    draw(edata){

        try{
            if (edata.length>=1){
                this.data = edata.sort((a, b) => b.value - a.value).slice(0, 5);
                this.ready = true;
            }else{
                this.ready = false;
            }
        }catch(Error){
            this.ready = false;
        }

    }

}