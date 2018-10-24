import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
    public masonryItems: any;
    private maso_options: any;
    constructor(
      private router: Router
  ) { }

    ngOnInit() {
        this.maso_options = {
            transitionDuration: '0.8',

        }
        this.masonryItems = [
            { id: '1', tags:['vanG', 'vanU', 'vancomycin', 'deepARG'], user: 'Gustavo Arango', email: 'gustavo1@vt.edu', title: 'Is VanGU/VanU the same as VanG?', body: 'I found there is something strange with the database integrate with your DeepARG database, since I am using the analysis result in writing the manuscript.'},
            { id: '2', tags:['vanG', 'vanU'], user: 'Gustavo Arango', email: 'gustavo1@vt.edu', institution: 'Virginia Tech', title: 'Is VanGU/VanU the same as VanG?', body: 'I found there is something strange with the database integrate with your DeepARG database, since I am using the analysis result in writing the manuscript. I found two genes, one is vanU from ABA71726.1, one is YP_002939420. I checked again and again about these two genes, I think they are the same, all belong to VanG type vancomycin resistance genes. I am not sure whether these two genes can be given the same name in DeepARG in the future.'},
            { id: '3',tags: ['vanG', 'deepARG'], user: 'Gustavo Arango', email: 'gustavo1@vt.edu', institution: 'Virginia Tech', title: 'Is NMD a real ARG?', body: "I've been researching about this genen and I have found little evidence about whether it is an ARG or not" },
            { id: '4',tags:['vanG', 'vanU', 'vancomycin', 'deepARG'], user: 'Gustavo Arango', email: 'gustavo1@vt.edu', institution: 'Virginia Tech', title: 'Is VanGU/VanU the same as VanG?', body: 'I found there is something strange with the database integrate with your DeepARG database, since I am using the analysis result in writing the manuscript.'},
            { id: '5',tags:['vanG', 'vanU'], user: 'Gustavo Arango', email: 'gustavo1@vt.edu', institution: 'Virginia Tech', title: 'Is VanGU/VanU the same as VanG?', body: 'I found there is something strange with the database integrate with your DeepARG database, since I am using the analysis result in writing the manuscript. I found two genes, one is vanU from ABA71726.1, one is YP_002939420. I checked again and again about these two genes, I think they are the same, all belong to VanG type vancomycin resistance genes. I am not sure whether these two genes can be given the same name in DeepARG in the future.'},
            { id: '6',tags: ['vanG', 'deepARG'], user: 'Gustavo Arango', email: 'gustavo1@vt.edu', institution: 'Virginia Tech', title: 'Is NMD a real ARG?', body: "I've been researching about this genen and I have found little evidence about whether it is an ARG or not" },
            { id: '7',tags:['vanG', 'vanU', 'vancomycin', 'deepARG'], user: 'Gustavo Arango', email: 'gustavo1@vt.edu', institution: 'Virginia Tech', title: 'Is VanGU/VanU the same as VanG?', body: 'I found there is something strange with the database integrate with your DeepARG database, since I am using the analysis result in writing the manuscript.'},
            { id: '8',tags:['vanG', 'vanU'], user: 'Gustavo Arango', email: 'gustavo1@vt.edu', institution: 'Virginia Tech', title: 'Is VanGU/VanU the same as VanG?', body: 'I found there is something strange with the database integrate with your DeepARG database, since I am using the analysis result in writing the manuscript. I found two genes, one is vanU from ABA71726.1, one is YP_002939420. I checked again and again about these two genes, I think they are the same, all belong to VanG type vancomycin resistance genes. I am not sure whether these two genes can be given the same name in DeepARG in the future.'},
            { id: '9',tags:['vanG', 'deepARG'], user: 'Gustavo Arango', email: 'gustavo1@vt.edu', institution: 'Virginia Tech', title: 'Is NMD a real ARG?', body: "I've been researching about this genen and I have found little evidence about whether it is an ARG or not" },
          ];
    }

    go_to_question(question_id: any) {
        console.log(question_id);
        this.router.navigate(['forum/selected_question', {id: question_id}])
    }

}
