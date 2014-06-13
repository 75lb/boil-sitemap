#!/usr/bin/env node
"use strict";
var mfs = require("more-fs"),
    path = require("path"),
    boil = require("boil-js"),
    cliArgs = require("command-line-args");

var argv = cliArgs([
    { name: "files", type: Array, defaultOption: true },
    { name: "prefix", type: String },
    { name: "changefreq", type: String, value: "daily" }
]).parse();
    
var boilHbs = mfs.read(path.join(__dirname, "..", "boil.hbs"));
boilHbs = boil.render(boilHbs, { 
    files: argv.files, 
    prefix: argv.prefix,
    changefreq: argv.changefreq,
    templatePath: path.join(__dirname, "..", "template.hbs")
});
var config = JSON.parse(boilHbs);
boil.renderRecipe(config, "sitemap");
