import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {MedicoComponent} from './medico.component';
import {MedicoVisualizarComponent} from "./content/visualizar/medico-visualizar.component";
import {MedicoFormularioComponent} from "./content/formulario/medico-formulario.component";

const routes: Routes = [
    {
        path: '',
        component: MedicoComponent,
        data: {
            title: 'Listar'
        }
    },
    {
        path: 'visualizar/:id',
        component: MedicoVisualizarComponent,
        data: {
            title: 'Visualizar'
        }
    },
    {
        path: 'editar/:id',
        component: MedicoFormularioComponent,
        data: {
            title: 'Editar'
        }
    },
    {
        path: 'novo',
        component: MedicoFormularioComponent,
        data: {
            title: 'Cadastrar'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedicoRoutingModule {
}
