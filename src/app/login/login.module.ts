import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { LoginRoutingModule }	from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginCardComponent } from "./content/login-card.component";

@NgModule({
	imports: [
		CommonModule,
		LoginRoutingModule,
		FormsModule,
		SharedModule
	],
	declarations: [
		LoginComponent,
		LoginCardComponent
	],
	providers: [
		LoginService
	],
})
export class LoginModule { }
