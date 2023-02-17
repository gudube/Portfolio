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
import { ProjectPageComponent } from './project-page/project-page.component';
import { SeoService } from './seo-service.service';
import { ErrorPageModule } from './error-page/error-page.module';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
	overrides = <any> {
		pinch: { enable: false },
		rotate: { enable: false },
		tap: { enable: false },
		doubletap: { enable: false },
		press: { enable: false },
		pan: { enable: false },
		swipe: { enable: true, direction: Hammer.DIRECTION_ALL },
	}
}

@NgModule({
	declarations: [AppComponent, TitlePageComponent, ProjectPageComponent],
	imports: [
	BrowserModule,
	AppRoutingModule,
	UiToolsModule,
	PhotographyPageModule,
	AboutMePageModule,
	ErrorPageModule,
	HammerModule,
	BrowserAnimationsModule,
	ContactModule,
	HttpClientModule,
	TranslateModule.forRoot({
		loader: {
		provide: TranslateLoader,
		useFactory: HttpLoaderFactory,
		deps: [HttpClient]
		},
		defaultLanguage: 'en'
		})
	],
	providers: [{
	provide: APP_INITIALIZER,
	useFactory: ConfigurationServiceFactory,
	deps: [PhotographyService],
	multi: true
	},
	{
	provide: HAMMER_GESTURE_CONFIG,
	useClass: HammerConfig
	},
	SeoService ],
	bootstrap: [AppComponent],
	})
export class AppModule {}

export function ConfigurationServiceFactory(photoService: PhotographyService){
	return (): void => photoService.loadAlbums();
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http);
}
