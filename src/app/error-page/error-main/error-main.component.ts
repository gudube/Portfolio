import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
	selector: 'app-error-main',
	templateUrl: './error-main.component.html',
	styleUrls: ['./error-main.component.scss']
})
export class ErrorMainComponent implements OnInit {

	constructor(private meta: Meta) {
		meta.addTag({ name: 'robots', content: 'noindex' });
	}

	ngOnInit(): void {
	}

}
