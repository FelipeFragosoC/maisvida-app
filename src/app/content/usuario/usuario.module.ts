import { NgModule } 			from '@angular/core';
import { CommonModule } 		from '@angular/common';
import { FormsModule } 			from '@angular/forms';

import { UsuarioComponent } 		from './usuario.component';

import { UsuarioRoutingModule }	from './usuario-routing.module';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    imports: [
		CommonModule,
        UsuarioRoutingModule,
		FormsModule,
		SharedModule
    ],
    declarations: [
		UsuarioComponent,
	],
	providers: [
	]
})
export class UsuarioModule { }
