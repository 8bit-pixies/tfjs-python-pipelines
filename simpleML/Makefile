
js:
	python -m transcrypt -b -p .none -n $(py)

js_sources:= $(shell cd __target__ && find . -name *.js)

nd: 
	cd __target__	
	npx babel __target__/$(py).js --out-file $(py).js

build:
	./build.sh $(py)
	python tfjs_model.py $(py)

clean:
	rm -r -f *.js
	rm -r -f __target__/