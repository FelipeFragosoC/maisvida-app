import { InModel } from "./in-model";

export class Usuario extends InModel {
	id:number;
	name:string;
	username:string;
	username_canonical:string;
	password:string;
	email:string;
	email_canonical:string;

	roles:any[];

	get roleString():string {
		return '';
	}

	fromObject(obj: Object) {
		for (var propName in obj) {
			this[propName] = obj[propName]
		}
	}
}
