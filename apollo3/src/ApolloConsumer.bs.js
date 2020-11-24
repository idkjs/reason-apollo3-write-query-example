'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Client = require("@apollo/client");

var JsConsumer = {};

function ApolloConsumer(Props) {
  var children = Props.children;
  return React.createElement(Client.ApolloConsumer, {
              children: Curry.__1(children)
            });
}

var make = ApolloConsumer;

exports.JsConsumer = JsConsumer;
exports.make = make;
/* react Not a pure module */
