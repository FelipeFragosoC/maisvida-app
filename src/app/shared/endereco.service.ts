import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {AppService} from '../app.service';
import {MaisVidaResponse, Medico} from '@app/model';

import {catchError, map} from "rxjs/operators";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EnderecoService extends AppService {

    constructor(private http: HttpClient) {
        super();
    }

    public getUfs(): Observable<any> {
        return this.http.get<any>(this.baseApi + "uf", this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }

    public getCidades(id_uf:number): Observable<any> {
        return this.http.get<any>(this.baseApi + "uf/" + id_uf + "/cidade", this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }

    getUfsJSON(): Observable<any> {
        return this.http.get<any>(this.jsonApi + "ufs.json", this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }

    getCidadesJSON(): Observable<any> {
        return this.http.get<any>(this.jsonApi + "cidades.json", this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }
}
