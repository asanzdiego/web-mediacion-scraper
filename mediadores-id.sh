#! /bin/bash

MAX_PAGE=89
FILE_NAME="mediadores-id.cvs"

echo -n > "$FILE_NAME"

for (( i=1; i<=$MAX_PAGE; i++ ))
do
   casperjs mediadores-id.js "$i" "$FILE_NAME"
done
