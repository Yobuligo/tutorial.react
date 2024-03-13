import { checkNotNull } from "@yobuligo/core.typescript";
import { useParams } from "react-router-dom";

/**
 * This custom hook is responsible for loading route params from react router dom.
 * The custom hook provides a central and standardized error handling.
 * If an expected route parameter was not found, an error is thrown.
 */
export const useRouteParam = <T>(paramName: string): T => {
  const instance: any = {};
  instance[paramName] = "";
  type ParamType = typeof instance;
  const params = useParams<ParamType>();
  const param = params[paramName] as T;
  return checkNotNull(param, new MissingURLParameterError(paramName).message);
};

class MissingURLParameterError extends Error {}
