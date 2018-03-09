import {InModel} from "./in-model";
import {Especialidade} from "./especialidade";
import {Cidade} from "@app/model";

export class Medico extends InModel {
    id: number;
    primeiroNome: string;
    ultimoNome: string;
    email: string;
    ativo: number;
    status: number;

    id_especialidade: number;
    especialidade: Especialidade;

    id_cidade: number;
    cidade: Cidade;
}
