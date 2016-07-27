# laravel-elixir-bless

## Install

```bash
$ npm install laravel-elixir-bless --save-dev
```

## Usage

### Example `gulpfile.js`

```js
var elixir = require('laravel-elixir');
require('laravel-elixir-bless');

elixir(function(mix) {
    mix.bless();
});
```

### Advanced Example

```js
var elixir = require('laravel-elixir');
require('laravel-elixir-bless');

elixir(function(mix) {
    mix.bless('app.css', {
        imports: false,
        watch: './resources/less/*.less'
    });
});
```

# License

[MIT](/LICENSE)
