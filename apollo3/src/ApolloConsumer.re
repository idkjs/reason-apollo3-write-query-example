module JsConsumer = {
  [@bs.module "@apollo/client"] [@react.component]
  external make:
    (~children: ApolloClient.t => React.element) => React.element =
    "ApolloConsumer";
};

[@react.component]
let make = (~children: ApolloClient.t => React.element) =>
  <JsConsumer> {client => children(client)} </JsConsumer>;