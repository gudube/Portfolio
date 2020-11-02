import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-back-button',
	templateUrl: './back-button.component.html',
	styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
	@Input() public route = '';
	//todo: add input to make it static
	constructor() {}

	ngOnInit(): void {}
}
