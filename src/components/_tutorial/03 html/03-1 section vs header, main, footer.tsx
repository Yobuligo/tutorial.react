/**
 * Next to a section there are e.g. header, main and footer to structure a side and of course div.
 *      div is a general container
 *      section means to wrap a content logically. They my have an header like a TodoCard. Each TodoCard gets an own section
 *      header means the head of a component
 *      main should be used only once for a page
 *      footer means the bottom of a component
 */

const Todo: React.FC = () => {
  return <>My Todo</>;
};

const TodoPage: React.FC = () => {
  return (
    <>
      <header>
        Here comes by title or a component to enter the user setup
      </header>
      <main>
        Here comes the main content, e.g. a TodoList
        <Todo />
        <Todo />
        <Todo />
      </main>
      <footer>
        Here comes e.g. some general and permanent information, perhaps some
        buttons
      </footer>
    </>
  );
};

const App: React.FC = () => {
  return <TodoPage />;
};
