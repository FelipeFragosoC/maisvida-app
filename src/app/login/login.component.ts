import { Component, OnInit }    from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from "../content/usuario/usuario.service";
import { InComponent } from "../model";
import { LoginService } from "./login.service";

@Component({
    templateUrl: 'login.component.html',
})
export class LoginComponent extends InComponent implements OnInit {

    constructor(private router:Router, private usuarioService:UsuarioService, private loginService:LoginService) {
    	super();
    }

    ngOnInit(): void {}


    public handleLoginCompleted(result) {
    	this.getCurrentUsuario();
    }

	private getCurrentUsuario() {
    	this.loading = true;

		this.usuarioService.getCurrentUsuario().subscribe(
			result => {
				//this.usuarioService.completeUsuario(result);

				this.welcomeNotification();
			},
			error => {
				localStorage.clear();
				this.loading = false;
			}
		)
	}

	private welcomeNotification() {
    	let next = '/inicio';

    	if(this.usuarioService.nextUrl)
    	    next = this.usuarioService.nextUrl;

		this.router.navigate([next]);
	}

}