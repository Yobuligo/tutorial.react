/**
 * If a fetch takes a long time, we want to abort it to display a message, that we have an connection error.
 * Therefor it is possible to use the abort controller. The abort controller will be aborted after a specific time.
 * The abort controller itself can be handed over to the fetch, which checks the signal.
 * If the abort controller was aborted the fetch throws an abort error
 */

const request = async () => {
  // create an instance of an abort controller
  const abortController = new AbortController();

  // define a timer, which expires after 5 seconds and abort the abort controller
  const timeout = setTimeout(() => abortController.abort(), 5000);

  try {
    // define a fetch that uses provides the abort controller signal
    await fetch("", { signal: abortController.signal });

    // clear timeout if not required anymore
    clearTimeout(timeout);
  } catch (error) {
    // now the fetch throw an abort error, which can handled separately
  }
};
