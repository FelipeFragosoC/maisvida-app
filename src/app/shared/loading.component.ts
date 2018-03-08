import { Component, Input } from '@angular/core';

@Component({
	selector: 'in-loading',
	template: `<mat-spinner mode="indeterminate" [diameter]="wSize"></mat-spinner>`
})
export class LoadingComponent {

	@Input()
	public wSize:number = 100;

	@Input()
	public hSize:number = 100;

	constructor() {}

	ngOnInit(): void { }
}
