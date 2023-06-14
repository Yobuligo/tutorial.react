/**
 * Even for components it is sometimes required to provide data in form of generics.
 * Especially when implementing api components.
 *
 * It seems that with the normal arrow function definition, it doesn't work. Anyway it is possible by using the good old function.
 */

namespace UsingGenericInComponents {
  /**
   * Define the properties with the required generic information
   */
  interface ITableProps<T> {
    data: T[];
    onRowClick: (row: T) => void;
  }

  /**
   * Implement the component as function instead of using the arrow function notation.
   */
  function Table<T>(props: ITableProps<T>) {
    const onRowClick = () => props.onRowClick(props.data[0]);
    return (
      <>
        {props.data}
        <button onClick={onRowClick}>Simulate table row click</button>
      </>
    );
  }

  interface IPerson {
    firstname: string;
    lastname: string;
  }

  /**
   * Use the component as normal and access the data type safe
   */
  const App: React.FC = () => {
    const data: IPerson[] = [];

    const onRowClick = (row: IPerson): void => {
      console.log(row.firstname);
      console.log(row.lastname);
    };

    return (
      <>
        <Table data={data} onRowClick={onRowClick} />
      </>
    );
  };
}
