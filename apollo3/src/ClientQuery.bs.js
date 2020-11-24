'use strict';

var ApolloClient__React_Hooks_UseQuery = require("reason-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");

var Raw = {};

var query = (require("@apollo/client").gql`
  query IsLoggedIn  {
    isLoggedIn @client
  }
`);

function parse(value) {
  return {
          isLoggedIn: value.isLoggedIn
        };
}

function serialize(value) {
  var value$1 = value.isLoggedIn;
  return {
          isLoggedIn: value$1
        };
}

function serializeVariables(param) {
  
}

function makeVariables(param) {
  
}

function makeDefaultVariables(param) {
  
}

var Inner = {
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

var refetchQueryDescription = include.refetchQueryDescription;

var use = include.use;

var useLazy = include.useLazy;

var useLazyWithVariables = include.useLazyWithVariables;

exports.Inner = Inner;
exports.Raw = Raw;
exports.query = query;
exports.parse = parse;
exports.serialize = serialize;
exports.serializeVariables = serializeVariables;
exports.makeVariables = makeVariables;
exports.makeDefaultVariables = makeDefaultVariables;
exports.refetchQueryDescription = refetchQueryDescription;
exports.use = use;
exports.useLazy = useLazy;
exports.useLazyWithVariables = useLazyWithVariables;
/* query Not a pure module */
