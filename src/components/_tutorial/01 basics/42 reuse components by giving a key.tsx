/**
 * Imagine we have a Todo-list.
 * Each row is represented by a Todo component. This Todo component might have other components with own useStates etc.
 *
 * What happens when the Todo-list changed by adding or removing a Todo? It is rerendered. And this means that the Todo components are recreated. And this means the useStates gets lost.
 * To avoid it and even reuse components when rerender the application can be down by providing a key to the component which never changed during runtime.
 *
 * In the following example the key will be the Todo-Id. So the Todo component is always connected to the same Todo with the same Todo-Id and so React is very clever and can reuse that component instead of recreating it.
 */

import { useState } from "react";

interface ITodo {
  id: string;
  text: string;
}

const Todo: React.FC<{ todo: ITodo }> = (props) => {
  return <>{props.todo.text}</>;
};

const TodoList: React.FC<{ todos: ITodo[] }> = (props) => {
  // This line creates the Todo components. By assigning the todo.id as key helps react to recognize to REUSE the Todo component which was created beforehand.
  // Finally this means that e.g. inner useState are still stable and won't be recreated.
  const items = props.todos.map((todo) => <Todo key={todo.id} todo={todo} />);
  return <>{items}</>;
};

export const ReUsageOfComponentsWithKey: React.FC = () => {
  const [todos] = useState<ITodo[]>([]);
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};
