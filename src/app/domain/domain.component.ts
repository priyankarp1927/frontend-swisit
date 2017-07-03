import { Component, OnInit } from '@angular/core';
import { Router , Params } from '@angular/router';
//import { Logger } from "angular2-logger/core";

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent {

 constructor( private router: Router) { }

   clickondomain(domain : string)
{
	
	 console.log(domain);
	this.router.navigate(['app-concept', domain]);
	console.log(domain);

}


}
