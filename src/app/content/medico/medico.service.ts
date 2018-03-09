import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {AppService} from '../../app.service';
import {MaisVidaResponse, Medico} from '@app/model';

import {catchError, map} from "rxjs/operators";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MedicoService extends AppService {

    constructor(private http: HttpClient) {
        super();
    }

    public medico: Medico;

    public postMedico(medico: Medico): Observable<any> {
        return this.http.post<any>(this.baseApi + "medico", medico, this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }

    public getMedicos(): Observable<any> {
        return this.http.get<any>(this.baseApi + "medico", this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }

    getMedicosJSON(): Observable<any> {
        return this.http.get<any>(this.constApi + "medicos.json", this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }

    public getMedico(id): Observable<any> {
        return this.http.get<any>(this.baseApi + "medico/" + id, this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }

    public putMedico(medico: Medico): Observable<any> {
        return this.http.put<any>(this.baseApi + "medico", medico, this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }

    public deleteMedico(id): Observable<any> {
        return this.http.delete<any>(this.baseApi + "medico/" + id, this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }
}
