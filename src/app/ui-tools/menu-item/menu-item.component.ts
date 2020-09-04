import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
	@Input() public readonly imgSrc: string;

	@Input() public readonly title: string;

	@Input() public readonly route: string;

	//TODO [1]: leave text white when on mobile?
	//TODO [2]: add subtitle functionality (used for photography section)
	constructor() {}
}
