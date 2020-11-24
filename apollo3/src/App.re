module GetDrafts = GetDraftsQuery.GetDrafts;

let newDraft = (): GetDrafts.t_drafts => {
  id: BsFaker.Random.uuid(),
  published: false,
  title: BsFaker.Random.words(~count=2, ()),
  content: BsFaker.Random.words(~count=4, ()),
  __typename: "Post",
};

let renderData = data =>
  data
  |> Array.map((v: GetDrafts.t_drafts) =>
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

module WriteChatQuery = {
  let make = (~client: ApolloClient.t, ~data: GetDrafts.t) =>
    client.writeQuery(~query=(module GetDrafts), ~data, ());
};
module ReadChatQuery = {
  let make = (~client: ApolloClient.t) =>
    client.readQuery(~query=(module GetDrafts), ());
};

[@react.component]
let make = () => {
  let writeToCache = client => {
    switch (ReadChatQuery.make(~client)) {
    | Some({drafts}) =>
      WriteChatQuery.make(
        ~client,
        ~data={
          drafts: Array.concat([drafts, [|newDraft()|]]),
          __typename: "Query",
        },
      )
    | None => Js.log("no")
    };
  };

  <>
    <DraftsCache />
    <ApolloConsumer>
      {client =>
         <GetDraftsQuery>
           {data => {
              Js.log2("GetDraftsQuery:data", data);
              <div>
                <div> <Button onClick={_ => writeToCache(client)} /> </div>
                <div> {renderData(data)} </div>
              </div>;
            }}
         </GetDraftsQuery>}
    </ApolloConsumer>
  </>;
};
