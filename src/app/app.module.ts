import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";


import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';

import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { LogoutComponent } from './login/logout.component';

import { UsuarioService } from "./content/usuario/usuario.service";
import { AuthGuard } from "./authguard";
import { LoginService } from "./login/login.service";
import { DialogLogoutComponent } from "./layouts/content/dialog-logout.component";
import { SimpleNotificationsModule } from "angular2-notifications";
import { DialogResetPasswordComponent } from "./login/content/dialog-reset-password.component";

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		BsDropdownModule.forRoot(),
		TabsModule.forRoot(),
		ChartsModule,
		SharedModule,
		SimpleNotificationsModule.forRoot(),
	],
	declarations: [
		AppComponent,
		FullLayoutComponent,
		SimpleLayoutComponent,
		NAV_DROPDOWN_DIRECTIVES,
		BreadcrumbsComponent,
		SIDEBAR_TOGGLE_DIRECTIVES,
		AsideToggleDirective,
		LogoutComponent,

		/* Material Dialogs */
		DialogLogoutComponent,
		DialogResetPasswordComponent,
		/* END -- Material Dialogs */
	],
	providers: [
		AuthGuard,
		LoginService,
		UsuarioService,
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	],
	entryComponents: [
		DialogLogoutComponent,
		DialogResetPasswordComponent,
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
