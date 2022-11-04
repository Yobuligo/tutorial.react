// Whenever an action needs more time it makes sense to add a loading spinner or a loading text.
// Actually it is pretty easy. A property is required to keep the information if data are loaded.
// Whenever that property is true the loading text or loading spinner is displayed

import { useState } from "react";

const LoadingText: React.FC = () => {
  return (
    <>
      <p>... Loading data</p>
    </>
  );
};

// The following examples shows how a loading text is displayed.
// Whenever the button is clicked the property `isLoading` is set to true and the loading text is displayed.
// Some data are fetched from an endpoint. As soon as the REST call has finished successfully the loading spinner is disabled.
const LoadingSpinnerComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  async function onLoadComponentHandler() {
    setIsLoading(true);
    fetch("https://swapi.dev/api/films/").then((response) => {
      setIsLoading(false);
    });
  }

  return (
    <>
      <button onClick={onLoadComponentHandler}>Load Component</button>
      {isLoading && <LoadingText />}
    </>
  );
};

export default LoadingSpinnerComponent;
