import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':keyword', component: ResultsComponent },
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
