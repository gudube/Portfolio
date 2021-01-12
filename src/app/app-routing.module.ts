import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitlePageComponent } from './title-page/title-page.component';
import { AboutMeComponent } from './about-me-page/about-me/about-me.component';
import { PhotographyMenuComponent } from './photography-page/photography-menu/photography-menu.component';
import { PhotographyGridComponent } from './photography-page/photography-grid/photography-grid.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

const routes: Routes = [
	{ path: '', component: TitlePageComponent },
	{ path: 'about-me', component: AboutMeComponent },
	{ path: 'photography', component: PhotographyMenuComponent },
	{ path: 'photography/:albumId', component: PhotographyGridComponent },
	{ path: 'sheet-music-organizer', component: ProjectPageComponent },
	{ path: 'contact-me', component: ContactPageComponent }
	//add error path which would be path: '**'
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
