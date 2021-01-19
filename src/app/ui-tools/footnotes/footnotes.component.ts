import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-footnotes',
	templateUrl: './footnotes.component.html',
	styleUrls: ['./footnotes.component.scss']
})
export class FootnotesComponent {

	constructor(public location: Location) { }

}
