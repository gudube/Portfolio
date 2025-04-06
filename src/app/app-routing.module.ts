import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TitlePageComponent } from './title-page/title-page.component';
import { AboutMeComponent } from './about-me-page/about-me/about-me.component';
import { PhotographyMenuComponent } from './photography-page/photography-menu/photography-menu.component';
// import { ContactPageComponent } from './contact/contact-page/contact-page.component';
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
	constructor(id: string, countryId: string, citySeo: string, countrySeo: string, photoMaxIndex: number, videoMaxIndex: number = 0) {
		this.path = 'photography/' + id;
		this.data = {
			seo: {
				title: `${citySeo} (${countrySeo}) Photos | Guilhem Dubois`,
				metaTags: [
					{ name: 'description', content: `Photos from my ${citySeo} trip in ${countrySeo}.` },
					{ property: 'og:title', content: `${citySeo} (${countrySeo}) Photos | Guilhem Dubois`},
					{ property: 'og:description', content: `Photos from my ${citySeo} trip in ${countrySeo}.` },
					{ property: 'og:image', content: `${environment.baseUrl}/assets/photography/${id}/menu.jpg`},
					{ property: 'og:url', content: `${environment.baseUrl}/photography/${id}` },
				]
			},
			personal: {
				id: id,
				titleId: 'photos.'+ id,
				subtitleId: 'photos.' + countryId,
				photoFileNames: [...Array(videoMaxIndex).keys()].map(x => `${id}-${("00" + (x+1)).slice(-3)}.mp4`).concat([...Array(photoMaxIndex).keys()].map(x => `${id}-${("00" + (x+1)).slice(-3)}.jpg`)),
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
		{ name: 'description', content: 'I\'m Guilhem Dubois, developer, software engineering graduate and travel lover. Learn more about my professional background and see some of my photographs here.' },
		{ property: 'og:title', content: 'Guilhem Dubois | Developer Portfolio' },
		{ property: 'og:description', content: 'I\'m Guilhem Dubois, developer, software engineering graduate and travel lover. Learn more about my professional background and see some of my photographs here.' },
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
					{ name: 'description', content: 'I\'m Guilhem Dubois, developer, software engineering graduate and travel lover. Learn more about my professional background and see some of my photographs here.' },
					{ property: 'og:title', content: 'Guilhem Dubois | About Me' },
					{ property: 'og:description', content: 'I\'m Guilhem Dubois, developer, software engineering graduate and travel lover. Learn more about my professional background and see some of my photographs here.' },
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
	new PhotographyRoute('triglav', 'slovenia', 'Triglav National Park', 'Slovenia', 31),
	new PhotographyRoute('azores', 'portugal', 'Azores', 'Portugal', 119),
	new PhotographyRoute('saint-petersburg', 'russia', 'Saint Petersburg', 'Russia', 45),
	new PhotographyRoute('bali', 'indonesia', 'Bali', 'Indonesia', 55, 2),
	new PhotographyRoute('jodipan', 'indonesia', 'Jodipan', 'Indonesia', 10),
	new PhotographyRoute('komodo', 'indonesia', 'Komodo', 'Indonesia', 17),
	new PhotographyRoute('bromo', 'indonesia', 'Bromo', 'Indonesia', 34, 1),
	new PhotographyRoute('sumatra', 'indonesia', 'Sumatra', 'Indonesia', 26),
	new PhotographyRoute('chinese-cities', 'china', 'Chinese cities', 'China', 85, 1),
	new PhotographyRoute('swiss-cities', 'switzerland', 'Swiss cities', 'Switzerland', 108),
	new PhotographyRoute('dubai', 'uae', 'Dubai', 'United Arab Emirates', 36, 3),
	new PhotographyRoute('new-york', 'united-states', 'New York', 'United States', 90, 2),
	new PhotographyRoute('capri', 'italy', 'Capri', 'Italy', 76),
	new PhotographyRoute('monte-titano', 'san-marino', 'Monte Titano', 'San Marino', 11),
	new PhotographyRoute('ljubljana', 'slovenia', 'Ljubljana', 'Slovenia', 20),
	new PhotographyRoute('cinque-terre', 'italy', 'Cinque Terre', 'Italy', 17),
	new PhotographyRoute('quintana-roo', 'mexico', 'Quintana Roo', 'Mexico', 71),
	new PhotographyRoute('lapland', 'sweden', 'Lapland', 'Sweden', 18),
	new PhotographyRoute('tallinn', 'estonia', 'Tallinn', 'Estonia', 17),
	new PhotographyRoute('berlin', 'germany', 'Berlin', 'Germany', 5),
	new PhotographyRoute('naples', 'italy', 'Naples', 'Italy', 13),
	new PhotographyRoute('italy-cities', 'italy', 'Italian cities', 'Italy', 36),
	new PhotographyRoute('stockholm', 'sweden', 'Stockholm', 'Sweden', 32),
	new PhotographyRoute('copenhagen', 'denmark', 'Copenhagen', 'Denmark', 11),
	// { path: 'contact-me', component: ContactPageComponent,
	// 	data: {
	// 		seo: {
	// 			title: 'Guilhem Dubois | Contact Me',
	// 			metaTags: [
	// 				{ name: 'description', content: 'I\'m Guilhem Dubois, developer, software engineering graduate and travel lover. Feel free to contact me here or through any of my social media!' },
	// 				{ property: 'og:title', content: 'Guilhem Dubois | Contact Me' },
	// 				{ property: 'og:description', content: 'I\'m Guilhem Dubois, developer, software engineering graduate and travel lover. Feel free to contact me here or through any of my social media!' },
	// 				{ property: 'og:image', content: environment.baseUrl + 'assets/presentation-image.jpg' },
	// 				{ property: 'og:url', content: environment.baseUrl + 'contact-me' },
	// 			]
	// 		},
	// 		personal: {
	// 			titleId: 'footer.contact',
	// 			level: 0
	// 		}
	// 	}
	// },
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
	imports: [RouterModule.forRoot(ROUTES, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
