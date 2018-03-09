import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { LoginService } from './login/login.service';

import { UsuarioService } from "./content/usuario/usuario.service";

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private loginService: LoginService, private router:Router, public usuarioService:UsuarioService, private location:Location) { }

	canActivate():boolean {
		// if(this.loginService.verificaLoginAutenticado() && this.usuarioService.usuario) {
		// 	return true;
		// }
        //
		// this.usuarioService.nextUrl = this.location.path();
        //
		// this.router.navigate(['/login']);
		return true; // return false
	}
}