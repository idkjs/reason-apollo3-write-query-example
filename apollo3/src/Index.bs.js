'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$Apollo3 = require("./App.bs.js");
var Client = require("@apollo/client");
var Client$Apollo3 = require("./Client.bs.js");
var DraftsCache$Apollo3 = require("./DraftsCache.bs.js");
var ExampleStyles$Apollo3 = require("./ExampleStyles.bs.js");
var GetDraftsFromServer$Apollo3 = require("./GetDraftsFromServer.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$Apollo3.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(Client.ApolloProvider, {
          client: Client$Apollo3.instance,
          children: null
        }, React.createElement(App$Apollo3.make, {}), React.createElement(GetDraftsFromServer$Apollo3.make, {})), makeContainer("reason-apollo3-write-query-example"));

ReactDom.render(React.createElement(DraftsCache$Apollo3.make, {}), makeContainer("DraftsCache without provider"));

ReactDom.render(React.createElement(Client.ApolloProvider, {
          client: Client$Apollo3.instance,
          children: React.createElement(GetDraftsFromServer$Apollo3.make, {})
        }), makeContainer("Drafts From Server"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
