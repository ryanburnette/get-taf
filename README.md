# @ryanburnette/get-taf

Get a TAF as an object from AviationWeather.gov.

## Usage

```js
var getTaf = require('@ryanburnette/get-taf');

getTaf('KATL').then(function(taf) {
  console.log(taf);
});
```
