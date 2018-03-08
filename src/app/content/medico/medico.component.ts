import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {InComponent } from "@app/model";
import { NotificationsService } from "angular2-notifications";
import { UsuarioService} from "../usuario/usuario.service";
import { MedicoService } from "./medico.service";

@Component({
	templateUrl: 'medico.component.html'
})
export class MedicoComponent extends InComponent implements OnInit {

	constructor(public notification:NotificationsService, private router:Router) {
		super();
	}

	ngOnInit() {
	}

	ngOnDestroy() {
	}

}