// To persist values and data within the browser the "localStorage" can be used. A global variable which is accessible from everywhere.
// It provides methods to set and get items. The values can be displayed within the browser by opening the browser dev tools -> choosing Application and on the left hand side Storage -> local storage -> address

export const LocalStorage: React.FC = () => {
  const STORAGE_ITEM_KEY = "MY_ITEM_KEY";
  localStorage.setItem(STORAGE_ITEM_KEY, "My Item Value");
  return (
    <>
      <h3>The stored Items was</h3>
      <p>{localStorage.getItem(STORAGE_ITEM_KEY)}</p>
    </>
  );
};
