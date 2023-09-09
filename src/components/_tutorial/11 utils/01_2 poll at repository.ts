/**
 * Next to normal poll function an idea is to have the polling directly at the repository.
 * So everything is at a central place. Loading entities, but also polling them by their ids.
 */

interface IPerson {
  firstname: string;
  age: number;
}

interface IRepository<T> {
  findAll(): Promise<T[]>;
  version(id: number): Promise<Date>;

  /**
   * Call the polling directly at the repository. So it is clear which object type is effected (T).
   * In addition we can call {@link onChange} whenever the object is outdated
   */
  poll(id: number, onChange: () => void): void;
}

class Repository<T> implements IRepository<T> {
  findAll(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }

  version(id: number): Promise<Date> {
    throw new Error("Method not implemented.");
  }

  poll(id: number, onChange: () => void) {
    this.startPoll(undefined, id, onChange);
  }

  private startPoll(
    lastVersion: Date | undefined,
    id: number,
    onChange: () => void
  ) {
    setTimeout(async () => {
      try {
        const version = await this.version(id);
        if (lastVersion !== version) {
          lastVersion = version;
          await onChange();
        }
        this.startPoll(lastVersion, id, onChange);
      } catch (error) {
        if (error instanceof Error) {
          console.log(`Error while polling. ${error.message}`);
        } else {
          console.log(`Error while polling.`);
        }
      }
    }, 1000);
  }
}

const PersonRepository = new Repository<IPerson>();

/**
 * That is all we have to call.
 * We poll the {@link IPerson} with id 12. Whenever that person entity changed, we can handle the change and e.g. updating the UI
 */
PersonRepository.poll(12, () => {
  // e.g. update UI
});
