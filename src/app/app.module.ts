import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
         MdInputModule, MdGridListModule, MdAutocompleteModule } from '@angular/material';
import { AppRouterModule  } from './approuter.module';
import { DomainComponent } from './domain/domain.component';
import { ConceptComponent } from './concept/concept.component';
import { ConceptService} from './service/concept.service';
import { SwisitMaterialModule } from './swisit-material.module';
//import { ConceptComponent } from './concept/co'
@NgModule({
  declarations: [
    AppComponent,
    DomainComponent,
    ConceptComponent
       ],
  imports: [
   BrowserModule,
   HttpModule ,
   FormsModule,
   SwisitMaterialModule,
   AppRouterModule 
   ],  
  providers: [ ConceptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
