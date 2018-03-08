import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import {SimpleLayoutComponent} from './layouts/simple-layout.component';

import { LogoutComponent } from './login/logout.component';
import { AuthGuard } from "./authguard";

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'painel',
		pathMatch: 'full',
	},
	{
		path: '',
		component: FullLayoutComponent,
		data: {
			title: 'Home'
		},
		children: [
			{
				path: 'painel',
				loadChildren: './content/painel/painel.module#PainelModule',
				canActivate: [AuthGuard]
			},
			{
				path: 'usuario',
				loadChildren: './content/usuario/usuario.module#UsuarioModule',
				canActivate: [AuthGuard]
			},
			{
				path: 'medico',
				loadChildren: './content/medico/medico.module#MedicoModule',
				canActivate: [AuthGuard]
			}
		]
	},
	{
		path: '',
		component: SimpleLayoutComponent,
		children: [
			{
				path: 'login',
				loadChildren: './login/login.module#LoginModule'
			},
			{
				path: 'logout',
				component: LogoutComponent
			},
		]
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
