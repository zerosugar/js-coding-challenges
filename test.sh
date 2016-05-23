#!/bin/bash
#
# This script is for running mocha tests on only coding problems
for file in $( git diff --name-only HEAD^ HEAD ); do
  xpath=${file%/*}
  xbase=${file##*/}
  xfext=${xbase##*.}

  if [ $xpath == 'problems' ]
    then
      echo Starting test for: $xbase
      node_modules/mocha/bin/mocha --reporter spec --grep $xbase
  fi

done
