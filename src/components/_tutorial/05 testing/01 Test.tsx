/**
 * How to test a component? The test framework is already activated in a react application which was created via create-react-app.
 * To test a component
 * 1. create a separate file which contains *test* in its name -> Welcome.tsx -> Welcome.test.tsx
 * 2. use method *test* followed by a description and a function that contains the test content
 * 3. use method *render* to provide the component which should be tested
 * 4. use property *screen* to get and find elements that should be tested or which should not exist
 * 5. use method *expect* to check the behavior
 * 6. run the test by calling *npm test*
 *
 * optional:
 * 1. create a test suite to enclose tests. e.g. tests for a specific component or function or whatever.
 *
 * Especially read the documentation of the frameworks
 * - https://jestjs.io/docs/getting-started
 * - https://testing-library.com/docs/react-testing-library/intro/
 */
export const TestWelcome: React.FC = () => {
  return (
    <>
      <h1>Welcome</h1>
      <p>Hello World!</p>
    </>
  );
};
