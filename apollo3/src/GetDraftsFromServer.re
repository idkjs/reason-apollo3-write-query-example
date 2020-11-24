open DraftsCacheQuery;
module Draft = DraftsFragment.Draft;

[%graphql
  {|
   query GetDrafts {
      __typename
      drafts {
        ...Draft
      }
    }
  |}
];
module Comp = {
  [@react.component]
  let make = (~children) => {
    switch (GetDraftsFromCache.use()) {
    | {loading: true} => <div> {ReasonReact.string("Loading")} </div>
    | {error: Some(error)} =>
      <div> {ReasonReact.string(error.message)} </div>
    | {data: Some({drafts})} => children(drafts)
    | {data: None, error: None, loading: false} =>
      "I hope this is impossible, but sometimes it's not!"->React.string
    };
  };
};

let renderData = data =>
  data
  |> Array.map((v: GetDraftsFromCache.t_drafts) =>
       <div style={ReactDOMRe.Style.make(~display="flex", ())}>
         <div style={ReactDOMRe.Style.make(~marginRight="20px", ())}>
           {"id: " ++ v.id |> React.string}
         </div>
         <div style={ReactDOMRe.Style.make(~marginRight="20px", ())}>
           {"title: " ++ v.title |> React.string}
         </div>
         <div style={ReactDOMRe.Style.make(~marginRight="20px", ())}>
           {"content: " ++ v.content |> React.string}
         </div>
       </div>
     )
  |> React.array;
  let style = {
    ReactDOMRe.Style.make(~color="teal",  ());
  };
[@react.component]
let make = () => {
  switch (GetDraftsFromCache.use()) {
  | {loading: true} => <div> {ReasonReact.string("Loading")} </div>
  | {error: Some(error)} => <div> {ReasonReact.string(error.message)} </div>
  | {data: Some({drafts})} =>
      <div>
        <h1 style>{ReasonReact.string(
           "These are the Drafts from the server",
         )}</h1>
         {renderData(drafts)}
      </div>
  | {data: None, error: None, loading: false} =>
    "I hope this is impossible, but sometimes it's not!"->React.string
  };
};
