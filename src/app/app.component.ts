import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoService } from './seo-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Guilhem Dubois Portfolio';

	constructor(private router: Router, private activatedRoute: ActivatedRoute, private seoService: SeoService){

	}

	ngOnInit(): void {
		this.router.events.pipe(
			filter(e => e instanceof NavigationEnd),
			map(e => this.activatedRoute),
			map((route) => {
				while (route.firstChild) route = route.firstChild;
				return route;
			}),
			filter((route) => route.outlet === 'primary'),
			mergeMap((route) => route.data),
		).subscribe(data => {
			if(data){
				const seoData = data['seo'];
				if(seoData){
					this.seoService.updateTitle(seoData['title']);
					this.seoService.updateMetaTags(seoData['metaTags']);
				}
			}
		});
	}

}
