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
The `files` argument accepts globstar-style `**` patterns. The default `changefreq` is `daily`.
```sh
$ sitemap --prefix <url-prefix> [--changefreq <freq>] <files>
```

Example
-------
The command:
```sh
$ sitemap --prefix http://example.com/ --changefreq daily mysite/**/*.html
```
Outputs something like: 
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>http://example.com/2014/02/02/some-article.html</loc>
      <lastmod>2014-05-22T08:49:38.000Z</lastmod>
      <changefreq>daily</changefreq>
   </url>
   <url>
      <loc>http://example.com/2014/02/08/another-article.html</loc>
      <lastmod>2014-05-22T08:49:38.000Z</lastmod>
      <changefreq>daily</changefreq>
   </url>
   <url>
      <loc>http://example.com/index.html</loc>
      <lastmod>2014-05-22T08:49:38.000Z</lastmod>
      <changefreq>daily</changefreq>
   </url>
</urlset>
```
