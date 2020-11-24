'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var DraftsCacheQuery$Apollo3 = require("./DraftsCacheQuery.bs.js");

function DraftsCache$Comp(Props) {
  var children = Props.children;
  var match = Curry.app(DraftsCacheQuery$Apollo3.GetDraftsFromCache.use, [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      ]);
  var match$1 = match.data;
  var error = match.error;
  if (match.loading) {
    return React.createElement("div", undefined, "Loading");
  } else if (error !== undefined) {
    return React.createElement("div", undefined, error.message);
  } else if (match$1 !== undefined) {
    return Curry._1(children, match$1.drafts);
  } else {
    return "I hope this is impossible, but sometimes it's not!";
  }
}

var Comp = {
  make: DraftsCache$Comp
};

function renderData(data) {
  return $$Array.map((function (v) {
                return React.createElement("div", {
                            style: {
                              display: "flex"
                            }
                          }, React.createElement("div", {
                                style: {
                                  marginRight: "20px"
                                }
                              }, "id: " + v.id), React.createElement("div", {
                                style: {
                                  marginRight: "20px"
                                }
                              }, "title: " + v.title), React.createElement("div", {
                                style: {
                                  marginRight: "20px"
                                }
                              }, "content: " + v.content));
              }), data);
}

function DraftsCache(Props) {
  var style = {
    color: "teal"
  };
  return React.createElement(DraftsCache$Comp, {
              children: (function (data) {
                  console.log("DraftsCacheQuery:data", data);
                  return React.createElement("div", undefined, React.createElement("h1", {
                                  style: style
                                }, "DraftsCacheQuery:data"), React.createElement("h1", {
                                  style: style
                                }, "This should be updating"), renderData(data));
                })
            });
}

var make = DraftsCache;

exports.Comp = Comp;
exports.renderData = renderData;
exports.make = make;
/* react Not a pure module */
