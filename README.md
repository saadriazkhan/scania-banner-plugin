# Scania Banner Plugin

Clone the repo from `github link here` and cd into the directory.

`sudo npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

  

## Build plugin through Shell script

Run `publish.sh` shell script

This will consolidate the angular production generated files to one single javascript file -- so that it can be later imported into any frontend as an external web component (widget).

The file name generated from production build will be `scania-banner-plugin.js`.

## To insert the widget  

- Insert the tag `<scania-banner id="scania-banner"></scania-banner>` at the place where you want the widget to be used.
- On the next line add `<script src="linktorepo/scania-banner-plugin.js"></script>`.
- In the `js` file, get the web component element by `document.getElementById('scania-banner')` and give the configurations to set the `bannerconfiguration` attribute of this element by `setAttribute('bannerconfiguration', JSON.stringify(webElementConfiguration))`. 
- Configurations map of `webElementConfiguration` is as follows

```
webElementConfiguration  = {
	type: 'action', // can be 'greeting', 'action', 'warning', 'danger'
	isEnabled: true,
	label: '<some label>',
	content: '<some content>', // optional
	imageUrl:'<some-image-url>', // optional
	videoUrl: '<some-video-url>', // optional
	action: {
		text: '<some-action-button-text>',
		url: '<url-if needed>' // optional
	},
	startDateTime: '<startDateTimeStamp>', // optional
	endDateTime: '<endDateTimeStamp>', // optional
	credentials: { // optional aws credentials to translate the text to another language 
		clientId: '',
		clientSecret: '',
	},
	translateToLanguage: '<language>' // optional
}
```