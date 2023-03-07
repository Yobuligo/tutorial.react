import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

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
