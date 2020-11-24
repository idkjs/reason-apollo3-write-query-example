'use strict';


var Raw = {};

var query = (require("@apollo/client").gql`
  fragment Draft on Query   {
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
  return {
          drafts: drafts
        };
}

function verifyArgsAndParse(_Draft, value) {
  return parse(value);
}

function verifyName(param) {
  
}

var Draft = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  verifyArgsAndParse: verifyArgsAndParse,
  verifyName: verifyName
};

exports.Draft = Draft;
/* query Not a pure module */
