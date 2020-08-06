import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographyMenuComponent } from './photography-menu/photography-menu.component';
import { UiToolsModule } from '../ui-tools/ui-tools.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [PhotographyMenuComponent],
  imports: [
    CommonModule,
    UiToolsModule,
    AppRoutingModule
  ]
})
export class PhotographyPageModule { }
