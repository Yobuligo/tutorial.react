// Another hook is useMemo.
// It can be used for operations which might be expensive and should be executed only rarely. E.g. sorting of a list.
// Therefore the useMemo hook is used. It has two parameters. The first is a function that does the work and returns the result. E.g. is sorts a list and returns the result.
// The second parameter is a list of dependencies. As usually it means that the expensive function (to sort the items) only run, if any dependency change.

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
