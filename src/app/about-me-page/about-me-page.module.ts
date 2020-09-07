import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { UiToolsModule } from '../ui-tools/ui-tools.module';
import { AboutMeDateComponent } from './about-me-date/about-me-date.component';
import { AboutMeTypeComponent } from './about-me-type/about-me-type.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
	declarations: [AboutMeComponent, AboutMeDateComponent, AboutMeTypeComponent],
	imports: [CommonModule, UiToolsModule, MatSliderModule],
	exports: [],
})
export class AboutMePageModule {}
