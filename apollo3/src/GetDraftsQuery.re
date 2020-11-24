
[%graphql
  {|
   query GetDrafts {
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

[@react.component]
let make = (~children) => {
  switch (GetDrafts.use()) {
  | {loading: true} => <div> {ReasonReact.string("Loading")} </div>
  | {error: Some(error)} => <div> {ReasonReact.string(error.message)} </div>
  | {data: Some({drafts})} => children(drafts)
  | {data: None, error: None, loading: false} =>
    "I hope this is impossible, but sometimes it's not!"->React.string
  };
};
