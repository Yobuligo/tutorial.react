/**
 * There is a build in progress indicator in HTML
 */

const ProgressComponent: React.FC = () => {
  return (
    <>
      <progress value={50} max={100}>
        50%
      </progress>{" "}
      Description
    </>
  );
};
