#!/bin/sh

set -e

npm ca clean
npm install
grunt
