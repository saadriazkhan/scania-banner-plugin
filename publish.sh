#!/bin/sh
ng build scania-plugin --prod --output-hashing=none && cat dist/scania-plugin/runtime-es5.js dist/scania-plugin/polyfills-es5.js  dist/scania-plugin/main-es5.js > scania-banner-plugin.js