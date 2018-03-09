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
	}

	confirmarDelecao(medico:any){
	    let dialogRef = this.dialog.open(DialogConfirmarComponent);
	    dialogRef.afterClosed().subscribe(result=>{
	        if(result){
	            console.log("deletar medico");
            }
        })
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