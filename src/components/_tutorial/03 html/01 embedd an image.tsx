/**
 * Probably there are several ways to embed an image into html
 * The easiest way is to use an url
 * but alternatively it is possible to provide it locally and use it as a resource. Therefore the local file has to be imported and assigned to an alias (here "placeholderImage")
 * Finally the alias can be used within an expression in the src property of the img tag.
 * 
 * If the file won't be displayed or you get the error "Cannot find module 'file-name.png' or its corresponding type declarations".
 * Check if the file "react-app-env.d.ts" exists in your project.
 * It must contain "/// <reference types="react-scripts" />"
 * Also see https://stackoverflow.com/questions/71099924/cannot-find-module-file-name-png-or-its-corresponding-type-declarations-type
 */

import placeholderImage from "./placeholder.svg";

export const EmbedAnImageComponent: React.FC = () => {
  return (
    <>
      <img src={placeholderImage} alt="Demo" />
    </>
  );
};
