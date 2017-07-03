import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ConceptService {

  constructor(private http: Http) { }

 getConcept(domain : string)
 { 
 	/*console.log("service");
     return this.http.get('http://localhost:8080/v1/api/movie')
   .map((response) => response.json() || []);*/
   console.log("aaaaaaaa"+domain);
   return Observable.of(domain);
     
 }

}

