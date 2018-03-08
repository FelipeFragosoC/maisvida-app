import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InComponent } from "@app/model";
import { NotificationsService } from "angular2-notifications";
import { UsuarioService } from "../usuario/usuario.service";

@Component({
	templateUrl: 'painel.component.html',
	styleUrls: ['painel.scss']
})
export class PainelComponent extends InComponent implements OnInit {

	constructor(public notification:NotificationsService, private router:Router, public usuarioService:UsuarioService) {
		super();
	}

	ngOnInit() {
	}

	ngOnDestroy() {
	}

}