# Æris static files
This repository is a pooling of statics files used by the _Æris templates_.

## Compatibility

- IE >= 10
- Webkit >= 20
- Gecko >= 30

## How to access to the content

### Development environment (local)

For easier developments of templates, you can simply run a static server:

```bash
$ npm install http-server -g
$ git clone https://github.com/vuzonp/aeris-static.git
$ cd ./aeris-static/dist/
$ http-server
```

The files are now accessibles from:
- http://0.0.0.0:8080/css/aeris.min.css
- http://0.0.0.0:8080/js/aeris.min.js

_You can obviously use Apache, Nginx or another HTTP servers, but this project use few npm dependencies: I indicate here a nodejs solution for more consistent logic._

### Production environment (online)

This repository is hosted directly on Github. You can access to the files from:
- https://vuzonp.github.io/aeris-static/dist/css/aeris.min.css
- https://vuzonp.github.io/aeris-static/dist/js/aeris.min.js

### Alternatives

You can also install it with __bower__:

```bash
$ bower install vuzonp/aeris-static
```
