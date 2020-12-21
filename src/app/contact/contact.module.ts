import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
	declarations: [ContactPageComponent, ContactFormComponent],
	imports: [
		CommonModule
	]
})
export class ContactModule { }
