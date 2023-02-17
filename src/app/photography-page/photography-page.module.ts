import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographyMenuComponent } from './photography-menu/photography-menu.component';
import { UiToolsModule } from '../ui-tools/ui-tools.module';
import { AppRoutingModule } from '../app-routing.module';
import { PhotographyGridComponent } from './photography-grid/photography-grid.component';
import { FullImageViewerComponent } from './full-image-viewer/full-image-viewer.component';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { PhotographyMainComponent } from './photography-main/photography-main.component';

@NgModule({
	declarations: [PhotographyMainComponent, PhotographyMenuComponent, PhotographyGridComponent, FullImageViewerComponent],
	imports: [CommonModule, UiToolsModule, AppRoutingModule, MatProgressSpinnerModule, TranslateModule],
})
export class PhotographyPageModule {}
