import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-project-page',
	templateUrl: './project-page.component.html',
	styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

	public libraryView = true;
	constructor() { }

	ngOnInit(): void {
	}

	public scrollToBottom(element: HTMLElement): void {
		// window.scrollTo({top: element., behavior: 'smooth'});
		// element.scrollIntoView({behavior: 'smooth', block: 'start'});

		const y = element.getBoundingClientRect().bottom + window.pageYOffset - 50;
		window.scrollTo({top: y, behavior: 'smooth'});
	} 

}
