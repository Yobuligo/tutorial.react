/**
 * This chapter describes the best practice for a folder structure of a React project.
 * As an example the folders are created within that folder
 * 
 * src
 * src->assets (Images, etc.)
 * src->components (core components like buttons, inputs)
 * src->context (global contexts)
 * src->data (global data)
 * src->features (small self-contained components with an own folder structure with assets, context, data, hooks, etc.)
 *      Next to a separate folder structure it can contain an index.ts file which provides elements which should be exportable
 * src->libs (wrapper among libraries like axios, etc. So you only have to adjust libraries at a central point)
 * src->store (e.g. state management, e.g. for contexts)
 * src->hooks (global custom hooks)
 * src->pages (route components, generally the pages itself)
 * src->utils (pure functions, self-contained function, which can be used everywhere)
 */

export const FolderStructure: React.FC = () => {
  return <></>;
};
