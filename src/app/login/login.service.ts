import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {AppService} from '../app.service';

import {Observable} from 'rxjs/Observable';
import {MaisVidaResponse, Medico} from "@app/model";
import {catchError, map} from "rxjs/operators";


@Injectable()
export class LoginService extends AppService {

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

        if (lembrarSenha) {
            localStorage.setItem("usuario", usuario);
            localStorage.setItem("senha", senha);
        }

        return this.http.post<any>(this.baseApi + "oauth/token", formData, this.getHeaders()).pipe(
            map(this.extractData),
            catchError(this.handleError)
        )
    }
}
