import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../../app-routing.module';

@Component({
	selector: 'app-back-button',
	templateUrl: './back-button.component.html',
	styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
	//@Input() public route = '';
	@Input() public readonly light: boolean = false;

	public opened = false;
	public currentRoute = '';
	public routes = ROUTES.filter(route => !route.data.personal.hidden);
	public showGoToTop = false;
	constructor(private router: Router) {}

	ngOnInit(): void {
		this.currentRoute = this.router.url;
	}

	@HostListener('window:scroll', [])
	private onWindowScroll(): void {
		const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		this.showGoToTop = currentScroll > 800;
	}

	public scrollToTop(): void {
		const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (currentScroll > 0) {
			window.scrollTo({top: 0, behavior: 'smooth'});
			//window.scrollTo(0, currentScroll - (currentScroll / 8));
		}
	}
}
