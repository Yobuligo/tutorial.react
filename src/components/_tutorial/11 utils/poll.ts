/**
 * Previously I implemented a custom hook usePolling to poll.
 * But actually it is enough to just have a method for polling.
 */

namespace Polling {
  interface IRepository<T> {
    findAll(): Promise<T[]>;
    version(id: number): Promise<Date>;
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
}
