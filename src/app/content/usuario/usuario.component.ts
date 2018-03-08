import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { UsuarioService } from './usuario.service';
import { LoginService }			from '../../login/login.service';
import { InComponent, Usuario } from "@app/model";
import { NotificationsService } from "angular2-notifications";
import { MatDialog } from "@angular/material";

@Component({
    templateUrl: 'usuario.component.html'
})
export class UsuarioComponent extends InComponent implements OnInit {

	public newUsuarioCtrl:boolean = false;
	public newUsuario:Usuario;

	public newPassword:string = '';
	public confPassword:string = '';

	public termsCtrl:boolean = false;

	constructor(public usuarioService:UsuarioService, private loginService:LoginService, private router:Router, private notification:NotificationsService, public dialog: MatDialog) {
		super();
	}

    ngOnInit(): void {
    }

    postUsuarioPassword() {
    }

	validateLogin(usuario) {
	}

	validatePersonalInfo(usuario:Usuario) {
	}

	validatePassword() {
	}
}
