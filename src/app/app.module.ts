import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindMissingNumberComponent } from './find-missing-number/find-missing-number.component';
import { FormsModule } from '@angular/forms';
import { BroadcastQuestionFourComponent } from './broadcast-question-four/broadcast-question-four.component';
import { BroadcastComp1Component } from './broadcast-comp1/broadcast-comp1.component';
import { BroadcastComp2Component } from './broadcast-comp2/broadcast-comp2.component';
import { BroadcastComp3Component } from './broadcast-comp3/broadcast-comp3.component';
import { BroadcastComp4Component } from './broadcast-comp4/broadcast-comp4.component';
import { BroadcastComp5Component } from './broadcast-comp5/broadcast-comp5.component';

@NgModule({
  declarations: [
    AppComponent,
    FindMissingNumberComponent,
    BroadcastQuestionFourComponent,
    BroadcastComp1Component,
    BroadcastComp2Component,
    BroadcastComp3Component,
    BroadcastComp4Component,
    BroadcastComp5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
