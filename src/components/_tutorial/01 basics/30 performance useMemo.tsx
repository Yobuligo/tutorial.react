// Another hook is useMemo.
// It can be used for operations which might be expensive and should be executed only rarely. E.g. sorting of a list.
// Therefore the useMemo hook is used. It has two parameters. The first is a function that does the work and returns the result. E.g. is sorts a list and returns the result.
// The second parameter is a list of dependencies. As usually it means that the expensive function (to sort the items) only run, if any dependency change.
// Usage:
// 1. when e.g. a computation takes a long time and the result should be cached
// 2. For reference equality. E.g. a useEffect should only be called when a reference changed. Then that reference should be wrapped by useMemo. So it wont be rerendered each time with the host component,
//    but only when the whole component including the reference has to rebuild.

import { useMemo } from "react";

export const UseMemoComponent: React.FC<{
  persons: string[];
  personsReloaded: boolean;
}> = (props) => {
  const sortedPersons = useMemo(() => {
    if (props.personsReloaded) {
      return props.persons.sort((a: string, b: string) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
    }
  }, [props.persons, props.personsReloaded]);

  return <>{sortedPersons}</>;
};
