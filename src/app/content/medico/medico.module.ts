import { NgModule } from '@angular/core';

import { MedicoComponent } from './medico.component';
import { MedicoRoutingModule } from './medico-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {MedicoVisualizarComponent} from "./content/visualizar/medico-visualizar.component";
import {MedicoFormularioComponent} from "./content/formulario/medico-formulario.component";

@NgModule({
	imports: [
		MedicoRoutingModule,
		SharedModule,
	],
	declarations: [
		MedicoComponent,
		MedicoVisualizarComponent,
		MedicoFormularioComponent
	]
})
export class MedicoModule { }
