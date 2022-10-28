import ReactDOM from "react-dom";
import { Summary } from "./Summary";

export const SummaryDialog: React.FC = () => {
  return (
    <>
      {ReactDOM.createPortal(<Summary />, document.getElementById("backdrop")!)}
    </>
  );
};
