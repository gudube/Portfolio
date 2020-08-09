import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiToolsModule } from './ui-tools/ui-tools.module';
import { TitlePageComponent } from './title-page/title-page.component';
import { PhotographyPageModule } from './photography-page/photography-page.module';
import { AboutMePageModule } from './about-me-page/about-me-page.module';
import { ConfigService } from './config.service';

@NgModule({
	declarations: [AppComponent, TitlePageComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		UiToolsModule,
		PhotographyPageModule,
		AboutMePageModule,
	],
	providers: [{
		provide: APP_INITIALIZER,
		useFactory: ConfigurationServiceFactory,
		deps: [ConfigService],
		multi: true
	}],
	bootstrap: [AppComponent],
})
export class AppModule {}

export function ConfigurationServiceFactory(configService: ConfigService){
	return (): void => configService.loadPhotography();
}
