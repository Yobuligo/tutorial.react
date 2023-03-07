import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import RootPage from "../RootPage";

const ErrorComponent: React.FC = () => {
  const error = useRouteError();
  let header: string;
  let paragraph: string;

  if (isRouteErrorResponse(error)) {
    header = JSON.parse(error.data).message;
    paragraph = `The http status of the error was ${error.status}. The text was: ${error.statusText}`;
  } else {
    header = "An error occurred";
    paragraph = "The error type is unknown";
  }

  const navigate = useNavigate();
  return (
    <>
      <RootPage />
      <h1>{header}</h1>
      <p>{paragraph}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back
      </button>
    </>
  );
};
export default ErrorComponent;
