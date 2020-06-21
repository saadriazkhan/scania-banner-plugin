import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';

import { BannerComponent } from './components/banner/banner.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
	declarations: [
		BannerComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	entryComponents: [
		BannerComponent
	]
})
export class AppModule implements DoBootstrap {
	constructor(injector: Injector) {
		const custom = createCustomElement(BannerComponent, { injector: injector });
		customElements.define('scania-banner', custom);
	}

	public ngDoBootstrap(): void { }
}
