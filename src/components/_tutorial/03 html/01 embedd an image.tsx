// Probably there are several ways to embed an image into html
// The easiest way is to use an url
// but alternatively it is possible to provide it locally and use it as a resource. Therefore the local file has to be imported and assigned to an alias (here "placeholderImage")
// Finally the alias can be used within an expression in the src property of the img tag.

import placeholderImage from "./placeholder.svg";

export const EmbedAnImageComponent: React.FC = () => {
  return (
    <>
      <img src={placeholderImage} alt="Demo" />
    </>
  );
};
