/**
 * Using vector images has the advantage of not using in quality if the size change.
 * This is very helpful e.g. for icons and logos.
 * From scratch it is possible to display vector images (svg). But from scratch it is not possible to change the color of that image from out of the code.
 * But that is possible in several steps:
 *      1. download the image as vector image e.g. from https://thenounproject.com
 *      2. Import the image to your project (see 43. embed vector image and color it.svg)
 *      3. Add to each part the properties "fill" and "stroke" and set it to the value "current". Later current is filled by a given value
 *          fill - is the inner color
 *          stroke - is some kind of border color for each line / stroke
 *      4. Import the image as component by using at the top "import { ReactComponent from WaterDrop } from './<path.svg>"
 *      5. Call the component and set the properties "fill" and "stroke" by the required values.
 */

import { ReactComponent as WaterDrop } from "./43 embed vector image and color it.svg";

const App: React.FC = () => {
  return (
    <>
      <WaterDrop fill="red" stroke="red" />
    </>
  );
};
