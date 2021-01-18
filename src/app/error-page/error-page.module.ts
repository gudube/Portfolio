import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMainComponent } from './error-main/error-main.component';
import { AppRoutingModule } from '../app-routing.module';
import { UiToolsModule } from '../ui-tools/ui-tools.module';

@NgModule({
	declarations: [ErrorMainComponent],
	imports: [
		CommonModule,
		AppRoutingModule,
		UiToolsModule
	]
})
export class ErrorPageModule { }
