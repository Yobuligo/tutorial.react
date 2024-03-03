import { checkNotNull } from "@yobuligo/core.typescript";
import { useParams } from "react-router-dom";

/**
 * The custom hook useRouteParam can be used to get a Route parameter from the route path
 * Actually there is already useParams from react-router-dom. But you have to type safe the value and you have to throw an exception, if the parameter is not available.
 * Here you can do it at a central place.
 */

class MissingRouteParameterError extends Error {
  constructor(paramName: string) {
    super(
      `Error while getting parameter from route. Parameter '${paramName}' not available in route.`
    );
  }
}

export const useRouteParam = <T>(paramName: string): T => {
  const routeParams: any = {};
  routeParams[paramName] = "";
  type ParamType = typeof routeParams;
  const params = useParams<ParamType>();
  return checkNotNull(
    params[paramName] as T,
    new MissingRouteParameterError(paramName).message
  );
};
