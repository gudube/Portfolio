import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TitlePageComponent } from './title-page/title-page.component';
import { AboutMeComponent } from './about-me-page/about-me/about-me.component';
import { PhotographyMenuComponent } from './photography-page/photography-menu/photography-menu.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { environment } from 'src/environments/environment';
import { ErrorMainComponent } from './error-page/error-main/error-main.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { PhotographyMainComponent } from './photography-page/photography-main/photography-main.component';

type TypedRoutes = TypedRoute[]

interface TypedRoute extends Route {
  data: RouteData;
}

interface RouteData {
	seo: SeoData,
	personal: PersonalData
}

interface SeoData {
	title: string,
	metaTags: {
		name?: string,
		property?: string,
		content: string
	}[],
}

export interface PersonalData {
	id?: string //fixed, id in url in english (e.g .com/photography/capri would be capri)
	titleId: string, //id in translation file for title (e.g. city)
	subtitleId?: string //id in translation file for subtitle (e.g. country)
	level: number, //for menu
	photoFileNames?: string[] //for photography
	hidden?: boolean //for menu
}

//todo: translate SEOs. That will also let me remove citySeo and countrySeo as they will be received from the locale using cityId and countryId
class PhotographyRoute implements TypedRoute {
	constructor(id: string, countryId: string, citySeo: string, countrySeo: string, photoFileNames: string[]) {
		this.path = 'photography/' + id;
		this.data = {
			seo: {
				title: `${citySeo} (${countrySeo}) Photos | Guilhem Dubois`,
				metaTags: [
					{ name: 'description', content: `Photos from my ${citySeo} trip in ${countrySeo}.` },
					{ property: 'og:title', content: `${citySeo} (${countrySeo}) Photos | Guilhem Dubois`},
					{ property: 'og:description', content: `Photos from my ${citySeo} trip in ${countrySeo}.` },
					{ property: 'og:image', content: `${environment.baseUrl}/assets/photography/${id}/${id}-menu.jpg`},
					{ property: 'og:url', content: `${environment.baseUrl}/photography/${id}` },
				]
			},
			personal: {
				id: id,
				titleId: 'photos.'+ id,
				subtitleId: 'photos.' + countryId,
				photoFileNames: photoFileNames,
				level: 2
			}
		};
	}
	path: string;
	component = PhotographyMainComponent;
	data: RouteData;
}

