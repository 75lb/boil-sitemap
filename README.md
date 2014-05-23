[![view on npm](http://img.shields.io/npm/v/boil-sitemap.svg)](https://www.npmjs.org/package/boil-sitemap)
[![npm module downloads per month](http://img.shields.io/npm/dm/boil-sitemap.svg)](https://www.npmjs.org/package/boil-sitemap)
[![Dependency Status](https://david-dm.org/75lb/boil-sitemap.svg)](https://david-dm.org/75lb/boil-sitemap)
![Analytics](https://ga-beacon.appspot.com/UA-27725889-34/boil-sitemap/README.md?pixel)

boil-sitemap
============
Command-line tool to generate a sitemap.xml from static files. 

Install
-------
```sh
$ npm install -g boil-sitemap
```

Usage
-----
```sh
$ sitemap [--prefix <url-prefix>] <files>
```

Example
-------
The command:
```sh
$ sitemap --prefix http://example.com/ mysite/**/*.html
```
Outputs something like: 
```
```
