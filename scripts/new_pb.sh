#!/bin/sh

echo "Creating new Code Jam problem. Name?"

read name;

mkdir $name;
cp -r boilerplate/* $name/
cd $name

echo "Created problem $name";
