import { InModel } from "./in-model";

export class MaisVidaResponse extends InModel {
	status:string;
	message:string;
	errorCode:number;
	result:any[];
	className:string;
}
