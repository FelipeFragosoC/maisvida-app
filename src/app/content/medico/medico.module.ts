import { NgModule } from '@angular/core';

import { MedicoComponent } from './medico.component';
import { MedicoRoutingModule } from './medico-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		MedicoRoutingModule,
		SharedModule,
	],
	declarations: [
		MedicoComponent
	]
})
export class MedicoModule { }
