import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographyMenuComponent } from './photography-menu/photography-menu.component';
import { UiToolsModule } from '../ui-tools/ui-tools.module';
import { AppRoutingModule } from '../app-routing.module';
import { PhotographyGridComponent } from './photography-grid/photography-grid.component';
import { FullImageViewerComponent } from './full-image-viewer/full-image-viewer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { PhotographyMainComponent } from './photography-main/photography-main.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { NgOptimizedImage } from '@angular/common';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@NgModule({
	declarations: [PhotographyMainComponent, PhotographyMenuComponent, PhotographyGridComponent, FullImageViewerComponent, VideoPlayerComponent],
	imports: [CommonModule, UiToolsModule, AppRoutingModule, MatProgressSpinnerModule, TranslateModule,
		NgOptimizedImage, VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule],
})
export class PhotographyPageModule {}
