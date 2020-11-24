'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ApolloClient__React_Hooks_UseQuery = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");

var Raw = {};

var query = (require("@apollo/client").gql`
  query GetDrafts  {
    __typename
    drafts  {
      id
      published
      title
      content
      __typename
    }
  }
`);

function parse(value) {
  var value$1 = value.drafts;
  return {
          __typename: value.__typename,
          drafts: value$1.map(function (value) {
                return {
                        id: value.id,
                        published: value.published,
                        title: value.title,
                        content: value.content,
                        __typename: value.__typename
                      };
              })
        };
}

function serialize(value) {
  var value$1 = value.drafts;
  var drafts = value$1.map(function (value) {
        var value$1 = value.__typename;
        var value$2 = value.content;
        var value$3 = value.title;
        var value$4 = value.published;
        var value$5 = value.id;
        return {
                id: value$5,
                published: value$4,
                title: value$3,
                content: value$2,
                __typename: value$1
              };
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

var use = include.use;

var GetDrafts_refetchQueryDescription = include.refetchQueryDescription;

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
  use: use,
  useLazy: GetDrafts_useLazy,
  useLazyWithVariables: GetDrafts_useLazyWithVariables
};

function GetDraftsQuery(Props) {
  var children = Props.children;
  var match = Curry.app(use, [
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

var make = GetDraftsQuery;

exports.GetDrafts = GetDrafts;
exports.make = make;
/* query Not a pure module */
