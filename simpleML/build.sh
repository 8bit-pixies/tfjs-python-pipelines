
for var in "$@"
do
    make py="$var" js
done

for i in __target__/*.js; do
    # echo "$i"
    FNAME="$(basename "$i" .js)"
    make py="$FNAME" nd
done