// Within the previous example a REST call was triggered whenever a button was clicked.
// But it is more common to trigger a REST call whenever a page should be displayed.
// But in case the REST call was directly called within the component it would be rerendered whenever the REST call comes back which would trigger the REST call again and so on. It would end in an infinite loop.
// Instead the REST call can be called within a useEffect that is only called whenever the component is created for the first time. And also when the REST call function changed. Which can be achieved by using useCall.

import { useCallback, useEffect, useState } from "react";

interface IEntity {}

export const RESTForInitialLoadingComponent: React.FC = () => {
  const [data, setData] = useState<IEntity[]>();

  /**
   * Map json data to entity
   */
  const toEntity = (data: any): IEntity[] => {
    return data.map((row: any) => {
      return { ...row };
    });
  };

  /**
   * Provide function to fetch data via REST
   * This function is a 'useCallback' which means the function object is cached and whenever the component is reloaded the same function is instance is reused.
   */
  const loadData = useCallback(async () => {
    fetch("<myUrl>>")
      .then((response) => {
        // convert response to json
        return response.json();
      })
      .then((data: any) => {
        // map json data to concrete objects and set the new data
        const entities = toEntity(data);
        setData(entities);
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return <></>;
};
