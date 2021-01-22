import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BroadcastQuestionFourComponent } from './broadcast-question-four/broadcast-question-four.component';
import { FindMissingNumberComponent } from './find-missing-number/find-missing-number.component';

const routes: Routes = [
  {path:'',component:FindMissingNumberComponent},
  {path:'broadcast',component:BroadcastQuestionFourComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AppComponent,
  FindMissingNumberComponent
]