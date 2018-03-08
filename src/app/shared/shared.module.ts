import{ NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatInputModule, MatCardModule, MatButtonModule, MatTooltipModule,
	MatDialogModule, MatProgressSpinnerModule, MatTableModule, MatProgressBarModule, MatSlideToggleModule,
	MatTabsModule, MatRadioModule, MatExpansionModule, MatSelectModule, MatSliderModule, MatAutocompleteModule,
	MatStepperModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatCheckboxModule
} from '@angular/material';

import { LoadingComponent } from "./loading.component";
import { ChartsModule } from "ng2-charts";
import { CKEditorModule } from "ng2-ckeditor";
import { MedicoService } from "../content/medico/medico.service";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ChartsModule,

		/* Angular Modules */
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatTooltipModule,
		MatDialogModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatProgressBarModule,
		MatSlideToggleModule,
		MatTabsModule,
		MatRadioModule,
		MatExpansionModule,
        MatSelectModule,
        MatSliderModule,
		MatAutocompleteModule,
		MatStepperModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCheckboxModule,
		/* END -- Angular Modules */

		/* CKEditor */
		CKEditorModule
	],
	declarations: [
		LoadingComponent,
	],
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
		MedicoService
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ChartsModule,

		/* Shared Components */
		LoadingComponent,
		/* END -- Shared Components */

		/* Angular Modules */
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatTooltipModule,
		MatDialogModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatProgressBarModule,
		MatSlideToggleModule,
		MatTabsModule,
		MatRadioModule,
		MatExpansionModule,
        MatSelectModule,
        MatSliderModule,
		MatAutocompleteModule,
		MatStepperModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCheckboxModule,
		/* END -- Angular Modules */

		/* CKEditor */
		CKEditorModule,
	]
})

export class SharedModule {}