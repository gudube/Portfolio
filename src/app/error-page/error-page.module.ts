import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMainComponent } from './error-main/error-main.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ErrorMainComponent],
  imports: [
		CommonModule,
		AppRoutingModule
  ]
})
export class ErrorPageModule { }
