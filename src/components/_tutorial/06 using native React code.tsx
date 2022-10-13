// To JSX provides code which is easier to read.
// Actually the JSX is only converted to React code. So alternatively to write JSX code is to use the React library directly.

import React from "react";

function EmbedMeComponent(props: any) {
  return <div>{props.title}</div>;
}

// The following ...
function JSXCode() {
  return;
  <div>
    <h2>Lets get started</h2>
  </div>;
}

// ... means the same like
// The createElement method needs 3 parameters:
// 1. the element or Component name,
// 2. the properties
// 3. the children / content
function NativeReactCode() {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Lets get started"),
    React.createElement(EmbedMeComponent, { title: "Test" })
  );
}
