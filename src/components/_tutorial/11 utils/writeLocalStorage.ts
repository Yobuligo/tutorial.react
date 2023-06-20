/**
 * The following function is a service function that provides the possibility to write to the local storage and returns data
 */

export const writeLocalStorage = <T>(key: string, data: T): T => {
  const item = JSON.stringify(data);
  localStorage.setItem(key, item);
  return data;
};
