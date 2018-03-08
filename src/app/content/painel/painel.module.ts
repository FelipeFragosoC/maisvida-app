import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { PainelComponent } from './painel.component';
import { PainelRoutingModule } from './painel-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		PainelRoutingModule,
		ChartsModule,
		SharedModule,
	],
	declarations: [
		PainelComponent ]
})
export class PainelModule { }
