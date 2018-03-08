import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { MedicoComponent } from './medico.component';

const routes: Routes = [
  {
    path: '',
    component: MedicoComponent,
    data: {
      title: 'Produt'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule {}
