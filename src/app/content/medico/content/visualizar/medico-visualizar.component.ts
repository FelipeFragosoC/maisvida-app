import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {InComponent, Medico} from "@app/model";
import {NotificationsService} from "angular2-notifications";
import {UsuarioService} from "../../../usuario/usuario.service";
import {MedicoService} from "../../medico.service";

@Component({
    templateUrl: 'medico-visualizar.component.html'
})
export class MedicoVisualizarComponent extends InComponent implements OnInit {

    public medico:Medico;
    public title:string;

    constructor(public medicoService: MedicoService, public notification: NotificationsService, private router: Router, private activatedRoute: ActivatedRoute) {
        super();

        this.activatedRoute.data.subscribe(
            result => { this.title = result.title }
        );

        let id = this.activatedRoute.snapshot.params['id'];

        if (!this.medicoService.medico) {
            this.getMedico(id);
            return;
        }

        this.medico = this.medicoService.medico;
    }

    getMedico(id:number) {
        this.medicoService.getMedico(id).subscribe(
            result => {
                this.medico = new Medico();
                this.medico.fromObject(result);
            },
            error => {
                this.notification.error("MaisVida", "Não foi possível encontrar o Médico.");
                this.router.navigate(['/medico']);
            }
        )
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.medicoService.medico = undefined;
    }

}