const defaultSeo: SeoData = {
	title: 'Guilhem Dubois | Developer Portfolio',
	metaTags: [
		{ name: 'description', content: 'I\'m Guilhem Dubois, developer, future software engineer and travel lover. Learn more about my professional background and see some of my photographs here.' },
		{ property: 'og:title', content: 'Guilhem Dubois | Developer Portfolio' },
		{ property: 'og:description', content: 'I\'m Guilhem Dubois, developer, future software engineer and travel lover. Learn more about my professional background and see some of my photographs here.' },
		{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
		{ property: 'og:url', content: environment.baseUrl + 'home' }
		//{ name: 'twitter:card', content: 'summary_large_image' },
	]
};

export const ROUTES: TypedRoutes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full',
		data: {
			seo: defaultSeo,
			personal: {
				titleId: 'home.title',
				level: 0,
				hidden: true
			}
		}
	},
	{ path: 'home', component: TitlePageComponent,
		data: {
			seo: defaultSeo,
			personal: {
				titleId: 'home.title',
				level: 0,
			}
		}
	}, //default data from index.html
	{ path: 'about-me', component: AboutMeComponent,
		data: {
			seo: {
				title: 'Guilhem Dubois | About Me',
				metaTags: [
					{ name: 'description', content: 'I\'m Guilhem Dubois, developer, future software engineer and travel lover. Learn more about my professional background and see some of my photographs here.' },
					{ property: 'og:title', content: 'Guilhem Dubois | About Me' },
					{ property: 'og:description', content: 'I\'m Guilhem Dubois, developer, future software engineer and travel lover. Learn more about my professional background and see some of my photographs here.' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
					{ property: 'og:url', content: environment.baseUrl + 'about-me' },
				]
			},
			personal: {
				titleId: 'home.about',
				level: 1,
			}
		}
	},
	{ path: 'project', component: ProjectPageComponent,
		data: {
			seo: {
				title: 'Sheet Music Organizer | Personal Project',
				metaTags: [
					{ name: 'description', content: 'Sheet Music Organizer is a music player that allows you to follow along the sheet music. It\'s a personal project still in progress by Guilhem Dubois.'},
					{ property: 'og:title', content: 'Sheet Music Organizer | Personal Project' },
					{ property: 'og:description', content: 'Sheet Music Organizer is a music player that allows you to follow along the sheet music. It\'s a personal project still in progress by Guilhem Dubois.' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' }, // todo: change the image
					{ property: 'og:url', content: environment.baseUrl + 'project' },
				]
			},
			personal: {
				titleId: 'home.project',
				level: 1,
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
					{ property: 'og:description', content: 'When I\'m not coding, I\'m often traveling. Rain in the misty forests of slovenia, hot sunshine in Italy... No matter the weather, I just grab my backpack and I store memories in pictures.' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
					{ property: 'og:url', content: environment.baseUrl + 'photography' },
				]
			},
			personal: {
				titleId: 'home.photo',
				level: 1,
			}
		}
	},
	new PhotographyRoute('triglav', 'slovenia', 'Triglav National Park', 'Slovenia', ['triglav-001.jpg', 'triglav-002.jpg', 'triglav-003.jpg', 'triglav-004.jpg', 'triglav-005.jpg', 'triglav-006.jpg', 'triglav-007.jpg', 'triglav-008.jpg', 'triglav-009.jpg', 'triglav-010.jpg', 'triglav-011.jpg', 'triglav-012.jpg', 'triglav-013.jpg', 'triglav-014.jpg', 'triglav-015.jpg', 'triglav-016.jpg', 'triglav-017.jpg', 'triglav-018.jpg', 'triglav-019.jpg', 'triglav-020.jpg', 'triglav-021.jpg', 'triglav-022.jpg', 'triglav-023.jpg', 'triglav-024.jpg', 'triglav-025.jpg', 'triglav-026.jpg', 'triglav-027.jpg', 'triglav-028.jpg', 'triglav-029.jpg', 'triglav-030.jpg', 'triglav-031.jpg']),
	new PhotographyRoute('capri', 'italy', 'Capri', 'Italy', ['capri-001.jpg', 'capri-002.jpg', 'capri-003.jpg', 'capri-004.jpg', 'capri-005.jpg', 'capri-006.jpg', 'capri-007.jpg', 'capri-008.jpg', 'capri-009.jpg', 'capri-010.jpg', 'capri-011.jpg', 'capri-012.jpg', 'capri-013.jpg', 'capri-014.jpg', 'capri-015.jpg', 'capri-016.jpg', 'capri-017.jpg', 'capri-018.jpg', 'capri-019.jpg', 'capri-020.jpg', 'capri-021.jpg', 'capri-022.jpg', 'capri-023.jpg', 'capri-024.jpg', 'capri-025.jpg', 'capri-026.jpg', 'capri-027.jpg', 'capri-028.jpg', 'capri-029.jpg', 'capri-030.jpg', 'capri-031.jpg', 'capri-032.jpg', 'capri-033.jpg', 'capri-034.jpg', 'capri-035.jpg', 'capri-036.jpg', 'capri-037.jpg', 'capri-038.jpg', 'capri-039.jpg', 'capri-040.jpg', 'capri-041.jpg', 'capri-042.jpg', 'capri-043.jpg', 'capri-044.jpg', 'capri-045.jpg', 'capri-046.jpg', 'capri-047.jpg', 'capri-048.jpg', 'capri-049.jpg', 'capri-050.jpg', 'capri-051.jpg', 'capri-052.jpg', 'capri-053.jpg', 'capri-054.jpg', 'capri-055.jpg', 'capri-056.jpg', 'capri-057.jpg', 'capri-058.jpg', 'capri-059.jpg', 'capri-060.jpg', 'capri-061.jpg', 'capri-062.jpg', 'capri-063.jpg', 'capri-064.jpg', 'capri-065.jpg', 'capri-066.jpg', 'capri-067.jpg', 'capri-068.jpg', 'capri-069.jpg', 'capri-070.jpg', 'capri-071.jpg', 'capri-072.jpg', 'capri-073.jpg', 'capri-074.jpg', 'capri-075.jpg', 'capri-076.jpg']),
	new PhotographyRoute('saint-petersburg', 'russia', 'Saint Petersburg', 'Russia', ['saint-petersburg-001.jpg', 'saint-petersburg-002.jpg', 'saint-petersburg-003.jpg', 'saint-petersburg-004.jpg', 'saint-petersburg-005.jpg', 'saint-petersburg-006.jpg', 'saint-petersburg-007.jpg', 'saint-petersburg-008.jpg', 'saint-petersburg-009.jpg', 'saint-petersburg-010.jpg', 'saint-petersburg-011.jpg', 'saint-petersburg-012.jpg', 'saint-petersburg-013.jpg', 'saint-petersburg-014.jpg', 'saint-petersburg-015.jpg', 'saint-petersburg-016.jpg', 'saint-petersburg-017.jpg', 'saint-petersburg-018.jpg', 'saint-petersburg-019.jpg', 'saint-petersburg-020.jpg', 'saint-petersburg-021.jpg', 'saint-petersburg-022.jpg', 'saint-petersburg-023.jpg', 'saint-petersburg-024.jpg', 'saint-petersburg-025.jpg', 'saint-petersburg-026.jpg', 'saint-petersburg-027.jpg', 'saint-petersburg-028.jpg', 'saint-petersburg-029.jpg', 'saint-petersburg-030.jpg', 'saint-petersburg-031.jpg', 'saint-petersburg-032.jpg', 'saint-petersburg-033.jpg', 'saint-petersburg-034.jpg', 'saint-petersburg-035.jpg', 'saint-petersburg-036.jpg', 'saint-petersburg-037.jpg', 'saint-petersburg-038.jpg', 'saint-petersburg-039.jpg', 'saint-petersburg-040.jpg', 'saint-petersburg-041.jpg', 'saint-petersburg-042.jpg', 'saint-petersburg-043.jpg', 'saint-petersburg-044.jpg', 'saint-petersburg-045.jpg']),
	new PhotographyRoute('ljubljana', 'slovenia', 'Ljubljana', 'Slovenia', ['ljubljana-001.jpg', 'ljubljana-002.jpg', 'ljubljana-003.jpg', 'ljubljana-004.jpg', 'ljubljana-005.jpg', 'ljubljana-006.jpg', 'ljubljana-007.jpg', 'ljubljana-008.jpg', 'ljubljana-009.jpg', 'ljubljana-010.jpg', 'ljubljana-011.jpg', 'ljubljana-012.jpg', 'ljubljana-013.jpg', 'ljubljana-014.jpg', 'ljubljana-015.jpg', 'ljubljana-016.jpg', 'ljubljana-017.jpg', 'ljubljana-018.jpg', 'ljubljana-019.jpg', 'ljubljana-020.jpg']),
	new PhotographyRoute('cinque-terre', 'italy', 'Cinque Terre', 'Italy', ['cinque-terre-001.jpg', 'cinque-terre-002.jpg', 'cinque-terre-003.jpg', 'cinque-terre-004.jpg', 'cinque-terre-005.jpg', 'cinque-terre-006.jpg', 'cinque-terre-007.jpg', 'cinque-terre-008.jpg', 'cinque-terre-009.jpg', 'cinque-terre-010.jpg', 'cinque-terre-011.jpg', 'cinque-terre-012.jpg', 'cinque-terre-013.jpg', 'cinque-terre-014.jpg', 'cinque-terre-015.jpg', 'cinque-terre-016.jpg', 'cinque-terre-017.jpg']),
	new PhotographyRoute('lapland', 'lapland', 'Abisko', 'Lapland', ['lapland-001.jpg', 'lapland-002.jpg', 'lapland-003.jpg', 'lapland-004.jpg', 'lapland-005.jpg', 'lapland-006.jpg', 'lapland-007.jpg', 'lapland-008.jpg', 'lapland-009.jpg', 'lapland-010.jpg', 'lapland-011.jpg', 'lapland-012.jpg', 'lapland-013.jpg', 'lapland-014.jpg', 'lapland-015.jpg', 'lapland-016.jpg', 'lapland-017.jpg', 'lapland-018.jpg']),
	new PhotographyRoute('tallinn', 'estonia', 'Tallinn', 'Estonia', ['tallinn-001.jpg', 'tallinn-002.jpg', 'tallinn-003.jpg', 'tallinn-004.jpg', 'tallinn-005.jpg', 'tallinn-006.jpg', 'tallinn-007.jpg', 'tallinn-008.jpg', 'tallinn-009.jpg', 'tallinn-010.jpg', 'tallinn-011.jpg', 'tallinn-012.jpg', 'tallinn-013.jpg', 'tallinn-014.jpg', 'tallinn-015.jpg', 'tallinn-016.jpg', 'tallinn-017.jpg']),
	new PhotographyRoute('berlin', 'germany', 'Berlin', 'Germany', ['berlin-001.jpg', 'berlin-002.jpg', 'berlin-003.jpg', 'berlin-004.jpg', 'berlin-005.jpg']),
	new PhotographyRoute('naples', 'italy', 'Naples', 'Italy', ['naples-001.jpg', 'naples-002.jpg', 'naples-003.jpg', 'naples-004.jpg', 'naples-005.jpg', 'naples-006.jpg', 'naples-007.jpg', 'naples-008.jpg', 'naples-009.jpg', 'naples-010.jpg', 'naples-011.jpg', 'naples-012.jpg', 'naples-013.jpg']),
	new PhotographyRoute('stockholm', 'sweden', 'Stockholm', 'Sweden', ['stockholm-001.jpg', 'stockholm-002.jpg', 'stockholm-003.jpg', 'stockholm-004.jpg', 'stockholm-005.jpg', 'stockholm-006.jpg', 'stockholm-007.jpg', 'stockholm-008.jpg', 'stockholm-009.jpg', 'stockholm-010.jpg', 'stockholm-011.jpg', 'stockholm-012.jpg', 'stockholm-013.jpg', 'stockholm-014.jpg', 'stockholm-015.jpg', 'stockholm-016.jpg', 'stockholm-017.jpg', 'stockholm-018.jpg', 'stockholm-019.jpg', 'stockholm-020.jpg', 'stockholm-021.jpg', 'stockholm-022.jpg', 'stockholm-023.jpg', 'stockholm-024.jpg', 'stockholm-025.jpg', 'stockholm-026.jpg', 'stockholm-027.jpg', 'stockholm-028.jpg', 'stockholm-029.jpg', 'stockholm-030.jpg', 'stockholm-031.jpg', 'stockholm-032.jpg']),
	new PhotographyRoute('copenhagen', 'denmark', 'Copenhagen', 'Denmark', ['copenhagen-001.jpg', 'copenhagen-002.jpg', 'copenhagen-003.jpg', 'copenhagen-004.jpg', 'copenhagen-005.jpg', 'copenhagen-006.jpg', 'copenhagen-007.jpg', 'copenhagen-008.jpg', 'copenhagen-009.jpg', 'copenhagen-010.jpg', 'copenhagen-011.jpg']),
	// { path: 'sheet-music-organizer', component: ProjectPageComponent,
	// 	data: {
	// 		seo: {
	// 			title: 'Sheet Music Organizer | Free Player & Learning Tool',
	// 			metaTags: [
	// 				{ name: 'description', content: 'Sheet Music Organizer is a free software to sync each score / tablature to its music and help musician play along. It also helps organizing sheet music files.' },
	// 				{ property: 'og:title', content: 'Sheet Music Organizer | Free Player & Learning Tool' },
	// 				{ property: 'og:description', content: 'Sheet Music Organizer is a free software to sync each score / tablature to its music and help musician play along. It also helps organizing sheet music files.' },
	// 				{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
	// 				{ property: 'og:url', content: environment.baseUrl + 'sheet-music-organizer' },
	// 				//{ name: 'twitter:card', content: 'summary_large_image' },
	// 			]
	// 		}
	// 	}
	// },
	{ path: 'contact-me', component: ContactPageComponent,
		data: {
			seo: {
				title: 'Guilhem Dubois | Contact Me',
				metaTags: [
					{ name: 'description', content: 'I\'m Guilhem Dubois, developer, future software engineer and travel lover. Feel free to contact me here or through any of my social media!' },
					{ property: 'og:title', content: 'Guilhem Dubois | Contact Me' },
					{ property: 'og:description', content: 'I\'m Guilhem Dubois, developer, future software engineer and travel lover. Feel free to contact me here or through any of my social media!' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
					{ property: 'og:url', content: environment.baseUrl + 'contact-me' },
					//{ name: 'twitter:card', content: 'summary_large_image' },
				]
			},
			personal: {
				titleId: 'footer.contact',
				level: 0
			}
		}
	},
	{ path: '**', component: ErrorMainComponent,
		data: {
			seo: {
				title: 'Invalid Page | Guilhem Dubois',
				metaTags: [
					{ name: 'description', content: 'Hmmm, this page doesn\'t seem to exist.' },
					{ property: 'og:title', content: 'Invalid Page | Guilhem Dubois' },
					{ property: 'og:description', content: 'Hmmm, this page doesn\'t seem to exist.' },
					{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
					{ property: 'og:url', content: environment.baseUrl + 'error' },
				]
			},
			personal: {
				titleId: 'Invalid Page',
				level: 0,
				hidden: true
			}
		}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
