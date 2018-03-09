import { Component, OnInit } from '@angular/core';

import { InComponent } from "@app/model";
import { MatDialogRef } from "@angular/material";

@Component({
	selector: 'dialog-logout',
	templateUrl: 'dialog-confirmar.component.html',
})
export class DialogConfirmarComponent extends InComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<DialogConfirmarComponent>) {
		super();
	}

	ngOnInit(): void {
	}

	onYesClick(): void {
		this.dialogRef.close(true);
	}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
