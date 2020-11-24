open DraftsCacheQuery;

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

[@react.component]
let make = () => {

  let style = {
    ReactDOMRe.Style.make(~color="teal", ());
  };
  <Comp>
    {data => {
       Js.log2("DraftsCacheQuery:data", data);
       <div>
         <h1 style> "DraftsCacheQuery:data"->React.string </h1>
         <h1 style> "This should be updating"->React.string </h1>
         {renderData(data)}
       </div>;
     }}
  </Comp>;
};
