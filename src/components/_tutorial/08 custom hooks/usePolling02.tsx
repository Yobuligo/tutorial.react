/**
 * Here is an even nicer variant of the usePolling hook.
 *      1.  The properties are not injected when creating the hook like useHook(Repository, ()=>reload())
 *          Instead the there information are injected when calling onPoll
 *      2.  Each entity can be observed while polling by providing the id of the entity.
 *          Therefore the Repository provides a method to get the version of an entity by id
 *          It is not necessary to check if the version is outdated, instead the version is cached within the hook.
 */

import { useCallback, useEffect, useMemo, useState } from "react";

interface IRepository<T> {
  findAll(): Promise<T[]>;
  version(id: number): Promise<Date | undefined>;
}

class Repository<T> implements IRepository<T> {
  findAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  version(id: number): Promise<Date | undefined> {
    throw new Error("Method not implemented");
  }
}

interface IPerson {
  firstname: string;
  age: number;
}

const PersonRepository = new Repository<IPerson>();

/**
 * UsePolling can be initialized directly. The {@link onPoll} function needs the parameters.
 * The poll checks the version of the entity with {@link id}.
 * The hook remembers the last version by itself.
 */
function usePolling<T>() {
  const lastVersion: { version: Date | undefined } = useMemo(() => {
    return { version: undefined };
  }, []);

  const onPoll = useCallback(
    (repository: IRepository<T>, id: number, reload: () => void) => {
      setInterval(async () => {
        try {
          const version = await repository.version(id);
          if (lastVersion.version !== version) {
            lastVersion.version = version;
            await reload();
          }
          onPoll(repository, id, reload);
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message);
          }
        }
      }, 1000);
    },
    [lastVersion]
  );

  return onPoll;
}

const App: React.FC = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const poll = usePolling();

  const reload = async () => {
    const persons = await PersonRepository.findAll();
    setPersons(persons);
  };

  useEffect(() => {
    poll(PersonRepository, 123, () => reload());
  }, [poll]);

  return <>{persons}</>;
};
