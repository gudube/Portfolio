import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { UiToolsModule } from '../ui-tools/ui-tools.module';

@NgModule({
	declarations: [AboutMeComponent],
	imports: [CommonModule, UiToolsModule],
	exports: [],
})
export class AboutMePageModule {}
