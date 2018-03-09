import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {InComponent, Medico} from "@app/model";
import { NotificationsService } from "angular2-notifications";
import { UsuarioService} from "../../../usuario/usuario.service";
import { MedicoService } from "../../medico.service";

@Component({
	templateUrl: 'medico-formulario.component.html'
})
export class MedicoFormularioComponent extends InComponent implements OnInit {

    public medico:Medico = new Medico();
    public title:string;

	constructor(public medicoService: MedicoService, public notification:NotificationsService, private router:Router, public activatedRoute: ActivatedRoute) {
		super();

		this.activatedRoute.data.subscribe(
		    result => { this.title = result.title }
        );

        let id = this.activatedRoute.snapshot.params['id'];

        if (this.medicoService.medico)
            this.medico = this.medicoService.medico;
	}

	ngOnInit() {
	}

	ngOnDestroy() {
	}

}