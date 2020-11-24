[%graphql
  {|
   fragment Draft on Query {
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