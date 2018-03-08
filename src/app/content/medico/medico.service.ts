import { Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AppService } from '../../app.service';
import { MaisVidaResponse } from '@app/model';

import { catchError, map } from "rxjs/operators";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MedicoService extends AppService {

	constructor (private http:HttpClient) {
		super();
	}
}
