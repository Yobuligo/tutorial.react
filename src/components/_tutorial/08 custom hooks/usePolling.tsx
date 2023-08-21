/**
 * A custom hook that can be used to poll data in a certain frequency, to update the UI.
 */

import { useCallback, useEffect, useState } from "react";

/**
 * This interface is responsible to handle objects of a certain type {@link T}.
 * There is a local version (a timestamp) of the last fetched data.
 * If the local timestamp doesn't fit to the remote timestamp of the server, we have to reload the data
 */
interface IRepository<T> {
  findAll(): Promise<T[]>;
  isOutdated: Promise<boolean>;
}

class Repository<T> implements IRepository<T> {
  findAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  get isOutdated(): Promise<boolean> {
    throw new Error();
  }
}

interface IPerson {
  firstname: string;
  age: number;
}

const PersonRepository = new Repository<IPerson>();

/**
 * The custom hook for polling.
 * It gets the '{@link repository}' which has to be checked if it gets outdated.
 * Whenever it is outdated, the function '{@link reload}' is called.
 * The parameter '{@link interval}' provides the time in ms, in which it has to be checked if it gets outdated.
 * UsePolling returns the function onPoll which is required to start the polling. It:
 *      1. checks if the repository data are outdated
 *      2. call reload if data are outdated
 *      3. restarts the polling
 *      4. handles errors which might occur
 */
function usePolling<T>(
  repository: IRepository<T>,
  reload: () => void,
  interval: number = 1000
) {
  const onPoll = useCallback(() => {
    setInterval(async () => {
      try {
        const isOutdated = await repository.isOutdated;
        if (isOutdated) {
          await reload();
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
      onPoll();
    }, interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, reload]);

  return onPoll;
}

/**
 * The Apps holds a list of {@link persons}.
 * Initially the {@link persons} are loaded via method {@link reload} within the useEffect. In addition function '{@link poll}' is called within the useEffect.
 * And '{@link poll}' finally checks always if the local data are outdated, if so it reloads the data by {@link reload}.
 */
const App: React.FC = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const poll = usePolling(PersonRepository, () => reload());

  const reload = async () => {
    const persons = await PersonRepository.findAll();
    setPersons(persons);
  };

  useEffect(() => {
    reload();
    poll();
  }, [poll]);

  return <>{persons}</>;
};
