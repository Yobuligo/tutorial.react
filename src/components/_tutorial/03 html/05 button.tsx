// Actually the HTML button is easy to use.
// But there is something you should know about.
// A button has a property type.
// In case this type wasn't set it should be 'submit' or something. Which means if that button is used within a form it triggers the submit action of that form.
// To avoid that. The button type has to be set to 'button'. So the button is just clicked
const ButtonComponent: React.FC = () => {
  return (
    <>
      <form>
        <button>Calls the submit action of the form</button>
        <button type="button">
          Doesn't call the submit action of the form as it is a "normal" button
        </button>
      </form>
    </>
  );
};
