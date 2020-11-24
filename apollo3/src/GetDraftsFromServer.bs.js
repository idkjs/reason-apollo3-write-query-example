'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var DraftsFragment$Apollo3 = require("./DraftsFragment.bs.js");
var DraftsCacheQuery$Apollo3 = require("./DraftsCacheQuery.bs.js");
var ApolloClient__React_Hooks_UseQuery = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");

var Raw = {};

var query = ((frag_0) => require("@apollo/client").gql`
  query GetDrafts  {
    __typename
    drafts  {
      ...Draft
    }
  }
  ${frag_0}
`)(DraftsFragment$Apollo3.Draft.query);

function parse(value) {
  var value$1 = value.drafts;
  return {
          __typename: value.__typename,
          drafts: value$1.map(function (value) {
                return DraftsFragment$Apollo3.Draft.verifyArgsAndParse("Draft", value);
              })
        };
}

function serialize(value) {
  var value$1 = value.drafts;
  var drafts = value$1.map(function (value) {
        return DraftsFragment$Apollo3.Draft.serialize(value);
      });
  var value$2 = value.__typename;
  return {
          __typename: value$2,
          drafts: drafts
        };
}

function serializeVariables(param) {
  
}

function makeVariables(param) {
  
}

function makeDefaultVariables(param) {
  
}

var GetDrafts_inner = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables
};

var include = ApolloClient__React_Hooks_UseQuery.Extend({
      query: query,
      Raw: Raw,
      parse: parse,
      serialize: serialize,
      serializeVariables: serializeVariables
    });

var GetDrafts_refetchQueryDescription = include.refetchQueryDescription;

var GetDrafts_use = include.use;

var GetDrafts_useLazy = include.useLazy;

var GetDrafts_useLazyWithVariables = include.useLazyWithVariables;

var GetDrafts = {
  GetDrafts_inner: GetDrafts_inner,
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables,
  refetchQueryDescription: GetDrafts_refetchQueryDescription,
  use: GetDrafts_use,
  useLazy: GetDrafts_useLazy,
  useLazyWithVariables: GetDrafts_useLazyWithVariables
};

function GetDraftsFromServer$Comp(Props) {
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
  make: GetDraftsFromServer$Comp
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

var style = {
  color: "teal"
};

function GetDraftsFromServer(Props) {
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
    return React.createElement("div", undefined, React.createElement("h1", {
                    style: style
                  }, "These are the Drafts from the server"), renderData(match$1.drafts));
  } else {
    return "I hope this is impossible, but sometimes it's not!";
  }
}

var Draft;

var make = GetDraftsFromServer;

exports.Draft = Draft;
exports.GetDrafts = GetDrafts;
exports.Comp = Comp;
exports.renderData = renderData;
exports.style = style;
exports.make = make;
/* query Not a pure module */
