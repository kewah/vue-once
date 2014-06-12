# vue-once [![Build Status](https://travis-ci.org/kewah/vue-once.svg?branch=master)](https://travis-ci.org/kewah/vue-once)

[Vue.js](https://github.com/yyx990803/vue) directive.  
Adds an event listener that will be invoked a single time.

## Install

With Component(1):

```bash
$ component install kewah/vue-once
```

With [npm](http://npmjs.org) do:

```bash
$ npm install vue-once --save
```

## Usage

```js
var Vue = require('vue');
var vueOnce = require('vue-once');
Vue.use(vueOnce);
```

```html
<div v-once="click: onClick"></div>
```

## License

MIT
