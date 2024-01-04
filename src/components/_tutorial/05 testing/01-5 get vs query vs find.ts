/**
 * Jest brings 3 types of methods. Each starting with a specific prefix:
 *      get - Each get expect a specific element in the rendered component. If it is not present, an error is thrown
 *      query - Query tries to find an element in the rendered component or returns undefined if not found instead of throwing an error
 *      find - Find can be used e.g. in combination with await if e.g. a fetch is running and we have to wait for an element to appear. Its similar to "await waitFor(()=>{})"
 */