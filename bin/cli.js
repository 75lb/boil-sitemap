#!/usr/bin/env node
"use strict";
var mfs = require("more-fs"),
    path = require("path"),
    loadConfig = require("config-master"),
    boil = require("boil-js"),
    Model = require("nature").Model;

var argv = new Model()
    .define({ name: "files", type: Array, defaultOption: true })
    .define({ name: "prefix", type: "string" })
    .set(process.argv);
    
var boilHbs = mfs.read(path.join(__dirname, "..", "boil.hbs"));
boilHbs = boil.render(boilHbs, { 
    files: argv.files, 
    prefix: argv.prefix,
    templatePath: path.join(__dirname, "..", "template.hbs")
});
var config = JSON.parse(boilHbs);
console.log(config)
boil.renderRecipe(config, "sitemap");
