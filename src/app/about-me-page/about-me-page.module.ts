import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { UiToolsModule } from '../ui-tools/ui-tools.module';
import { AboutMeDateComponent } from './about-me-date/about-me-date.component';
import { AboutMeTypeComponent } from './about-me-type/about-me-type.component';
import { MatSliderModule } from '@angular/material/slider';
import { AboutMeMainComponent } from './about-me-main/about-me-main.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [AboutMeComponent, AboutMeDateComponent, AboutMeTypeComponent, AboutMeMainComponent],
	imports: [CommonModule, UiToolsModule, MatSliderModule, AppRoutingModule],
	exports: [],
})
export class AboutMePageModule {}
