import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { UsuarioService} from "../content/usuario/usuario.service";
import { DialogLogoutComponent } from "./content/dialog-logout.component";
import { Router } from "@angular/router";

@Component({
	selector: 'app-dashboard',
	templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

	public constructor(public usuarioService:UsuarioService, public dialog: MatDialog, private router:Router) { }

	public disabled = false;
	public status: {isopen: boolean} = {isopen: false};

	public asideShow:boolean = false;

	public mainMenu:any[] = [];

	public toggled(open: boolean): void {
		console.log('Dropdown is now: ', open);
	}

	public toggleDropdown($event: MouseEvent): void {
		$event.preventDefault();
		$event.stopPropagation();
		this.status.isopen = !this.status.isopen;
	}

	ngOnInit(): void {
		//this.getMenu();
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(DialogLogoutComponent);

		dialogRef.afterClosed().subscribe(result => {
			if(result)
				this.router.navigate(['/logout']);
		});
	}
}
