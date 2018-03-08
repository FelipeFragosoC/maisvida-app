import { Component, OnInit } from '@angular/core';

import { InComponent } from "../../model";
import { MatDialogRef } from "@angular/material";

@Component({
	selector: 'dialog-logout',
	templateUrl: 'dialog-logout.component.html',
})
export class DialogLogoutComponent extends InComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<DialogLogoutComponent>) {
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
