[@react.component]
let make = (~onClick) => {
  <button className="button" onClick>
    {"Write new data" |> React.string}
  </button>;
};
