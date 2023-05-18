/**
 * To update the title of a web page the value for document.title can be changed.
 * Title means the value which is displayed in the tab of a web page.
 */

const UpdatePageTitleComponent: React.FC = () => {
  document.title = "Page title";
  return <></>;
};
