/**
 * An alternative for dropdowns by datalist is to use select and options.
 * Here we have no filtering
 */

export const DropdownWithSelect: React.FC = () => {
  return (
    <>
      <select>
        <option>First</option>
        <option>Second</option>
        <option>Third</option>
      </select>
    </>
  );
};
