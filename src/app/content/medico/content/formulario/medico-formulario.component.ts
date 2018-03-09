import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {InComponent, Medico, Especialidade, Cidade, Uf} from "@app/model";
import {NotificationsService} from "angular2-notifications";
import {UsuarioService} from "../../../usuario/usuario.service";
import {MedicoService} from "../../medico.service";
import {EspecialidadeService} from "../../especialidade.service";
import {EnderecoService} from "../../../../shared/endereco.service";

@Component({
    templateUrl: 'medico-formulario.component.html'
})
export class MedicoFormularioComponent extends InComponent implements OnInit {

    public medico: Medico = new Medico();
    public title: string;
    public especialidades:Especialidade[] = [];
    public ufs:Uf[] = [];
    public cidades:Cidade[] = [];

    constructor(public medicoService: MedicoService, public notification: NotificationsService, private router: Router,
                public activatedRoute: ActivatedRoute, public  especialidadeService: EspecialidadeService, public enderecoService: EnderecoService) {
        super();

        this.activatedRoute.data.subscribe(
            result => {
                this.title = result.title
            }
        );

        this.getEspecialidade();
        this.getUf();
        this.getCidade();

        if (this.medicoService.medico) {
            this.medico = this.medicoService.medico;
            return;
        }

        let id = this.activatedRoute.snapshot.params['id'];

        if (id)
            this.getMedico(id);

    }

    getEspecialidade() {
        this.especialidadeService.getEspecialidade().subscribe(
            result => {
                this.especialidades = result;
            },
            error => {
                this.notification.error("MaisVida", "Não foi possível buscar a Especialidade do médico, tente novamente mais tarde.");
                this.router.navigate(['/medico']);
            }
        )
    }

    getUf() {
        this.enderecoService.getUfs().subscribe(
            result => {
                this.ufs = result;
            },
            error => {
                this.notification.error("MaisVida", "Não foi possível buscar a UF, tente novamente mais tarde.");
                this.router.navigate(['/medico']);
            }
        )
    }

    getCidade() {
        this.enderecoService.getCidades().subscribe(
            result => {
                this.cidades = result;
            },
            error => {
                this.notification.error("MaisVida", "Não foi possível buscar a Cidade, tente novamente mais tarde.");
                this.router.navigate(['/medico']);
            }
        )
    }

    getMedico(id) {
        this.medicoService.getMedico(id).subscribe(
            result => {
                this.medico.fromObject(result);
            },
            error => {
                this.notification.error("MaisVida", "Não foi possível buscar o Médico, tente novamente mais tarde.");
                this.router.navigate(['/medico']);
            }
        )
    }

    salvarMedico(medico: Medico) {
        if (medico.id) {
            this.putMedico();
            return;
        }
        this.postMedico();
    }

    private putMedico() {
        this.medicoService.putMedico(this.medico).subscribe(
            result => {
                this.medico.fromObject(result);
                this.notification.success('MaisVida', "Médico salvo com sucesso.");
                this.router.navigate(['/medico']);
            },
            error => {
                this.notification.error("MaisVida", "Não foi possível salvar o Médico, tente novamente mais tarde.");
            }
        )
    }

    private postMedico() {
        this.medicoService.postMedico(this.medico).subscribe(
            result => {
                this.medico.fromObject(result);
                this.notification.success('MaisVida', "Médico salvo com sucesso.");
                this.router.navigate(['/medico']);
            },
            error => {
                this.notification.error("MaisVida", "Não foi possível salvar o Médico, tente novamente mais tarde.");
            }
        )
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.medicoService.medico = undefined;
    }

}