import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public info: any;
    constructor() { }

    ngOnInit() {
        this.info = [
            {
                title: 'Crowdsourcing',
                subtitle: 'ARGminer is open to the ARG community',
                subsubtitle: 'Contribute to ARGminer is easy!',
                image: 'assets/images/collaborate.svg',
                description:'ARGminer is an effort to correct the annotation of ARGs from multiple databases into a common nomenclature by removing redundant information. It also brings the opportunity to experts to share their knowledge by inspecting and evaluating ARGs.'
            },
            {
                title: 'Open Database',
                subtitle: 'ARGminer is free',
                subsubtitle: 'Contribute to ARGminer is easy!',
                image: 'assets/images/open.svg',
                description: 'ARGminer includes ARGs from multiple resources and provides information from each one of those resources. Thus, you can verify the authenticity of the annotations through the different resources. To date, ARGminer is the only platform that offers comparisons among different ARG resources.',
                credit: "<a href='https://www.freepik.com/free-vector/open-locker_2900481.htm'>Designed by Rawpixel.com</a>"
            },
            {
                title: 'Complementary information',
                subtitle: 'ARGminer and Mobile Genetic Elements',
                subsubtitle: 'Contribute to ARGminer is easy!',
                image: 'assets/images/mobile.svg',
                description: 'ARGminer also provides insights into mobile genetic elements by using the ACLAME database to identify ARGs with evidence of being carried by MGEs as well as a intesive search of ARGs in plasmids from the PATRIC database.',
                credit:"<a href='https://www.freepik.com/free-vector/biology-organisms_766984.htm'>Designed by Freepik</a>"
            },
            {
                title: 'Periodic Update',
                subtitle: 'ARGminer is constantly updated',
                subsubtitle: 'Contribute to ARGminer is easy!',
                image: 'assets/images/update.svg',
                description: 'As the collaborative nature of ARGminer, it is expected to update ARGminer periodically towards to build a solid and standarized product available for the ARG community.',
                credit: "<a href='https://www.freepik.com/free-vector/business-woman-character-improving_1105849.htm'>Designed by Freepik</a>"
            }
        ]
  }

}
