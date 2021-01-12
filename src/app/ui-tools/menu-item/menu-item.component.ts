import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
	@Input() public readonly imgSrc: string;

	@Input() public readonly title: string;

	@Input() public readonly subtitle: string;

	@Input() public readonly route: string;

	@Input() public readonly smallItem: boolean = false;

	constructor() {}
}
