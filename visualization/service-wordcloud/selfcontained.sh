rm -f selfcontained.html

cat selfcontained/index.part1.html > selfcontained.html \
&& cat data.js >> selfcontained.html \
&& cat ../../src/lib/d3.v3.min.js >> selfcontained.html \
&& cat ../../src/lib/cloud.min.js  >> selfcontained.html \
&& cat selfcontained/index.part2.html >> selfcontained.html
