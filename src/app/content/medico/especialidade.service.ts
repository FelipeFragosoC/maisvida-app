import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {AppService} from '../../app.service';
import {MaisVidaResponse, Medico} from '@app/model';

import {catchError, map} from "rxjs/operators";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EspecialidadeService extends AppService {

    constructor(private http: HttpClient) {
        super();
    }

    public getEspecialidade(): Observable<any> {
        return this.http.get<any>(this.baseApi + "especialidade", this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }
}
