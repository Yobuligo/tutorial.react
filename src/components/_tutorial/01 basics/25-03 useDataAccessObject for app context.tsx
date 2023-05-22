/**
 * When it comes to app contexts, it is often annoying to write the same code multiple times. E.g. when handling an entity which needs the following steps:
 * 1. add a useState for the data objects
 * 2. provide the functions for adding and deleting that data object
 * ... repeat
 *
 * Using a separate hook helps a lot. A hook which provides an data access object to access the data objects and provides functions or methods to add and delete objects.
 */

import { createContext, useContext, useState } from "react";

/**
 * The Data Access Object which can be used for addressing the data objects and which provides methods for adding and deleting
 */
interface IDataAccessObject<T> {
  dataObjects: T[];
  onAdd: (dataObject: T) => void;
  onDelete: (dataObject: T) => void;
}

/**
 * The dummy implementation, which is required for the app context default implementation
 */
class DataAccessObjectDummy<T> implements IDataAccessObject<T> {
  dataObjects: T[] = [];
  onAdd(dataObject: T) {}
  onDelete(dataObject: T) {}
}

/**
 * Now we want to provide a custom hook, which keeps the useState with the dataObjects.
 * It returns an instance of {@link IDataAccessObject}.
 */
function useDataAccessObject<T>() {
  const [dataObjects, setDataObjects] = useState<T[]>([]);

  const onAdd = (dataObject: T) => {
    setDataObjects((previous) => [...previous, dataObject]);
  };

  const onDelete = (dataObject: T) => {
    setDataObjects((previous) => {
      const index = previous.findIndex((element) => element === dataObject);
      previous.splice(index, 1);
      return [...previous];
    });
  };

  return { dataObjects, onAdd, onDelete };
}

/**
 * We want to handle Todos, so provide a type of it
 */
interface ITodo {
  id: string;
  text: string;
}

/**
 * Provide the App Context and its data type. Here we provide a dao for the todos.
 */
const AppContextData = {
  todosDAO: new DataAccessObjectDummy<ITodo>(),
  dailyTodosDAO: new DataAccessObjectDummy<ITodo>(),
};

const AppContext = createContext(AppContextData);

/**
 * Implement the Todo and Todo-list components.
 * The Todo list accesses via properties. Instead accessing it via context would be fine as well. But here it only shows how components can be reused later when using the useDataAccessObject hook.
 * Pressing the delete button of a todo means to delete it.
 */
const Todo: React.FC<{
  dataAccessObject: IDataAccessObject<ITodo>;
  todo: ITodo;
}> = (props) => {
  return (
    <>
      {props.todo.text}
      <button onClick={() => props.dataAccessObject.onDelete(props.todo)}>
        Delete
      </button>
    </>
  );
};

const TodoList: React.FC<{ dataAccessObject: IDataAccessObject<ITodo> }> = (
  props
) => {
  const items = props.dataAccessObject.dataObjects.map((todo) => (
    <Todo dataAccessObject={props.dataAccessObject} todo={todo} />
  ));
  return <>{items}</>;
};

/**
 * The todo list wrapper is responsible for accessing the app context and call the todo lists
 */
const TodoListWrapper: React.FC = () => {
  const context = useContext(AppContext);
  return (
    <>
      <TodoList dataAccessObject={context.todosDAO} />
      <TodoList dataAccessObject={context.dailyTodosDAO} />
    </>
  );
};

/**
 * The main App displays the TodoList for general Todos and Daily Todos and provides the context.
 * To not implement useState, addDataObject, deleteDataObject multiple times, we use the hook useDataAccessObject.
 * Everything is handled within the hook itself.
 * So the context can be easily extended by additional entities.
 */
export const UseDataAccessObjectComponent: React.FC = () => {
  return (
    <AppContext.Provider
      value={{
        todosDAO: useDataAccessObject(),
        dailyTodosDAO: useDataAccessObject(),
      }}
    >
      <TodoListWrapper />
    </AppContext.Provider>
  );
};
