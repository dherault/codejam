#!/bin/sh

mkdir -p output
rm -rf output/*

node app.js > output/output.out
zip -q output/archiv.zip *.js input.in output/output.out