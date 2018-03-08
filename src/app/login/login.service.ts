import { Injectable } from '@angular/core';

import { AppService }	from '../app.service';

import { Observable } from 'rxjs/Observable';
import { MaisVidaResponse } from "@app/model";

@Injectable()
export class LoginService extends AppService {

	constructor () { super(); }

}
