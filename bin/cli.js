#!/usr/bin/env node
"use strict";
var mfs = require("more-fs"),
    path = require("path"),
    loadConfig = require("config-master"),
    boil = require("boil-js"),
    parseArgv = require("command-line-args");

var argv = parseArgv([
    { name: "files", type: Array, defaultOption: true },
    { name: "prefix", type: "string" },
    { name: "changefreq", type: "string", value: "daily" }
]);
    
var boilHbs = mfs.read(path.join(__dirname, "..", "boil.hbs"));
boilHbs = boil.render(boilHbs, { 
    files: argv.files, 
    prefix: argv.prefix,
    changefreq: argv.changefreq,
    templatePath: path.join(__dirname, "..", "template.hbs")
});
var config = JSON.parse(boilHbs);
boil.renderRecipe(config, "sitemap");
