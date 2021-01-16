import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitlePageComponent } from './title-page/title-page.component';
import { AboutMeComponent } from './about-me-page/about-me/about-me.component';
import { PhotographyMenuComponent } from './photography-page/photography-menu/photography-menu.component';
import { PhotographyGridComponent } from './photography-page/photography-grid/photography-grid.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { environment } from 'src/environments/environment';
import { ErrorMainComponent } from './error-page/error-main/error-main.component';

const routes: Routes = [
	{ path: '', redirectTo:'home', pathMatch:'full'},
	{ path: 'home', component: TitlePageComponent,
		data: {
			seo: {
				title: 'Guilhem Dubois | Developer Portfolio',
				metaTags: [
					{ name: 'description', content: 'I\'m Guilhem Dubois, developper, future software engineer and travel lover. Learn more about my professional background and see some of my photographs here.' },
					{ property: 'og:title', content: 'Guilhem Dubois | Developer Portfolio' },
					{ proprety: 'og:description', content: 'I\'m Guilhem Dubois, developper, future software engineer and travel lover. Learn more about my professional background and see some of my photographs here.' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
					{ property: 'og:url', content: environment.baseUrl + 'home' }
					//{ name: 'twitter:card', content: 'summary_large_image' },
				]
			}
		}
	}, //default data from index.html
	{ path: 'about-me', component: AboutMeComponent,
		data: {
			seo: {
				title: 'Guilhem Dubois | About Me',
				metaTags: [
					{ name: 'description', content: 'I\'m Guilhem Dubois, developper, future software engineer and travel lover. Learn more about my professional background and see some of my photographs here.' },
					{ property: 'og:title', content: 'Guilhem Dubois | About Me' },
					{ proprety: 'og:description', content: 'I\'m Guilhem Dubois, developper, future software engineer and travel lover. Learn more about my professional background and see some of my photographs here.' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
					{ property: 'og:url', content: environment.baseUrl + 'about-me' },
					//{ name: 'twitter:card', content: 'summary_large_image' },
				]
			}
		}
	},
	{ path: 'photography', component: PhotographyMenuComponent,
		data: {
			seo: {
				title: 'Travel Photography And Other Memories | Guilhem Dubois',
				metaTags: [
					{ name: 'description', content: 'When I\'m not coding, I\'m often traveling. Rain in the misty forests of slovenia, hot sunshine in Italy... No matter the weather, I just grab my backpack and I store memories in pictures.' },
					{ property: 'og:title', content: 'Travel Photography And Other Memories | Guilhem Dubois' },
					{ proprety: 'og:description', content: 'When I\'m not coding, I\'m often traveling. Rain in the misty forests of slovenia, hot sunshine in Italy... No matter the weather, I just grab my backpack and I store memories in pictures.' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
					{ property: 'og:url', content: environment.baseUrl + 'photography' },
					//{ name: 'twitter:card', content: 'summary_large_image' },
				]
			}
		}
	},
	{ path: 'photography/:albumId', component: PhotographyGridComponent,
		data: {
			seo: {
				title: 'Travel Photography And Other Memories | Guilhem Dubois',
				metaTags: [
					{ name: 'description', content: 'When I\'m not coding, I\'m often traveling. Rain in the misty forests of slovenia, hot sunshine in Italy... No matter the weather, I just grab my backpack and I store memories in pictures.' },
					{ property: 'og:title', content: 'Travel Photography And Other Memories | Guilhem Dubois' },
					{ proprety: 'og:description', content: 'When I\'m not coding, I\'m often traveling. Rain in the misty forests of slovenia, hot sunshine in Italy... No matter the weather, I just grab my backpack and I store memories in pictures.' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
					{ property: 'og:url', content: environment.baseUrl + 'photography' },
					//{ name: 'twitter:card', content: 'summary_large_image' },
				]
			}
		}
	},
	{ path: 'sheet-music-organizer', component: ProjectPageComponent,
		data: {
			seo: {
				title: 'Sheet Music Organizer | Free Player & Learning Tool',
				metaTags: [
					{ name: 'description', content: 'Sheet Music Organizer is a free software to sync each score / tablature to its music and help musician play along. It also helps organizing sheet music files.' },
					{ property: 'og:title', content: 'Sheet Music Organizer | Free Player & Learning Tool' },
					{ proprety: 'og:description', content: 'Sheet Music Organizer is a free software to sync each score / tablature to its music and help musician play along. It also helps organizing sheet music files.' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
					{ property: 'og:url', content: environment.baseUrl + 'sheet-music-organizer' },
					//{ name: 'twitter:card', content: 'summary_large_image' },
				]
			}
		}
	},
	{ path: 'contact-me', component: ContactPageComponent,
		data: {
			seo: {
				title: 'Guilhem Dubois | Contact Me',
				metaTags: [
					{ name: 'description', content: 'I\'m Guilhem Dubois, developper, future software engineer and travel lover. Feel free to contact me here or through any of my social media!' },
					{ property: 'og:title', content: 'Guilhem Dubois | Contact Me' },
					{ proprety: 'og:description', content: 'I\'m Guilhem Dubois, developper, future software engineer and travel lover. Feel free to contact me here or through any of my social media!' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
					{ property: 'og:url', content: environment.baseUrl + 'contact-me' },
					//{ name: 'twitter:card', content: 'summary_large_image' },
				]
			}
		}
	},
	{ path: '**', component: ErrorMainComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
