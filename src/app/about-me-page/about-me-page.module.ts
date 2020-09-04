import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { UiToolsModule } from '../ui-tools/ui-tools.module';
import { AboutMeDateComponent } from './about-me-date/about-me-date.component';

@NgModule({
	declarations: [AboutMeComponent, AboutMeDateComponent],
	imports: [CommonModule, UiToolsModule],
	exports: [],
})
export class AboutMePageModule {}
