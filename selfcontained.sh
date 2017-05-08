rm -f selfcontained.html

cat src/html/index.part1.html > selfcontained.html && cat src/css/style.css >> selfcontained.html && cat src/html/index.part1b.html >> selfcontained.html \
&& cat build/TAAS-ProductCatalogue-hierarchy.Customer\ Segment.json >> selfcontained.html \
&& cat build/CFS-hierarchy.Customer\ Facing\ Service\ Catalogue.json >> selfcontained.html \
&& cat build/RFS-hierarchy.Resource\ Facing\ Service\ Catalogue.json >> selfcontained.html \
&& cat build/PD-CFS-map.ProductSpec.json >> selfcontained.html \
&& cat build/CFS-RFS-map.Customer\ Facing\ Service\ Specification.json >> selfcontained.html \
&& cat src/lib/d3.v3.min.js >> selfcontained.html && cat src/lib/bihisankey.js  >> selfcontained.html && cat src/lib/app.js >> selfcontained.html  && cat src/html/index.part2.html >> selfcontained.html
