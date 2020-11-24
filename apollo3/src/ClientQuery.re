
[%graphql
  {|
    query IsLoggedIn @ppxConfig(inline: true, schema: "client_schema.json", templateTag: "graphql") {

    isLoggedIn @client

    }
  |}
];
