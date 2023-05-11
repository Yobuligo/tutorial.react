/**
 * Provides a frame around some tags. By providing a legend the fieldset gets a name.
 */

export const FieldsetComponent: React.FC = () => {
  return (
    <fieldset>
      <legend>Name of the Fieldset</legend>
      <p>Content</p>
    </fieldset>
  );
};
