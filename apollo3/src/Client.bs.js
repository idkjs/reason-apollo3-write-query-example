'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ApolloClient = require("reason-apollo-client/src/ApolloClient.bs.js");
var ApolloClient__Link_Http_HttpLink = require("reason-apollo-client/src/@apollo/client/link/http/ApolloClient__Link_Http_HttpLink.bs.js");
var ApolloClient__Cache_InMemory_InMemoryCache = require("reason-apollo-client/src/@apollo/client/cache/inmemory/ApolloClient__Cache_InMemory_InMemoryCache.bs.js");

var graphqlEndpoint = "localhost:4000";

var inMemoryCache = ApolloClient__Cache_InMemory_InMemoryCache.make(undefined, undefined, undefined, undefined, undefined, undefined);

var httpLink = ApolloClient__Link_Http_HttpLink.make((function (param) {
        return "http://localhost:4000";
      }), undefined, undefined, undefined, undefined, undefined, undefined, undefined);

var instance = ApolloClient.make(undefined, undefined, undefined, Caml_option.some(httpLink), inMemoryCache, undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

exports.graphqlEndpoint = graphqlEndpoint;
exports.inMemoryCache = inMemoryCache;
exports.httpLink = httpLink;
exports.instance = instance;
/* inMemoryCache Not a pure module */
