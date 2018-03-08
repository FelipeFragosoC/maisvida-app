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

	protected extractData(res:HttpResponse<any>):MaisVidaResponse {
		let maisVidaResponse:MaisVidaResponse = new MaisVidaResponse();
		maisVidaResponse.fromObject(res['data']);

		if(maisVidaResponse.className) {
			let newResult = [];

			for(let i:number = 0; i < maisVidaResponse.result.length; i++) {
				let instance = new AppModel[maisVidaResponse.className]();
				instance.fromObject(maisVidaResponse.result[i]);
				newResult.push(instance);
			}

			maisVidaResponse.result = newResult;
		}

		return maisVidaResponse;
	}

	protected handleError(error: HttpErrorResponse) {
		let maisVidaResponse:MaisVidaResponse = new MaisVidaResponse();
		maisVidaResponse.fromObject(error.error);

		if (error.status === 401) {
			if (error['error_description'] === 'The access token provided has expired.' || error['error_description'] === 'The access token provided is invalid.') {
				localStorage.clear();
			}
		}

		return new ErrorObservable(maisVidaResponse);
	}

	get baseApi() {
		if (isDevMode()) {
			return 'http://localhost:8000/';
		}

		return 'https://maisvida-api.com.br/'; // production url
	}

}
