import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReaktivneComponent } from './reaktivne/reaktivne.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {path: '', component: TemplateComponent},
  {path: 'reactive', component: ReaktivneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
