import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../../app-routing.module';

@Component({
	selector: 'app-back-button',
	templateUrl: './back-button.component.html',
	styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
	//@Input() public route = '';

	public opened = false;
	public currentRoute = '';
	public routes = ROUTES.filter(route => !route.data.personal.hidden);
	constructor(private router: Router) {}

	ngOnInit(): void {
		this.currentRoute = this.router.url;
	}
}
