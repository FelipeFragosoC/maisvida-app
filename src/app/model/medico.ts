import {InModel} from "./in-model";
import {Especialidade} from "./especialidade";
import {Cidade} from "@app/model";

export class Medico extends InModel {
    id: number;
    primeiroNome: string;
    ultimoNome: string;
    email: string;
    ativo: boolean = false;
    status: boolean = false;
    especialidade: Especialidade;
    cidade: Cidade;
}
