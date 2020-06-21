import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TranslationsService {

	private translations: Record<string, string> = {};
	
	public constructor() { }

	public getTransation(text: string): string {
		return (this.translations[text]) ?
			this.translations[text] :
			undefined;
	}

	public setTranslation(text: string, translatedText: string): void {
		this.translations[text] = translatedText;
	}

	public deleteTranslation(text: string): void {
		delete this.translations[text];
	}
}
