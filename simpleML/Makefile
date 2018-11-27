
js:
	python -m transcrypt -b -p .none -n $(py)

js_sources:= $(shell cd __target__ && find . -name *.js)

cp_package:
	cp package.json __target__/package.json

nd: js
	cd __target__	
	npx babel __target__/$(py).js --out-file $(py).js

node:
	$(foreach var,$(js_sources),make $(var);)

test:
	./build.sh feature
	node feature.js
	python -m nose2