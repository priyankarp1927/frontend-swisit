import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { ConceptComponent } from './concept/concept.component';
import { ConceptService} from './service/concept.service';
import { MdAutocompleteModule,  MdInputModule } from '@angular/material';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
 import { BrowserModule } from '@angular/platform-browser';

const routes:Routes=[{path:'app-concept/:domain',component:ConceptComponent}];

@NgModule({
    
   
      imports: [BrowserModule, MdAutocompleteModule,  MdInputModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
      providers: [ ConceptService ],
      exports: [BrowserModule, MdAutocompleteModule,  MdInputModule, ReactiveFormsModule, RouterModule]
})


export class AppRouterModule 
{

 }
