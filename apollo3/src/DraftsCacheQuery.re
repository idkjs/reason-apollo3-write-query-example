
[%graphql
  {|
   query GetDraftsFromCache @client {
      __typename
      drafts {
        id
        published
        title
        content
        __typename
      }
    }
  |}
];

