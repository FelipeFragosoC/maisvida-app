import  { Injectable, isDevMode } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

import { MaisVidaResponse } from "@app/model";
import * as AppModel from "@app/model";

@Injectable()
export class AppService {

	protected getHeaders(auth: boolean = false):any {
		let headers = new HttpHeaders({
			'Content-Type':  'application/json; charset=UTF-8',
		});

		if(auth)
			headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

		return { "headers" : headers };
	}

	protected extractData(res:HttpResponse<any>):any {
		return res;
	}

	protected handleError(error: HttpErrorResponse):any {
		return new ErrorObservable(error);
	}

	get baseApi() {
		if (isDevMode()) {
			return 'http:localhost:8080/'; // Alterar esse valor apontando para a API.
		}

		return 'https://maisvida-api.com.br/'; // production url
	}

	protected jsonApi:string = '/assets/json/';

}
