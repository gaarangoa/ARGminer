
import intersectBig from 'intersect/index.js'
// import removeStopwords from 'stopword/lib/stopword.js'

export class ScoreAnnotation {

    public texts: String = '';
    

    constructor(){

    }

    getAllSubstrings(str, size) {
        var i, j, result = [];
      
        for (i = 0; i < str.length-size+1; i++) {

            result.push(str.slice(i, i+size));

        }
        return result;
      }

    score(ARG: object, VAL: object){

        this.texts = JSON.stringify(ARG['metadata']);

        ARG['besthit'].alignments.forEach(element => {
            if(element){
                this.texts += JSON.stringify(element);
            }
        });

        // let unique = this.texts.replace(/\W|\_/g," ").toUpperCase().match(/.{1,3}/g).filter(function(item, i, ar){ return ar.indexOf(item) === i; });
        // let unique2 = this.texts.replace(/\W|\_/g," ").toUpperCase().match(/.{1,4}/g).filter(function(item, i, ar){ return ar.indexOf(item) === i; });
        let unique = this.getAllSubstrings(this.texts.replace(/\W/g," ").toUpperCase(), 3).filter(function(item, i, ar){ return ar.indexOf(item) === i; });

        let gclass = this.getAllSubstrings(JSON.stringify([VAL['class']]).replace(/\W|\_|null/g,"").toUpperCase(),3).filter(function(item, i, ar){ return ar.indexOf(item) === i; });

        let ggroup = this.getAllSubstrings(JSON.stringify([VAL['group']]).replace(/\W|\_|null/g,"").toUpperCase(), 3).filter(function(item, i, ar){ return ar.indexOf(item) === i; });

        let gmech = this.getAllSubstrings(JSON.stringify([VAL['mechanism']]).replace(/\W|\_|null/g,"").toUpperCase(), 3).filter(function(item, i, ar){ return ar.indexOf(item) === i; });

        // console.log(gclass);


        let iclass = intersectBig(unique,gclass);
        let igroup = intersectBig(unique,ggroup);
        let imech = intersectBig(unique,gmech);

        console.log(ggroup, gclass, gmech);

        return {
            class: 100*iclass.length/gclass.length,
            group: 100*igroup.length/ggroup.length,
            mechanism: 100*imech.length/gmech.length,
        }

    }

}