import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {InComponent, Medico} from "@app/model";
import { NotificationsService } from "angular2-notifications";
import { UsuarioService} from "../usuario/usuario.service";
import { MedicoService } from "./medico.service";
import {MatDialog} from "@angular/material";
import {DialogConfirmarComponent} from "../../shared/dialog-confirmar.component";

@Component({
	templateUrl: 'medico.component.html'
})

export class MedicoComponent extends InComponent implements OnInit {

	public medicos:Medico[] = [];

	constructor(public medicoService:MedicoService, public notification:NotificationsService, private router:Router, public dialog:MatDialog) {
		super();

		this.getMedicos();
	}

	confirmarDelecao(medico:Medico){
	    let dialogRef = this.dialog.open(DialogConfirmarComponent);
	    dialogRef.afterClosed().subscribe(result=>{
	        if(result){
	            this.deletarMedico(medico.id);
            }
        })
    }

    deletarMedico(id){
	    this.medicoService.deleteMedico(id).subscribe(
            result => {
                this.notification.success('MaisVida', "Médico removido com sucesso.");
                this.getMedicos();
            },
            error => {
                this.notification.error("MaisVida", "Não foi possível salvar o Médico, tente novamente mais tarde.");
            }
        )
    }

    getMedicos(){
        this.medicoService.getMedicos().subscribe(
            result => {

                this.medicos = [];

                let medico:Medico;

                for(let i:number = 0; i < result.length; i++) {
                    medico = new Medico();
                    medico.fromObject(result[i]);
                    this.medicos.push(medico);
                }
            },
            error => {
                this.notification.error("MaisVida", "Não foi possivel buscar os médicos");
                console.error(error);
            }
        )
    }

	visualizarMedico(medico:any){
	    this.medicoService.medico = medico;
	    this.router.navigate(['/medico/visualizar/' + medico.id])
    }

    editarMedico(medico:any) {
	    this.medicoService.medico = medico;
	    this.router.navigate(['/medico/editar/' + medico.id])
    }

	ngOnInit() {
	}

	ngOnDestroy() {
	}

}