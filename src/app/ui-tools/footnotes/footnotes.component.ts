import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-footnotes',
	templateUrl: './footnotes.component.html',
	styleUrls: ['./footnotes.component.scss']
})
export class FootnotesComponent {

	constructor(public location: Location, private translate: TranslateService) { }

	public switchLanguage(): void {
		const langs = this.translate.getLangs();
		const index = langs.findIndex(x => x === this.translate.currentLang);
		const newLang = langs[(index + 1) % langs.length];
		this.translate.use(newLang);
		localStorage.setItem('language', newLang);
	}
}
