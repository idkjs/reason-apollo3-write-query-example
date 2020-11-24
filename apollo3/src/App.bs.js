'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Button$Apollo3 = require("./Button.bs.js");
var Random$BsFaker = require("bs-faker/src/Random.bs.js");
var DraftsCache$Apollo3 = require("./DraftsCache.bs.js");
var ApolloConsumer$Apollo3 = require("./ApolloConsumer.bs.js");
var GetDraftsQuery$Apollo3 = require("./GetDraftsQuery.bs.js");

function newDraft(param) {
  return {
          id: Random$BsFaker.uuid(undefined),
          published: false,
          title: Random$BsFaker.words(2, undefined),
          content: Random$BsFaker.words(4, undefined),
          __typename: "Post"
        };
}

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

function make(client, data) {
  return Curry._6(client.reason_writeQuery, {
              query: GetDraftsQuery$Apollo3.GetDrafts.query,
              Raw: GetDraftsQuery$Apollo3.GetDrafts.Raw,
              parse: GetDraftsQuery$Apollo3.GetDrafts.parse,
              serialize: GetDraftsQuery$Apollo3.GetDrafts.serialize,
              serializeVariables: GetDraftsQuery$Apollo3.GetDrafts.serializeVariables
            }, undefined, data, undefined, undefined, undefined);
}

var WriteChatQuery = {
  make: make
};

function make$1(client) {
  return Curry._5(client.reason_readQuery, {
              query: GetDraftsQuery$Apollo3.GetDrafts.query,
              Raw: GetDraftsQuery$Apollo3.GetDrafts.Raw,
              parse: GetDraftsQuery$Apollo3.GetDrafts.parse,
              serialize: GetDraftsQuery$Apollo3.GetDrafts.serialize,
              serializeVariables: GetDraftsQuery$Apollo3.GetDrafts.serializeVariables
            }, undefined, undefined, undefined, undefined);
}

var ReadChatQuery = {
  make: make$1
};

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement(DraftsCache$Apollo3.make, {}), React.createElement(ApolloConsumer$Apollo3.make, {
                  children: (function (client) {
                      return React.createElement(GetDraftsQuery$Apollo3.make, {
                                  children: (function (data) {
                                      console.log("GetDraftsQuery:data", data);
                                      return React.createElement("div", undefined, React.createElement("div", undefined, React.createElement(Button$Apollo3.make, {
                                                          onClick: (function (param) {
                                                              var match = make$1(client);
                                                              if (match !== undefined) {
                                                                return make(client, {
                                                                            __typename: "Query",
                                                                            drafts: $$Array.concat({
                                                                                  hd: match.drafts,
                                                                                  tl: {
                                                                                    hd: [newDraft(undefined)],
                                                                                    tl: /* [] */0
                                                                                  }
                                                                                })
                                                                          });
                                                              } else {
                                                                console.log("no");
                                                                return ;
                                                              }
                                                            })
                                                        })), React.createElement("div", undefined, renderData(data)));
                                    })
                                });
                    })
                }));
}

var GetDrafts;

var make$2 = App;

exports.GetDrafts = GetDrafts;
exports.newDraft = newDraft;
exports.renderData = renderData;
exports.WriteChatQuery = WriteChatQuery;
exports.ReadChatQuery = ReadChatQuery;
exports.make = make$2;
/* react Not a pure module */
