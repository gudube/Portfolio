import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-footnotes',
	templateUrl: './footnotes.component.html',
	styleUrls: ['./footnotes.component.scss']
})
export class FootnotesComponent {

	@Input() public readonly light: boolean = false;

	constructor(public location: Location) { }
}
