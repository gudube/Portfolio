import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MatSlider } from '@angular/material/slider';

@Component({
	selector: 'app-about-me-date',
	templateUrl: './about-me-date.component.html',
	styleUrls: ['./about-me-date.component.scss']
})
export class AboutMeDateComponent {
	@ViewChild('container') container: ElementRef;
	@ViewChild('dateSlider') slider: MatSlider;

	@ViewChild('2019') container2019: ElementRef;
	@ViewChild('2018') container2018: ElementRef;
	@ViewChild('2017') container2017: ElementRef;
	@ViewChild('2016') container2016: ElementRef;


	public sliderValue = 1;
	public labelPos = 0;
	public disabled = true;
	public labelYear = '20';

	constructor() { }

	@HostListener('window:scroll', ['$event'])
	private updateSliderPos() {
		const positionPx = window.pageYOffset - this.container.nativeElement.offsetTop;
		if(positionPx < 0){
			this.sliderValue = 1;
			this.labelPos = 0;
			this.disabled = true;
			this.labelYear = '20';
			return;
		}

		const fullHeight = this.container.nativeElement.scrollHeight;
		const percentage = positionPx / fullHeight;
		this.sliderValue = 1 - percentage;
		this.labelPos = percentage * this.slider._elementRef.nativeElement.scrollHeight;
		this.disabled = false;

		if(window.pageYOffset < this.container2019.nativeElement.offsetTop)
			this.labelYear = '20';
		else if(window.pageYOffset < this.container2018.nativeElement.offsetTop)
			this.labelYear = '19';
		else if(window.pageYOffset < this.container2017.nativeElement.offsetTop)
			this.labelYear = '18';
		else if(window.pageYOffset < this.container2016.nativeElement.offsetTop)
			this.labelYear = '17';
		else
			this.labelYear = '16';
	}
	public updateScrollPos(value: number): void {
		const fullHeight = this.container.nativeElement.scrollHeight;
		const positionPx = (1-value) * fullHeight + this.container.nativeElement.offsetTop;
		window.scrollTo(0, positionPx);
	}
}
