'use strict';

var ApolloClient__React_Hooks_UseQuery = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");

var Raw = {};

var query = (require("@apollo/client").gql`
  query GetDraftsFromCache @client {
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

var GetDraftsFromCache_inner = {
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

var GetDraftsFromCache_refetchQueryDescription = include.refetchQueryDescription;

var GetDraftsFromCache_use = include.use;

var GetDraftsFromCache_useLazy = include.useLazy;

var GetDraftsFromCache_useLazyWithVariables = include.useLazyWithVariables;

var GetDraftsFromCache = {
  GetDraftsFromCache_inner: GetDraftsFromCache_inner,
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables,
  refetchQueryDescription: GetDraftsFromCache_refetchQueryDescription,
  use: GetDraftsFromCache_use,
  useLazy: GetDraftsFromCache_useLazy,
  useLazyWithVariables: GetDraftsFromCache_useLazyWithVariables
};

exports.GetDraftsFromCache = GetDraftsFromCache;
/* query Not a pure module */
