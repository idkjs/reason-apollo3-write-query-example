'use strict';

var React = require("react");

function Button(Props) {
  var onClick = Props.onClick;
  return React.createElement("button", {
              className: "button",
              onClick: onClick
            }, "Write new data");
}

var make = Button;

exports.make = make;
/* react Not a pure module */
