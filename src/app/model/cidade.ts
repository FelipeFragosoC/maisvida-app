import {InModel} from "./in-model";
import {Uf} from "@app/model";

export class Cidade extends InModel {
    id: number;
    nome: string;

    uf: Uf;
}
