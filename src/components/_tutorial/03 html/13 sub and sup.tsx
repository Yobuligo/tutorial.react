/**
 * The HTML tags sub and sups can be used to print smaller lower level letter or smaller upper level letter
 * Like in x² or in H2O (here the 2 must be small).
 * Actually those stuff has to be done in css, but it is also possible by the tags sub and sup
 */

const SubAndSupComponent: React.FC = () => {
  return (
    <>
      <div>
        H<sub>2</sub>O
      </div>
      x<sup>2</sup>y<sup>4</sup>
    </>
  );
};
