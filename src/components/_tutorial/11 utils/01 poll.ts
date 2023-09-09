/**
 * Previously I implemented a custom hook usePolling to poll.
 * But actually it is enough to just have a method for polling.
 * !!!!! Another approach is to add the polling directly to the repository.
 */

interface IRepository<T> {
  findAll(): Promise<T[]>;
  version(id: number): Promise<Date>;

  /**
   * Call the polling directly at the repository. So it is clear which object type is effected (T).
   * In addition we can call {@link onChange} whenever the object is outdated
   */
  poll(id: number, onChange: () => void): Promise<void>;
}

interface IPerson {
  firstname: string;
  age: number;
}

/**
 * More or less a technical function that shouldn't accessible from outside, as it has a parameter lastVersion
 */
const startPoll = <T>(
  lastVersion: Date | undefined,
  repository: IRepository<T>,
  id: number,
  onChange: () => void
) => {
  setTimeout(async () => {
    const version = await repository.version(id);
    if (lastVersion !== version) {
      lastVersion = version;
      await onChange();
    }
    startPoll(lastVersion, repository, id, onChange);
  }, 1000);
};

/**
 * The actually poll function, that is called form outside.
 */
const poll = <T>(
  repository: IRepository<T>,
  id: number,
  onChange: () => void
) => {
  startPoll(undefined, repository, id, onChange);
};
