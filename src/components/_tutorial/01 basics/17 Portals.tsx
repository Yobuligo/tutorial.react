// Portals are a way to port a component to a specific place.
// Why should I do that?
// Because e.g. by using an backdrop for displaying a modal dialog the backdrop can be integrated at any point within the application.
// But actually it is part of the application and not a part of another component, as a dialog is something global, it is not directly a child of another component.
// Portals are some kind of e.g. <div> which can be used to display a component. That portal is located beneath the main HTML body
// Actually the root div in the index html must be a portal too.
//
// To provide a Portal the following has to be done:
// 1. extend the index.html by adding the portal <div> for e.g. backdrop and modal like the following
//    <body>
//       <div id="backdrop-root"></div>
//       <div id="overlay-root"></div>
//       <div id="root"></div>
//    </body>

import React from "react";
import ReactDOM from "react-dom";

const PortalComponent: React.FC = () => {
  return (
    <>
      <h3>My portal component</h3>
    </>
  );
};

// To bind a component to a portal the portal has to be retrieved and the component has to be set
export const Portal: React.FC = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <PortalComponent />,
        document.getElementById("backdrop-root")!
      )}
    </>
  );
};
