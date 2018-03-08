import { EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AppService } from '../../app.service';
import { MaisVidaResponse, Usuario } from '@app/model';

import { catchError, map } from "rxjs/operators";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService extends AppService {

	public usuario:Usuario;

	private urlResetPassword:string = 'usuario/resetpassword/';
	private urlValidateUsuarioToken:string = 'usuario/validate/token';
	private urlSendPassword:string = 'usuario/password';

	private urlCurrentUsuario: string = 'api/usuario/current';
	private urlUsuario:string = 'usuario';

	public usuarioUpdated:EventEmitter<Usuario> = new EventEmitter();

	public nextUrl:string = '/dashboard';

	constructor (private http:HttpClient) {
		super();

		this.usuario = new Usuario();
		this.usuario.name = "Usuário Teste";
		this.usuario.username = 'usuarioteste';
		this.usuario.email = 'usuarioteste@gmail.com';
		this.usuario.id = 1;
	}

	completeUsuario(usuario = false) {
		this.usuario = new Usuario();
		this.usuario.fromObject(usuario);

		this.usuarioUpdated.emit(this.usuario);
	}

	postUsuario(usuario:Usuario):Observable<MaisVidaResponse> {
		return this.http.post<any>(this.baseApi + this.urlUsuario, usuario, this.getHeaders()).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	}

	updateUsuario(usuario:Usuario):Observable<MaisVidaResponse> {
		let obj = {
			'id' : usuario.id,
			'name' : usuario.name,
			'email' : usuario.email
		};

		return this.http.post<any>(this.baseApi + 'api/usuario', obj, this.getHeaders(true)).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	}

	postUsuarioPassword(usuario_id:number, password:string):Observable<MaisVidaResponse> {
		let obj = {
			'usuario_id' : usuario_id,
			'password' : password
		};

		return this.http.post<any>(this.baseApi + 'api/usuario/password', obj, this.getHeaders(true)).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	}

	getCurrentUsuario():Observable<MaisVidaResponse> {
		return this.http.get<any>(this.baseApi + this.urlCurrentUsuario, this.getHeaders(true)).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	}

	public resetPassword(email:string):Observable<MaisVidaResponse> {
		return this.http.get<any>(this.baseApi + this.urlResetPassword + email, this.getHeaders()).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	}

	public validateUsuarioToken(token:string):Observable<MaisVidaResponse> {
		let obj = { 'token': token };

		return this.http.post<any>(this.baseApi + this.urlValidateUsuarioToken, obj, this.getHeaders()).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
	}

	public sendPassword(new_password:string, token:string):Observable<MaisVidaResponse> {
		let obj = { 'new_password': new_password, 'token': token };

		return this.http.post<any>(this.baseApi + this.urlSendPassword, obj, this.getHeaders()).pipe(
			map(this.extractData),
			catchError(this.handleError)
		)
	}

	public get isAdmin():boolean {
		if(this.usuario.roles == undefined)
			return false;

		for(let i:number = 0; i < this.usuario.roles.length; i++) {
			if(this.usuario.roles[i] == "ROLE_ADMIN") {
				return true;
			}
		}

		return false;
	}

	public get usuarioToken():string { return localStorage.getItem('access_token'); }

}
