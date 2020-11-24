'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function then_(promise, f) {
  return promise.then(Curry.__1(f));
}

function ignore(prim) {
  
}

var $$Promise = {
  then_: then_,
  ignore: ignore
};

exports.$$Promise = $$Promise;
/* No side effect */
