// import { Component, OnInit } from '@angular/core';
// import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
// import { ContactService } from '../contact.service';
// import { ContactModel } from '../contact-model';
// import { TranslateService } from '@ngx-translate/core';

// @Component({
// 	selector: 'app-contact-page',
// 	templateUrl: './contact-page.component.html',
// 	styleUrls: ['./contact-page.component.scss']
// })
// export class ContactPageComponent implements OnInit {

// 	public FormData: UntypedFormGroup;
// 	public FullnameControl: UntypedFormControl;
// 	public EmailControl: UntypedFormControl;
// 	public MessageControl: UntypedFormControl;

// 	constructor(private builder: UntypedFormBuilder, private contactService: ContactService, private translate: TranslateService) { }

// 	ngOnInit(): void {
// 		this.FullnameControl = new UntypedFormControl('', [Validators.required]);
// 		this.EmailControl = new UntypedFormControl('', {validators: [Validators.compose([Validators.required, Validators.email])], updateOn:'blur' }, );
// 		this.MessageControl = new UntypedFormControl('', [Validators.required]);
// 		this.FormData = this.builder.group({
// 			Fullname: this.FullnameControl,
// 			Email: this.EmailControl,
// 			Message: this.MessageControl
// 		});
// 	}

// 	public onSubmit(formData: ContactModel): void {
// 		this.contactService.sendMail(formData)
// 			.subscribe(response => {
// 				location.href = 'https://mailthis.to/confirm';
// 			}, error => {
// 				// todo: show an error
// 			});
// 	}

// 	public switchLanguage(): void {
// 		const langs = this.translate.getLangs();
// 		const index = langs.findIndex(x => x === this.translate.currentLang);
// 		const newLang = langs[(index + 1) % langs.length];
// 		this.translate.use(newLang);
// 		localStorage.setItem('language', newLang);
// 	}
// }
