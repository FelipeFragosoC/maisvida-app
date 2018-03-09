import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {AppService} from '../app.service';

import {Observable} from 'rxjs/Observable';
import {MaisVidaResponse, Medico} from "@app/model";
import {catchError, map} from "rxjs/operators";


@Injectable()
export class LoginService extends AppService {

    public client_id:string = 'spring-security-oauth2-read-write-client';
    public client_secret:string = 'spring-security-oauth2-read-write-client-password1234';

    constructor(private http: HttpClient) {
        super();
    }

    verificaLoginAutenticado(): boolean {
        if (localStorage.getItem("accessToken"))
            return true;

        return false;
    }

    fazerLogin(usuario: string, senha: string, lembrarSenha: boolean = false): Observable<any> {
        let formData: FormData = new FormData();
        formData.append('username', usuario);
        formData.append('password', senha);

        let authBase64 = btoa(this.client_id + ':' + this.client_secret);

        if (lembrarSenha) {
            localStorage.setItem("usuario", usuario);
            localStorage.setItem("senha", senha);
        }

        localStorage.setItem("lembrarSenha", lembrarSenha.toString());

        let headers = new HttpHeaders({
            'Content-Type':  'application/json; charset=UTF-8',
            'Authorization': 'Basic ' + authBase64
        });


        return this.http.post<any>(this.baseApi + "oauth/token", formData, {"headers" : headers}).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }
}
