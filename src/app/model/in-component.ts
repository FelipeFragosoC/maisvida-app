import { Injectable } from '@angular/core';
import { InBase } from "./in-base";

@Injectable()
export class InComponent extends InBase {

	public loading:boolean = false;

	constructor() { super() }
}
