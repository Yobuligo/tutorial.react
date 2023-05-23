/**
 * Provides a list with data to be selected.
 * Advantage is, that the filtering is already supported
 */

export const DatalistComponent: React.FC = () => {
  return (
    <>
      <input type="text" list="color-list" />
      <datalist id="color-list">
        <option value="Red" />
        <option value="Green" />
        <option value="Gray" />
        <option value="Blue" />
        <option value="Yellow" />
      </datalist>
    </>
  );
};
