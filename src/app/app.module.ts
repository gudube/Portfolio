import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiToolsModule } from './ui-tools/ui-tools.module';
import { TitlePageComponent } from './title-page/title-page.component';
import { PhotographyPageModule } from './photography-page/photography-page.module';
import { AboutMePageModule } from './about-me-page/about-me-page.module';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiToolsModule,
    PhotographyPageModule,
    AboutMePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
