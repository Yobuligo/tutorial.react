/**
 * A custom hook that can be used to poll data in a certain frequency, to update the UI
 */

/**
 * This interface is responsible to handle objects of a certain type {@link T}.
 * There is a local version (a timestamp) of the last fetched data.
 * If the local timestamp doesn't fit to the remote timestamp of the server, we have to reload the data
 */
interface IRepository<T> {
  findAll(): Promise<T[]>;
  isOutdated: Promise<boolean>;
}

/**
 * The custom hook for polling.
 * It gets the '{@link repository}' which has to be checked if it gets outdated.
 * Whenever it is outdated, the function '{@link reload}' is called.
 * The parameter '{@link interval}' provides the time in ms, in which it has to be checked if it gets outdated.
 */
const usePolling = <T>(
  repository: IRepository<T>,
  reload: () => void,
  interval: number = 1000
) => {};
