#!/bin/sh

mkdir -p output
rm -rf output/*

node app.js > output/results.out
zip -q output/archiv.zip *.js input.in output/results.out