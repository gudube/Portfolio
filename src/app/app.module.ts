import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiToolsModule } from './ui-tools/ui-tools.module';
import { TitlePageComponent } from './title-page/title-page.component';
import { PhotographyPageModule } from './photography-page/photography-page.module';
import { AboutMePageModule } from './about-me-page/about-me-page.module';
import { ContactModule } from './contact/contact.module';
import { PhotographyService } from './photography-page/photography.service';
import * as Hammer from 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
	overrides = <any> {
		pinch: { enable: false },
		rotate: { enable: false },
		tap: { enable: false },
		doubletap: { enable: false },
		press: { enable: false },
		pan: { enable: false },
		swipe: { enable: true, direction: Hammer.DIRECTION_HORIZONTAL },
	}
}

@NgModule({
	declarations: [AppComponent, TitlePageComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		UiToolsModule,
		PhotographyPageModule,
		AboutMePageModule,
		HammerModule,
		BrowserAnimationsModule,
		ContactModule
	],
	providers: [{
		provide: APP_INITIALIZER,
		useFactory: ConfigurationServiceFactory,
		deps: [PhotographyService],
		multi: true
	}, {
		provide: HAMMER_GESTURE_CONFIG,
		useClass: HammerConfig
	}],
	bootstrap: [AppComponent],
})
export class AppModule {}

export function ConfigurationServiceFactory(photoService: PhotographyService){
	return (): void => photoService.loadAlbums();
}
