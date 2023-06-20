/**
 * The following function is a service function that provides the possibility to read from the local storage and returns a deserialized item, that data in form of T
 */

export const readLocalStorage = <T>(key: string): T | undefined => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return undefined;
};
