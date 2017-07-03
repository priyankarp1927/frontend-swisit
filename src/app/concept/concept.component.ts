import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConceptService} from '../service/concept.service';
import { DomainComponent} from '../domain/domain.component';
import 'rxjs/add/operator/switchMap';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})
export class ConceptComponent implements OnInit {

 conceptCtrl: FormControl;
 filteredConcept: any;
 /*termsCtrl: FormControl;
 filteredTerms: any;
*/
concepts = [
    'Class',
    'Interface',
    'Inheritance',
    'Polymorphism',
    'Objects',
    'Abstraction',
    'Encapsulation'
    ];


 /*   terms = [
    'Beginner',
    'Intermediate',
    'Tester',
    'Expert'
    ]*/

 constructor(private route: ActivatedRoute, private conceptService : ConceptService,
 			private domainComponent : DomainComponent) {

    this.conceptCtrl = new FormControl();
    this.filteredConcept = this.conceptCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterConcept(name));
      /*  this.termsCtrl = new FormControl();
    this.filteredTerms = this.termsCtrl.valueChanges
        .startWith(null)
        .map(name => this.filteredTerms(name));*/
}

 conceptDomain  : string;

  ngOnInit() {
     this.route.params
        .switchMap((params: Params) => this.conceptService.getConcept(params['domain']))
        .subscribe((concept ) => {this.conceptDomain = concept;
         console.log("concept"+concept);
        });
 }


 
  filterConcept(val: string) {
    return val ? this.concepts.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.concepts;
  }
/*
  filterTerms(val: string) {
    return val ? this.terms.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.terms;
  }*/
}
