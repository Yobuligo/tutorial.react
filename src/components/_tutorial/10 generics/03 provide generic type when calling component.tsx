/**
 * The previous lessons were about providing components that are having generic types.
 * Anyway these types were inferred by e.g. providing data to a table or having an initialValue property.
 * A better way is to provide the generic type when calling the component.
 * This is possible to by setting the type after calling the component:
 *  <ComponentName<GenericInformation> />
 */

interface IGenericComponentProps<T> {
  data: T;
  onClick: (data: T) => void;
}

function GenericComponent<T>(props: IGenericComponentProps<T>) {
  return <>{props.data}</>;
}

const App: React.FC = () => {
  return (
    <>
      <GenericComponent<number>
        data={123}
        onClick={(data) => {
          // data is of type number, like it is specified
        }}
      />
    </>
  );
};
