/**
 * Often we want to use images, which are not directly loaded in a component but instead we want to hand over the url.
 * This can be achieved via lazy loading.
 * Also see "reading project directory or path.ts" how to get the project path
 */

import { useEffect, useState } from "react";

interface IComponentProps {
  imageUrl: string;
}

const Component: React.FC<IComponentProps> = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    /**
     * Loads the image dynamically and saves the image url as useState.
     * Whenever the path changed the component is rerendered
     */
    const loadImage = async () => {
      const response = await import(props.imageUrl);
      setImage(response.default);
    };
    loadImage();
  }, [props.imageUrl]);

  return (
    <>
      <img src={image} alt="name" />
    </>
  );
};
