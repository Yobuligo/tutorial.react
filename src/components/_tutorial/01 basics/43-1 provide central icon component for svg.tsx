/**
 * If we have a set of icons, we want often that it behaves the same.
 * This means that it is e.g. colored equally.
 * One solution is to provide a central styling class that has to be applied to each icon.
 * Another solution is to provide a central icon component, which applies the styling.
 * The component is that injected from outside and rendered.
 */

import { ReactComponent as Download } from "./43-1 icon download.svg";
import { ReactComponent as Upload } from "./43-1 icon upload.svg";
import styles from "./43-1 provide central icon component for svg.module.scss";

export namespace CentralSVGIconComponent {
  /**
   * This is our central icon component.
   * The component is responsible for displaying the SVG and to apply all properties which may are injected from outside.
   * It only has one property and this is the SVG itself and all its properties (like onClick event, etc.). The props are destructured from the component.
   * In addition we can assign a separate styling, which is set to all other icons.
   */
  const Icon: React.FC<{
    SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }> = ({ SVG, ...props }) => {
    return <SVG {...props} className={styles.icon} />;
  };

  /**
   * This is our default IconProps interface. It contains all props of an SVG.
   */
  interface IIconProps extends React.SVGProps<SVGSVGElement> {}

  /**
   * Now we can have various different icon components.
   */
  const DownloadIcon: React.FC<IIconProps> = (props) => {
    return <Icon SVG={Download} {...props} />;
  };

  const UploadIcon: React.FC<IIconProps> = (props) => {
    return <Icon SVG={Upload} {...props} />;
  };

  export const App: React.FC = () => {
    return (
      <>
        <DownloadIcon onClick={() => console.log("Download was clicked")} />
        <UploadIcon onClick={() => console.log("Upload was clicked")} />
      </>
    );
  };
}
