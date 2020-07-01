import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap, NO_ERRORS_SCHEMA } from '@angular/core';

import { BannerComponent } from './components/banner/banner.component';
import { createCustomElement } from '@angular/elements';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
	declarations: [
		BannerComponent,
		ModalComponent
	],
	imports: [
		BrowserModule
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	providers: [],
	entryComponents: [
		BannerComponent
	]
})
export class AppModule implements DoBootstrap {

	constructor(injector: Injector) {
		const customElement = createCustomElement(BannerComponent, {
			injector: injector
		});

		customElements.define('scania-banner', customElement);
	}

	public ngDoBootstrap(): void { }
}
