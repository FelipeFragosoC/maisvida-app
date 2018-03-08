import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";

import { InComponent } from "../../model";
import { UsuarioService } from "../../content/usuario/usuario.service";
import { NotificationsService } from "angular2-notifications";

@Component({
	selector: 'dialog-reset-password',
	templateUrl: 'dialog-reset-password.component.html',
})
export class DialogResetPasswordComponent extends InComponent implements OnInit {

	public usuarioEmail:string;
	public usuarioToken:string;
	public newPassword:string;
	public confNewPassword:string;

	public currentEmail:string;

	public ctrl:number = 1;

	constructor(public dialogRef: MatDialogRef<DialogResetPasswordComponent>, private usuarioService:UsuarioService, private notification:NotificationsService) {
		super();
	}

	ngOnInit(): void {
	}

	public resetPassword() {
		this.loading = true;

		this.usuarioService.resetPassword(this.usuarioEmail).subscribe(
			result => {
				this.loading = false;
				this.notification.success('Enviado.', 'Confira seu email para mais instruções.');

				this.ctrl = 2;
			},
			error => {
				this.loading = false;
				this.notification.error("Ops...", error);
				console.error(error);
			}
		)
	}

	public sendPassword() {
		this.loading = true;

		if(this.newPassword != this.confNewPassword) {
			this.notification.error("Senhas inválidas.", "Confira as senhas novamente.");
			return;
		}

		this.usuarioService.sendPassword(this.newPassword, this.usuarioToken).subscribe(
			result => {
				this.loading = false;
				this.notification.success("Senha alterada.", "Sua senha foi alterada com sucesso.");
				this.dialogRef.close();
			},
			error => {
				this.loading = false;
				this.notification.error("Token inválido.", "Por favor, confira o código de segurança e tente novamente.");
			}
		)
	}

	onYesClick(): void {
		this.dialogRef.close(true);
	}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
