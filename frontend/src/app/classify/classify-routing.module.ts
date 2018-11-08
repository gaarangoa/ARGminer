import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifyComponent } from './classify.component';

const routes: Routes = [
  { path:'', component: ClassifyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassifyRoutingModule { }
