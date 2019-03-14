#!/bin/sh

echo "Creating new Code Jam problem. Name?"

read name;

mkdir $name;
cp -r _boilerplate/* $name/
cd $name

echo "Created problem $name";
