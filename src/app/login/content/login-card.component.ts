import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService }	from '../login.service';
import { InComponent } from "@app/model";
import { NotificationsService } from "angular2-notifications";
import { MatDialog } from "@angular/material";
import { DialogResetPasswordComponent } from "./dialog-reset-password.component";
import { UsuarioService } from "../../content/usuario/usuario.service";

@Component({
	selector: 'login-card',
	templateUrl: 'login-card.component.html',
})
export class LoginCardComponent extends InComponent implements OnInit {

	public email:string;
	public senha:string;

	@Output() loginCompleted = new EventEmitter();

	public visitorEmail:string;

	constructor(private loginService:LoginService, private usuarioService:UsuarioService, private router:Router, private notification:NotificationsService, public dialog: MatDialog) {
		super();
	}

	ngOnInit(): void {
	}

	private validateLogin():boolean {
		if(!this.email || !this.senha)
			return false;

		if(this.email.length < 5 || this.senha.length < 5)
			return false;

		return true;
	}
}