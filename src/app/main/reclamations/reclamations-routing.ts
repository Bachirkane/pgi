import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclamationsComponent } from './reclamations.component';

const routes: Routes = [
  {
    path     : 'reclamations',
    component: ReclamationsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationsRouterModule { }
