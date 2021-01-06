import { Component } from '@angular/core';

enum AboutType { aboutMe, byDate, byCategory }

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {

	public aboutTypes = AboutType;
	public typeShown = AboutType.aboutMe;

	constructor() {}
}
