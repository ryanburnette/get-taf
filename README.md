# [get-taf](https://github.com/ryanburnette/get-taf)

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/get-taf)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/get-taf)

Scrape TAF from AviationWeather.gov.

## Installation

```bash
npm install @ryanburnette/get-taf
```

## Usage

```js
var getTaf = require('@ryanburnette/get-taf');
(async function () {
  var taf = await getTaf(process.argv[2] || 'KSRQ');
  console.log(JSON.stringify(taf));
})();
```

Try the demo and pipe it to jq for easier reading.

```bash
node demo.js KSRQ | jq
```
