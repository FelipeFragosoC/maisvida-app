import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
	selector: 'body',
	template: '<router-outlet></router-outlet><simple-notifications [options]="options"></simple-notifications>'
})
export class AppComponent {
	public options = { timeOut: 8000, lastOnBottom: true };
}
