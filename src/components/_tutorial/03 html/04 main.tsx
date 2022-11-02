// The main tag can be used to provide the main content of a page.
// This is a content which don't repeat (repeating elements would be a navigation bar, copyright, etc.)

export const MainComponent: React.FC = () => {
  return (
    <>
      <header>
        <h2>I am the header</h2>
      </header>
      <main>
        <p>Any Main content of a page</p>
      </main>
      <footer>
        <h2>I am the footer</h2>
      </footer>
    </>
  );
};
