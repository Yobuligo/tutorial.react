/**
 * Often it is necessary to provide uuids for components.
 * E.g. when connecting a label with an input field or within a list of elements.
 * Either these ids can be provided manually or the hook useId can be used.
 */

import { useId } from "react";

const UseIdComponent: React.FC = () => {
  const firstnameId = useId();

  return (
    <>
      <label htmlFor={firstnameId}>Firstname</label>
      <input type="text" id={firstnameId} />
    </>
  );
};
