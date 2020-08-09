import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitlePageComponent } from './title-page/title-page.component';
import { AboutMeComponent } from './about-me-page/about-me/about-me.component';
import { PhotographyMenuComponent } from './photography-page/photography-menu/photography-menu.component';
import { PhotographyGridComponent } from './photography-page/photography-grid/photography-grid.component';

const routes: Routes = [
	{ path: '', component: TitlePageComponent },
	{ path: 'about-me', component: AboutMeComponent },
	{ path: 'photography', component: PhotographyMenuComponent },
	{ path: 'photography/:albumId', component: PhotographyGridComponent },
	//add error path which would be path: '**'
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
