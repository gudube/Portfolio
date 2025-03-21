// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { ContactModel } from './contact-model';

// @Injectable({
// 	providedIn: 'root',
// })
// export class ContactService {
// 	private api = 'https://mailthis.to/guilhemdubois';

// 	constructor(private httpClient: HttpClient) { }

// 	public sendMail(input: ContactModel): Observable<string> {
// 		return this.httpClient.post(this.api, input, {responseType: 'text'}).pipe(
// 			map(
// 				(response) => {
// 					if (response) {
// 						return response;
// 					}
// 				},
// 				(error: any) => {
// 					return error; //todo: handle error (show it to the user)
// 				}
// 			)
// 		);
// 	}
// }
