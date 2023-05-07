/**
 * Provides a list with data to be selected
 */

const DatalistComponent: React.FC = () => {
  return (
    <>
      <input type="text" list="color-list" />
      <datalist id="color-list">
        <option value="Red" />
        <option value="Green" />
        <option value="Blue" />
        <option value="Yellow" />
      </datalist>
    </>
  );
};
